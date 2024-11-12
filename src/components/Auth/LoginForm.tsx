import { useState, useContext, useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";
import { GoogleLogin } from "@react-oauth/google";
import { getToken, storeToken } from "../../helpers/firebase";
import { useLoginUserMutation } from "../../lib/apis/authApi";
import { useGetCurrentUserMutation } from "../../lib/apis/userApi";
import { useResendVerificationTokenMutation } from "../../lib/apis/authApi";
import Success from "../commons/Success";
import Error from "../commons/Error";
import Icon from "../commons/Icon";
import CloseFormModalBtn from "../commons/CloseFormModalBtn";
import FormButton from "../commons/FormButton";
import { ModalContext } from "../../context/modal-context";
import { MessageContext } from "../../context/message-context";
import styles from "./Auth.module.css";

const LoginForm: React.FC = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordType, setPasswordType] = useState("password");

  const [loginUser, { data, isError, error, isLoading, isSuccess }] =
    useLoginUserMutation();

  const [
    resendVerificationToken,
    { isSuccess: tokenSuccess, error: tokenError },
  ] = useResendVerificationTokenMutation();

  const [getCurrentUser] = useGetCurrentUserMutation();

  const navigate = useNavigate();

  const modalCtx = useContext(ModalContext);
  const messageCtx = useContext(MessageContext);

  const onSubmitFormHandler = async (event: React.FormEvent) => {
    event.preventDefault();

    if (!email || !password) return;

    await loginUser({ email, password });
  };

  useEffect(() => {
    const apiError =
      isError &&
      error &&
      "data" in error &&
      typeof error.data === "object" &&
      error.data !== null &&
      "message" in error.data &&
      (error.data as { message: string }).message
        .split(":")
        .map((msg, index) => msg)[0];

    if (apiError === "You have not verified your account!") {
      resendVerificationToken({ action_type: "registration", email });
    }
  }, [isError, error]);

  useEffect(() => {
    if (tokenSuccess) {
      messageCtx.updateSuccessMessage(
        "auth-verification",
        `A verification code has been sent to ${email}`
      );
      navigate("/auth/verify");
    }
  }, [tokenSuccess]);

  useEffect(() => {
    const onLoginSuccess = async () => {
      const result = await storeToken(data?.data?.accessToken);

      if (result) {
        localStorage.setItem("r_t", data?.data?.refreshToken);
        getCurrentUser(data?.data?.accessToken);
      }
    };
    if (isSuccess) {
      onLoginSuccess();
      navigate("/");
    }
  }, [isSuccess]);

  return (
    <div
      className={`relative p-4 w-full max-w-md max-h-fit ${styles.auth_form_container}`}
    >
      <div className="relative rounded-lg shadow">
        <CloseFormModalBtn
          onToggleModal={() => {
            navigate("/");
            modalCtx.toggleModal("auth");
          }}
          formTitle="Welcome Back, Login Here"
        />

        <div className="flex gap-4 justify-center mt-4 text-sm font-medium text-gray-300">
          Don't have an account?
          <Link to="/auth/sign-up" className={styles.account}>
            Create account
          </Link>
        </div>

        <div className="w-4/5 mx-auto my-10">
          <GoogleLogin onSuccess={() => {}} />
        </div>

        {messageCtx.successMessage.type === "auth-login" && (
          <Success message={messageCtx.successMessage.message} />
        )}

        {/* backend Api error */}
        {isError &&
          error &&
          "data" in error &&
          typeof error.data === "object" &&
          error.data !== null &&
          "message" in error.data &&
          (error.data as { message: string }).message
            .split(":")
            .map((msg, index) => (
              <Error key={index} message={msg || "something went wrong"} />
            ))}

        <div className="p-4 md:p-5">
          <form className="space-y-4" action="#" onSubmit={onSubmitFormHandler}>
            <div>
              <label
                htmlFor="email"
                className={`${styles.form_label} block mb-2  font-medium`}
              >
                Email
              </label>
              <input
                type="email"
                name="email"
                id="email"
                className={`${styles.form_input} text-sm block w-full p-2.5  text-white`}
                placeholder="name@company.com"
                onChange={(event) => setEmail(event.target.value)}
                value={email}
              />
            </div>
            <div>
              <label
                htmlFor="password"
                className={`block mb-2  font-medium ${styles.form_label}`}
              >
                Password
              </label>
              <div className="flex items-center">
                <input
                  type={passwordType}
                  name="password"
                  id="password"
                  placeholder="••••••••"
                  className={`${styles.form_input} text-sm block w-full p-2.5  text-white`}
                  onChange={(event) => setPassword(event.target.value)}
                  value={password}
                />
                <Icon
                  iconClasses="fa-regular fa-eye -ml-7 cursor-pointer text-gray-400"
                  onClickIcon={() =>
                    passwordType === "password"
                      ? setPasswordType("text")
                      : setPasswordType("password")
                  }
                />
              </div>
            </div>
            <div className="flex justify-between">
              <div className="flex items-start">
                <div className="flex items-center h-5">
                  <input
                    id="remember"
                    type="checkbox"
                    value=""
                    className={styles.form_input}
                  />
                </div>
                <label
                  htmlFor="remember"
                  className={`${styles.form_label} ms-2 text-sm font-medium text-gray-300`}
                >
                  Remember me
                </label>
              </div>
              <Link
                to="/auth/password/reset"
                className={`${styles.account} text-sm font-medium`}
              >
                Forgot Password?
              </Link>
            </div>
            <FormButton
              isLoading={isLoading}
              formIsValid={true}
              textContent="Login to your account"
            />
          </form>
        </div>
      </div>
    </div>
  );
};

export default LoginForm;

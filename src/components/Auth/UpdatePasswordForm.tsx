import { useState, useEffect, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import FormButton from "../commons/FormButton";
import CloseFormModalBtn from "../commons/CloseFormModalBtn";
import useFormValidation from "../../hooks/useFormValidation";
import { useResendVerificationTokenMutation } from "../../lib/apis/authApi";
import Icon from "../commons/Icon";
import { useUpdatePasswordMutation } from "../../lib/apis/authApi";
import Success from "../commons/Success";
import Error from "../commons/Error";
import { ModalContext } from "../../context/modal-context";
import { MessageContext } from "../../context/message-context";
import styles from "./Auth.module.css";

const UpdatePasswordForm: React.FC = () => {
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [passwordResetCode, setPasswordResetCode] = useState("");
  const [passwordType, setPasswordType] = useState("password");
  const [confirmPasswordType, setConfirmPasswordType] = useState("password");

  const [updatePassword, { isSuccess, isLoading, isError, error, data }] =
    useUpdatePasswordMutation();

  const [
    resendVerificationToken,
    {
      error: resendTokenError,
      isLoading: resendTokenLoading,
      isSuccess: resendTokenSuccess,
    },
  ] = useResendVerificationTokenMutation();

  // validate registration form hook
  const [formIsValid, formError, validateFormInputs] = useFormValidation() as [
    boolean,
    { field: string; error: string },
    (type: string, formProps: any) => void
  ];

  const navigate = useNavigate();

  const modalCtx = useContext(ModalContext);

  const messageCtx = useContext(MessageContext);

  useEffect(() => {
    if (typeof validateFormInputs === "function") {
      const timer = setTimeout(() => {
        validateFormInputs("update-password", {
          password,
          confirmPassword,
          passwordResetCode,
        });
      }, 1000);
      return () => {
        clearTimeout(timer);
      };
    }
  }, [password, confirmPassword, passwordResetCode]);

  const onSubmitHandler = async (event: React.FormEvent) => {
    event.preventDefault();

    if (!formIsValid || formError.error) return;

    const email = messageCtx?.successMessage?.message.split(" ")[8];

    console.log(email);

    const passwordData = {
      password,
      confirm_password: confirmPassword,
      token: passwordResetCode,
      email,
    };
    await updatePassword(passwordData);
  };

  useEffect(() => {
    if (isSuccess) {
      messageCtx?.updateSuccessMessage(
        "auth-login",
        `Password updated successfully, login with valid credentails`
      );

      navigate("/auth/login");
    }

    if (resendTokenSuccess) {
      messageCtx.updateSuccessMessage(
        "auth-password-update",
        `A password reset token has been sent to ${
          messageCtx?.successMessage?.message.split(" ")[8]
        }`
      );
    }
  }, [isSuccess, resendTokenSuccess]);

  return (
    <div
      className={`relative p-4 w-full max-w-md max-h-fit ${styles.auth_form_container}`}
    >
      <div className="relative mb-3 rounded-lg shadow">
        <CloseFormModalBtn
          onToggleModal={() => {
            navigate("/");
            modalCtx.toggleModal("auth");
          }}
          formTitle="Update Password"
        />

        {!resendTokenLoading &&
          messageCtx.successMessage.type === "auth-password-update" && (
            <Success message={messageCtx.successMessage.message} />
          )}

        {formError?.error && <Error message={formError.error} />}

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

        {resendTokenError &&
          resendTokenError &&
          "data" in resendTokenError &&
          typeof resendTokenError.data === "object" &&
          resendTokenError.data !== null &&
          "message" in resendTokenError.data &&
          (resendTokenError.data as { message: string }).message
            .split(":")
            .map((msg, index) => (
              <Error key={index} message={msg || "something went wrong"} />
            ))}

        <div className="p-4 md:p-5">
          <form className="space-y-4" action="#" onSubmit={onSubmitHandler}>
            <div>
              <label
                htmlFor="email"
                className={`${styles.form_label} block mb-2  font-medium`}
              >
                Password Reset Code
              </label>
              <div className="flex items-center">
                <input
                  type="text"
                  name="password-reset-code"
                  id="text-input"
                  className={`${
                    styles.form_input
                  } text-sm block w-full p-2.5  dark:text-white ${
                    formError.field === "passwordResetCode" &&
                    styles.error_identifier
                  }`}
                  placeholder="enter verification code"
                  value={passwordResetCode}
                  onChange={(event) => setPasswordResetCode(event.target.value)}
                />

                <Link
                  to="#"
                  className={` ${styles.resend_link}  -ml-20`}
                  onClick={() =>
                    resendVerificationToken({
                      email: messageCtx?.successMessage?.message.split(" ")[8],
                      action_type: "reset",
                    })
                  }
                >
                  Resend Code
                </Link>
              </div>
            </div>

            <div>
              <label
                htmlFor="new-password"
                className={`${styles.form_label} block mb-2  font-medium`}
              >
                New Password
              </label>
              <div className="flex items-center">
                <input
                  onChange={(event) => setPassword(event.target.value)}
                  type={passwordType}
                  name="new-password"
                  className={`${
                    styles.form_input
                  } text-sm w-full p-2.5  dark:text-white ${
                    formError.field === "password" && styles.error_identifier
                  }`}
                  placeholder="••••••••"
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

            <div>
              <label
                htmlFor="confirm-new-password"
                className={`${styles.form_label} block mb-2  font-medium`}
              >
                Confirm New Password
              </label>
              <div className="flex items-center ">
                <input
                  onChange={(event) => setConfirmPassword(event.target.value)}
                  type={confirmPasswordType}
                  name="confirm-new-password"
                  id="text-input"
                  className={`${
                    styles.form_input
                  }  text-sm w-full p-2.5  dark:text-white ${
                    formError.field === "confirmPassword" &&
                    styles.error_identifier
                  }`}
                  placeholder="••••••••"
                  value={confirmPassword}
                />
                <Icon
                  iconClasses="fa-regular fa-eye -ml-7 cursor-pointer text-gray-400"
                  onClickIcon={() =>
                    confirmPasswordType === "password"
                      ? setConfirmPasswordType("text")
                      : setConfirmPasswordType("password")
                  }
                />
              </div>
            </div>

            <FormButton
              isLoading={isLoading}
              formIsValid={formIsValid}
              textContent="Update Password"
            />
          </form>
        </div>
      </div>
    </div>
  );
};

export default UpdatePasswordForm;

import { useState, useEffect, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { GoogleLogin } from "@react-oauth/google";
import { ModalContext } from "../../context/modal-context";
import { MessageContext } from "../../context/message-context";
import Error from "../commons/Error";
import Icon from "../commons/Icon";
import useFormValidation from "../../hooks/useFormValidation";
import { useRegisterNewUSerMutation } from "../../lib/apis/authApi";
import FormButton from "../commons/FormButton";
import CloseFormModalBtn from "../commons/CloseFormModalBtn";
// import { countries } from "../../lib/dummy_data/dummyData";
import styles from "./Auth.module.css";

const SignupForm: React.FC = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [terms, setTerms] = useState(false);

  const [passwordType, setPasswordType] = useState("password");
  const [confirmPasswordType, setConfirmPasswordType] = useState("password");

  // validate registration form hook
  const [formIsValid, formError, validateFormInputs] = useFormValidation() as [
    boolean,
    { field: string; error: string },
    (type: string, formProps: any) => void
  ];

  const [registerNewUSer, { error, isError, isLoading, isSuccess, data }] =
    useRegisterNewUSerMutation();

  const modalCtx = useContext(ModalContext);
  const messageCtx = useContext(MessageContext);

  const navigate = useNavigate();

  useEffect(() => {
    if (typeof validateFormInputs === "function") {
      const timer = setTimeout(() => {
        validateFormInputs("auth", {
          firstName,
          lastName,
          email,
          password,
          confirmPassword,
          terms,
        });
      }, 1000);
      return () => {
        clearTimeout(timer);
      };
    }
  }, [firstName, lastName, email, password, confirmPassword, terms]);

  const onSubmitHandler = async (event: React.FormEvent) => {
    event.preventDefault();

    if (!formIsValid || formError.error) return;

    const regData = {
      first_name: firstName,
      last_name: lastName,
      email,
      password,
      confirm_password: confirmPassword,
      role: "client",
    };

    await registerNewUSer(regData);
  };

  useEffect(() => {
    if (isSuccess) {
      messageCtx.updateSuccessMessage(
        "auth-verification",
        `A code has been sent to ${email}, please verify your account`
      );
      navigate("/auth/verify");
    }
  }, [isError, error, isSuccess]);

  return (
    <div
      className={`relative p-4 w-full max-w-2xl h-fit  ${styles.auth_form_container}`}
    >
      <div className="relative rounded-lg shadow">
        <CloseFormModalBtn
          onToggleModal={() => {
            navigate("/");
            modalCtx.toggleModal("auth");
          }}
          formTitle=" Get Started, Signup Here"
        />

        <div className="flex gap-4 justify-center mt-2 text-sm font-medium text-gray-500 dark:text-gray-300">
          Have an account?
          <Link to="/auth/login" className={styles.account}>
            Sign in
          </Link>
        </div>

        <div className="w-3/5 md:w-4/6 mx-auto my-10">
          <GoogleLogin onSuccess={() => {}} />
        </div>

        {/* Client Form validation error */}
        {formError?.error && <Error message={formError.error} />}

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

        <div className="px-4  md:px-5">
          <form onSubmit={onSubmitHandler} className="space-y-4" action="#">
            <div className="sm:flex max-md:gap-9 sm:justify-between items-center">
              <div className={styles.name_div}>
                <label
                  htmlFor="first-name"
                  className={`${styles.form_label}  mb-2  font-medium`}
                >
                  First Name
                </label>
                <input
                  onChange={(event) => setFirstName(event.target.value)}
                  type="text-input"
                  name="first-name"
                  className={`${
                    styles.form_input
                  } text-sm w-full p-2.5  dark:text-white ${
                    formError.field === "firstName" && styles.error_identifier
                  }`}
                  placeholder="John"
                  value={firstName}
                />
              </div>

              <div>
                <label
                  htmlFor="last-name"
                  className={`${styles.form_label}  mb-1  font-medium`}
                >
                  Last Name
                </label>
                <input
                  onChange={(event) => setLastName(event.target.value)}
                  type="text"
                  name="first-name"
                  id="text-input"
                  className={`${
                    styles.form_input
                  } text-sm w-full p-2.5  dark:text-white ${
                    formError.field === "lastName" && styles.error_identifier
                  }`}
                  placeholder="John"
                  value={lastName}
                />
              </div>
            </div>

            <div>
              <label
                htmlFor="email"
                className={`block mb-2  font-medium ${styles.form_label}`}
              >
                Email
              </label>
              <input
                onChange={(event) => setEmail(event.target.value)}
                type="email"
                name="email"
                id="email"
                placeholder="johndoe@gmail.com"
                className={`${
                  styles.form_input
                } text-sm block w-full p-2.5  dark:text-white ${
                  formError.field === "email" && styles.error_identifier
                }`}
                value={email}
              />
            </div>

            <div className="flex gap-5 max-md:gap-9 sm:justify-between items-center">
              <div className="w-full">
                <label
                  htmlFor="password"
                  className={`${styles.form_label}  mb-2  font-medium`}
                >
                  Password
                </label>
                <div className="flex items-center">
                  <input
                    onChange={(event) => setPassword(event.target.value)}
                    type={passwordType}
                    name="password"
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

              <div className="w-full">
                <label
                  htmlFor="last-name"
                  className={`${styles.form_label}  mb-1  font-medium`}
                >
                  Confirm Password
                </label>
                <div className="flex items-center ">
                  <input
                    onChange={(event) => setConfirmPassword(event.target.value)}
                    type={confirmPasswordType}
                    name="confirm-password"
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
            </div>

            <div className="flex justify-between">
              <div className="flex items-start">
                <div className="flex items-center h-5">
                  <input
                    onChange={(event) => setTerms(event.target.checked)}
                    id="terms-and-conditions"
                    type="checkbox"
                    className={styles.form_input}
                  />
                </div>
                <label
                  htmlFor="terms and condition"
                  className={`${styles.form_label} ms-2  font-medium text-gray-900 dark:text-gray-300`}
                >
                  I understand and agree to the{" "}
                  <a href="" className="underline">
                    DeskZone Terms of Service
                  </a>
                  , including the User{" "}
                  <a href="" className="underline">
                    Agreement
                  </a>{" "}
                  and{" "}
                  <a href="" className="underline">
                    Privacy Policy
                  </a>
                  .
                </label>
              </div>
            </div>

            <FormButton
              isLoading={isLoading}
              formIsValid={formIsValid}
              textContent="Create my account"
            />
          </form>
        </div>
      </div>
    </div>
  );
};

export default SignupForm;

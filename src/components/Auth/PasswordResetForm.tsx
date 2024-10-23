import { useState, useEffect, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useForgotPasswordMutation } from "../../lib/apis/authApi";
import useFormValidation from "../../hooks/useFormValidation";
import CloseFormModalBtn from "../commons/CloseFormModalBtn";
import FormButton from "../commons/FormButton";
import Error from "../commons/Error";
import { ModalContext } from "../../context/modal-context";
import { MessageContext } from "../../context/message-context";
import styles from "./Auth.module.css";

const PasswordResetForm: React.FC = () => {
  const [email, setEmail] = useState("");

  const [forgotPassword, { isError, isSuccess, isLoading, data, error }] =
    useForgotPasswordMutation();

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
        validateFormInputs("reset", {
          email,
        });
      }, 1000);
      return () => {
        clearTimeout(timer);
      };
    }
  }, [email]);

  const onSubmitHandler = async (event: React.FormEvent) => {
    event.preventDefault();

    if (!formIsValid || formError.error) return;

    return await forgotPassword({ email });
  };

  useEffect(() => {
    if (isSuccess) {
      messageCtx.updateSuccessMessage(
        "auth-password-update",
        `A password reset token has been sent to ${email}`
      );
      navigate("/auth/password/update");
    }
  }, [isSuccess]);

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
          formTitle="Reset Password"
        />

        <div className="flex gap-4 justify-center mt-4  mb-3 text-sm font-medium text-gray-500 dark:text-gray-300">
          Don't have an account?
          <Link to="/auth/sign-up" className={styles.account}>
            Create account
          </Link>
        </div>

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

        <div className="p-4 md:p-5">
          <form className="space-y-4" action="#" onSubmit={onSubmitHandler}>
            <div>
              <label
                htmlFor="email"
                className={`${styles.form_label} block mb-2  font-medium`}
              >
                Email
              </label>
              <input
                type="text"
                name="verification-code"
                id="text-input"
                className={`${
                  styles.form_input
                } text-sm block w-full p-2.5  dark:text-white ${
                  formError.field === "email" && styles.error_identifier
                }`}
                placeholder="johndoe@gmail.com"
                value={email}
                onChange={(event) => setEmail(event.target.value)}
              />
            </div>

            <FormButton
              isLoading={isLoading}
              formIsValid={formIsValid}
              textContent="Reset Password"
            />
          </form>
        </div>
      </div>
    </div>
  );
};

export default PasswordResetForm;

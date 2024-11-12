import { useState, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import Success from "../commons/Success";
import Error from "../commons/Error";
import FormButton from "../commons/FormButton";
import CloseFormModalBtn from "../commons/CloseFormModalBtn";
import { ModalContext } from "../../context/modal-context";
import { MessageContext } from "../../context/message-context";
import styles from "./Auth.module.css";

const VerificationResetPasswordForm: React.FC = () => {
  const [passwordResetCode, setPasswordResetCode] = useState("");

  const navigate = useNavigate();

  const modalCtx = useContext(ModalContext);

  const messageCtx = useContext(MessageContext);

  const onSubmitHandler = (event: React.FormEvent) => {
    event.preventDefault();
    if (!passwordResetCode) {
      return messageCtx.updateErrorMessage(
        "auth-password-reset",
        "Password reset code is required"
      );
    }

    messageCtx.updateSuccessMessage(
      "auth-password-update",
      "Password reset verification successful"
    );

    return navigate("/auth/password/update");
  };

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
          formTitle="Verify Password Reset"
        />

        {messageCtx.successMessage.type === "auth-password-reset" && (
          <Success message={messageCtx.successMessage.message} />
        )}

        <div className="p-4 md:p-5">
          <form className="space-y-4" action="#" onSubmit={onSubmitHandler}>
            <div>
              <label
                htmlFor="email"
                className={`${styles.form_label} block mb-2  font-medium`}
              >
                Password Reset Code
              </label>
              <input
                type="text"
                name="password-reset-code"
                id="text-input"
                className={`${styles.form_input} text-sm block w-full p-2.5  text-white`}
                placeholder="enter verification code"
                value={passwordResetCode}
                onChange={(event) => setPasswordResetCode(event.target.value)}
              />
            </div>

            <FormButton
              isLoading={true}
              formIsValid={true}
              textContent="Verify Password Reset"
            />
          </form>
        </div>
      </div>
    </div>
  );
};

export default VerificationResetPasswordForm;

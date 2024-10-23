import { useState, useEffect, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import useFormValidation from "../../hooks/useFormValidation";
import { useVerifyUserAcountMutation } from "../../lib/apis/authApi";
import { useResendVerificationTokenMutation } from "../../lib/apis/authApi";
import Success from "../commons/Success";
import Error from "../commons/Error";
import FormButton from "../commons/FormButton";
import CloseFormModalBtn from "../commons/CloseFormModalBtn";
import { MessageContext } from "../../context/message-context";
import { ModalContext } from "../../context/modal-context";
import styles from "./Auth.module.css";

const VerificationForm: React.FC = () => {
  const [verificationCode, setVerificationCode] = useState("");
  const messageCtx = useContext(MessageContext);

  const modalCtx = useContext(ModalContext);

  // validate registration form hook
  const [formIsValid, formError, validateFormInputs] = useFormValidation() as [
    boolean,
    { field: string; error: string },
    (type: string, formProps: any) => void
  ];

  const [verifyUserAcount, { isError, error, isSuccess, isLoading }] =
    useVerifyUserAcountMutation();

  const [
    resendVerificationToken,
    {
      error: resendTokenError,
      isLoading: resendTokenLoading,
      isSuccess: resendTokenSuccess,
    },
  ] = useResendVerificationTokenMutation();

  const navigate = useNavigate();

  useEffect(() => {
    if (typeof validateFormInputs === "function") {
      const timer = setTimeout(() => {
        validateFormInputs("verification", {
          verificationCode,
        });
      }, 1000);
      return () => {
        clearTimeout(timer);
      };
    }
  }, [verificationCode]);

  const onSubmitHandler = async (event: React.FormEvent) => {
    event.preventDefault();

    if (!formIsValid || formError.error) return;

    const email = messageCtx?.successMessage?.message
      .split(" ")[6]
      .slice(0, -1);

    const verificationData = {
      token: verificationCode,
      email,
    };

    await verifyUserAcount(verificationData);
  };

  useEffect(() => {
    if (isSuccess) {
      messageCtx.updateSuccessMessage(
        "auth-login",
        `Account verification successful, login with valid credentails`
      );
      navigate("/auth/login");
    }

    if (resendTokenSuccess) {
      messageCtx.updateSuccessMessage(
        "auth-verification",
        `A code has been sent to ${messageCtx?.successMessage?.message
          .split(" ")[6]
          .slice(0, -1)}, please verify your account`
      );
    }
  }, [isSuccess, resendTokenSuccess]);

  return (
    <div
      className={`relative p-4 w-full max-w-md max-h-fit ${styles.auth_form_container}`}
    >
      <div className="relative mb-3 rounded-lg shadow">
        <CloseFormModalBtn
          formTitle="Verify Account"
          onToggleModal={() => {
            navigate("/");
            modalCtx.toggleModal("auth");
          }}
        />

        {!resendTokenLoading &&
          messageCtx.successMessage.type === "auth-verification" && (
            <Success message={messageCtx.successMessage.message} />
          )}

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
                Verification Code
              </label>
              <div className="flex items-center">
                <input
                  type="text"
                  name="verification-code"
                  id="text-input"
                  className={`${styles.form_input} text-sm block w-full p-2.5  dark:text-white`}
                  placeholder="enter verification code"
                  value={verificationCode}
                  onChange={(event) => setVerificationCode(event.target.value)}
                />

                <Link
                  to="#"
                  className={` ${styles.resend_link}  -ml-20`}
                  onClick={() =>
                    resendVerificationToken({
                      email: messageCtx?.successMessage?.message
                        .split(" ")[6]
                        .slice(0, -1),
                      action_type: "registration",
                    })
                  }
                >
                  Resend Code
                </Link>
              </div>
            </div>

            <FormButton
              formIsValid={formIsValid}
              isLoading={isLoading}
              textContent="Verify my account"
            />
          </form>
        </div>
      </div>
    </div>
  );
};

export default VerificationForm;

import styles from "../Auth/Auth.module.css";
import ButtonLoader from "./ButtonLoader";

interface FormButtonProps {
  formIsValid?: boolean;
  isLoading?: boolean;
  textContent?: string;
}

const FormButton: React.FC<FormButtonProps> = ({
  formIsValid,
  isLoading,
  textContent,
}) => {
  return (
    <>
      {formIsValid ? (
        <button
          type="submit"
          className={`w-full ${
            isLoading && "flex justify-center items-center pt-5"
          } text-white font-medium text-sm px-5 py-2.5 text-center ${
            styles.form_btn
          }`}
        >
          {isLoading ? <ButtonLoader /> : textContent}
        </button>
      ) : (
        <button
          type="submit"
          className={`w-full text-white  font-medium  text-sm px-5 py-2.5 text-center ${styles.form_btn} disabled:cursor-not-allowed`}
          disabled
        >
          {textContent}
        </button>
      )}
    </>
  );
};

export default FormButton;

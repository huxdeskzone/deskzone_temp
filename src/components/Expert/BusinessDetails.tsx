import styles from "./Expert.module.css";
import useFormValidation from "../../hooks/useFormValidation";
import { IBusinessDetailsProps } from "../../interfaces/propsInterfaces";

const BusinessDetails: React.FC<IBusinessDetailsProps> = ({
  onChangeBusinessName,
  onChangeAbout,
  businessName,
  about,
  formError,
}) => {
  return (
    <>
      <div>
        <label
          htmlFor="business-name"
          className={`block mb-2  font-medium ${styles.form_label}`}
        >
          Business Name
        </label>
        <input
          onChange={(event) => onChangeBusinessName(event.target.value)}
          type="text"
          name="business-name"
          id="email"
          placeholder="Deskzone"
          className={`${
            styles.form_input
          } text-sm block w-full p-2.5  dark:text-white ${
            formError.field === "email" && styles.error_identifier
          }`}
          value={businessName}
        />
      </div>

      <div className="flex gap-5 max-md:gap-9 sm:justify-between items-center">
        <div className="w-full">
          <label
            htmlFor="about-me"
            className={`${styles.form_label}  mb-3  font-medium`}
          >
            Write about yourself
          </label>
          <textarea
            // onChange={(event) => setPassword(event.target.value)}
            name="about-me"
            id="text-input"
            className={`${
              styles.form_about_input
            } text-sm block w-full p-2.5  dark:text-white ${
              formError.field === "email" && styles.error_identifier
            }`}
            value={about}
            placeholder="I am a professional in..."
            onChange={(event) => onChangeAbout(event.target.value)}
          ></textarea>
        </div>
      </div>
    </>
  );
};

export default BusinessDetails;

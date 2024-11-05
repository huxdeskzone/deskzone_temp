import styles from "./Expert.module.css";
import { IBusinessDetailsProps } from "../../interfaces/propsInterfaces";

const BusinessDetails: React.FC<IBusinessDetailsProps> = ({
  onChangeAbout,
  businessName,
  about,
  formError,
}) => {
  return (
    <>
      <div className="flex gap-5 max-md:gap-9 sm:justify-between items-center">
        <div className="w-full">
          <label
            htmlFor="service-title"
            className={`${styles.form_label} block mb-2  font-medium`}
          ></label>
          <span
            className={`${styles.required_field} flex gap-2 items-center  absolute ml-3 mt-1 text-sm `}
          >
            Description (required){" "}
            <a
              className={styles.input_info}
              href="#"
              data-title="A catchy description can get you attracted to your decided client"
            >
              <i className="fa-regular w-4 h-4 fa-circle-question"></i>
            </a>
          </span>
          <textarea
            onChange={(event) => onChangeAbout(event.target.value)}
            name="profile.bio"
            className={` ${styles.profile_input} ${
              formError.field === "about" && styles.error_border
            } text-cyan-50 min-h-[150px] w-full appearance-none rounded border border-light-500 px-2 py-3 text-13px text-dark ring-[0.5px] ring-light-500 placeholder:text-dark-900 focus:border-brand focus:ring-[0.5px] focus:ring-brand dark:border-dark-600 dark:text-light dark:ring-dark-600 dark:placeholder:text-dark-700 dark:focus:border-brand dark:focus:ring-brand lg:px-5 bg-transparent`}
            placeholder="we are a professional web developer"
          ></textarea>
        </div>
        <span className="absolute left-3/4 mt-32 -ml-14 text-fuchsia-200 text-sm">
          {about?.length}/150
        </span>
      </div>
    </>
  );
};

export default BusinessDetails;

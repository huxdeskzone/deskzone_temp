import { ICloseBtnProps } from "../../interfaces/propsInterfaces";
import styles from "./CloseServiceDetailsModal.module.css";

const CloseServiceDetailsModal: React.FC<ICloseBtnProps> = ({
  onToggleModal,
  businessLogo,
  service,
  formTitle,
}) => {
  return (
    <div
      className={`${styles.close_container} flex items-center justify-between rounded-t`}
    >
      <div className="flex gap-5 my-5">
        <a href="/" className={`${styles.service} max-sm:text-base`}>
          {service}
        </a>

        <img src={businessLogo} />
      </div>

      <button
        onClick={onToggleModal}
        type="button"
        className="end-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white"
        data-modal-hide="authentication-modal"
      >
        <svg
          className="w-3 h-3"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 14 14"
        >
          <path
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
          />
        </svg>
        <span className="sr-only">Close modal</span>
      </button>
    </div>
  );
};

export default CloseServiceDetailsModal;

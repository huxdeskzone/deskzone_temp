import { IServicesProps } from "../../interfaces/propsInterfaces";
import styles from "./ExpertServices.module.css";

const ExpertServiceCard: React.FC<IServicesProps> = ({
  businessLogo,
  businessName,
  id,
  price,
  service,
  servicePoster,
}) => {
  return (
    <div
      className={`group relative aspect-[3/2] w-full justify-center ${styles.services_card}`}
    >
      <img
        alt={`${businessName} deskzone  service poster`}
        loading="lazy"
        decoding="async"
        data-nimg="fill"
        className="w-full h-full bg-light-500 object-cover dark:bg-dark-400"
        // sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        src={servicePoster}
      />

      <div
        className={`absolute left-0 top-0 flex w-full cursor-pointer items-center justify-center bg-dark/60 p-4 opacity-0 backdrop-blur-sm transition-all group-hover:gap-5 group-hover:opacity-100 dark:bg-dark/70 ${styles.preview}`}
      >
        <button className="relative z-[11] text-center font-medium text-light text-xs">
          <div
            className={`${styles.details_btn}  mb-2 flex items-center justify-center rounded-full bg-dark-800 text-light backdrop-blur-sm transition-all hover:bg-brand h-11 w-11`}
          >
            <svg
              viewBox="0 0 22 22"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="h-4 w-4"
            >
              <path
                d="M20.0911 1H12.8184C12.3163 1 11.9093 1.40703 11.9093 1.9091C11.9093 2.41117 12.3163 2.8182 12.8184 2.8182H17.8964L8.53923 12.1754C8.18419 12.5304 8.18419 13.106 8.53923 13.461C8.71669 13.6385 8.94935 13.7273 9.182 13.7273C9.41466 13.7273 9.64735 13.6386 9.82485 13.461L19.182 4.10383V9.18184C19.182 9.68391 19.5891 10.0909 20.0911 10.0909C20.5932 10.0909 21.0002 9.68391 21.0002 9.18184V1.9091C21.0002 1.40703 20.5932 1 20.0911 1Z"
                fill="currentColor"
              ></path>
              <path
                d="M16.4545 10.0909C15.9525 10.0909 15.5454 10.4979 15.5454 11V19.1818H2.81816V6.45452H11C11.5021 6.45452 11.9091 6.04749 11.9091 5.54541C11.9091 5.04334 11.5021 4.63635 11 4.63635H1.9091C1.40703 4.63635 1 5.04338 1 5.54545V20.0909C1 20.593 1.40703 21 1.9091 21H16.4546C16.9566 21 17.3637 20.593 17.3637 20.0909V11C17.3636 10.4979 16.9566 10.0909 16.4545 10.0909Z"
                fill="currentColor"
              ></path>
            </svg>
          </div>
        </button>
      </div>

      <div className="flex mt-6 justify-between pb-3 px-4">
        <div className="flex items-center gap-4">
          <div>
            <img src={businessLogo} alt={`${businessName} official logo`} />
          </div>
          <div className={`${styles.service_info}`}>
            <p>{service.slice(0, 40)}...</p>
            <a href="#">{businessName}</a>
          </div>
        </div>

        <div>
          <div className={styles.price_col}>
            <p>${price.toFixed(2)}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExpertServiceCard;

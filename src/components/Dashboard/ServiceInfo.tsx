import { Link } from "react-router-dom";
import styles from "./ExpertServices.module.css";

const ServiceInfo: React.FC<{
  businessLogo?: string;
  service?: string;
  businessName?: string;
  price?: number;
}> = ({ businessLogo, service, businessName, price }) => {
  return (
    <div className={`my-2 items-center`}>
      <div className="gap-2 relative flex items-center flex-shrink-0 truncate overflow-hidden 4xl:h-9 4xl:w-9">
        <img
          alt="Omnico Team"
          loading="lazy"
          decoding="async"
          data-nimg="fill"
          className="rounded-full h-8 w-8 object-cover"
          src={businessLogo}
        />

        <div className={`${styles.service_info}  truncate`}>
          <Link to={`products/${service}`}>
            <h3
              title={service}
              className={`mb-0.5 truncate font-medium ${styles.card_service}`}
            >
              {service?.replace(/\b\w/g, (char) => char.toUpperCase())}
            </h3>

            <Link
              className={`${styles.business_name} font-medium text-light-base hover:text-brand dark:text-dark-800 dark:hover:text-brand`}
              to={`/experts/${businessName}/products`}
            >
              {businessName?.replace(/\b\w/g, (char) => char.toUpperCase())}
            </Link>
          </Link>
        </div>
      </div>

      <div className="flex flex-shrink-0  justify-between -mt-5 pr-1">
        <div></div>
        <span className={`${styles.price_col}  text-13px font-semibold`}>
          <span className={styles.from}>From</span> ${price}
        </span>
      </div>
    </div>
  );
};

export default ServiceInfo;

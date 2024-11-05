import { Link } from "react-router-dom";
import Icon from "../commons/Icon";
import styles from "./ExpertServices.module.css";

const ServiceInfo: React.FC<{
  businessLogo?: string;
  service?: string;
  businessName?: string;
  price?: number;
}> = ({ businessLogo, service, businessName, price }) => {
  return (
    <div className={`flex gap-2 my-2 items-center`}>
      <div className="relative flex h-8 w-8 flex-shrink-0 overflow-hidden 4xl:h-9 4xl:w-9">
        <img
          alt="Omnico Team"
          loading="lazy"
          decoding="async"
          data-nimg="fill"
          className="rounded-full  object-cover"
          src={businessLogo}
        />
      </div>
      <div className={`${styles.service_info}  flex flex-col truncate -mr-12`}>
        <Link to={`products/${service}`}>
          <h3
            title={service}
            className={`mb-0.5 truncate font-medium ${styles.card_service}`}
          >
            {service?.replace(/\b\w/g, (char) => char.toUpperCase())}
          </h3>
        </Link>
        <Link
          className={`${styles.business_name} font-medium text-light-base hover:text-brand dark:text-dark-800 dark:hover:text-brand`}
          to={`/experts/${businessName}/products`}
        >
          {businessName?.replace(/\b\w/g, (char) => char.toUpperCase())}
        </Link>
      </div>
      <div className="flex flex-shrink-0 flex-col items-end pl-2.5 ml-auto mt-auto">
        <span className={`${styles.price_col}  text-13px font-semibold`}>
          ${price}
        </span>
      </div>
    </div>
  );
};

export default ServiceInfo;

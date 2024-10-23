import { Link, useLocation } from "react-router-dom";
import styles from "./TopExperts.module.css";

interface ExpertCoverProps {
  expertDetails?: {
    id: number;
    name: string;
    imageUrl: any;
  };
}

const TopExpertsProfileCover: React.FC<ExpertCoverProps> = ({
  expertDetails,
}) => {
  const { pathname } = useLocation();

  const currentLocation = pathname.split("/")[3];

  return (
    <>
      <div className="relative w-full">
        <div className="absolute top-0 left-0 h-full w-full">
          <img
            alt="BentaSoft"
            loading="lazy"
            decoding="async"
            data-nimg="fill"
            className="object-cover"
            sizes="100vw"
            src="https://www.shutterstock.com/image-vector/landscape-business-brochure-design-company-600nw-2479756661.jpg"
            style={{
              position: "absolute",
              height: "100%",
              width: "100%",
              inset: "0px",
              color: "transparent",
            }}
          />
        </div>

        <div
          className={`relative h-full w-full  px-4 pt-10 pb-16 text-center backdrop-blur-sm lg:px-8 lg:pt-14 lg:pb-20 ${styles.cover_overlay}`}
        >
          <div className="relative mx-auto h-[75px] w-[75px] md:h-20 md:w-20 2xl:h-[90px] 2xl:w-[90px] 3xl:h-[100px] 3xl:w-[100px]">
            <img
              alt="BentaSoft"
              loading="lazy"
              decoding="async"
              data-nimg="fill"
              className="object-cover"
              sizes="100vw"
              src={expertDetails?.imageUrl}
              style={{
                position: "absolute",
                height: "100%",
                width: "100%",
                inset: "0px",
                color: "transparent",
              }}
            />
          </div>
          <h1
            className={`mt-3 text-sm font-medium text-dark-100 dark:text-light lg:text-15px 2xl:mt-4 ${styles.expert_name}`}
          >
            {expertDetails?.name}
          </h1>
          <div className="mt-3.5 flex justify-center md:mt-4 lg:mt-5"></div>
        </div>

        <div className="relative  -mt-[33px] space-x-6 px-4 text-center text-13px rtl:space-x-reverse lg:space-x-8">
          <Link
            className={`${
              currentLocation === "products"
                ? styles.expert_nav_active
                : styles.expert_nav
            } relative cursor-pointer pb-3.5 before:absolute before:left-0 before:bottom-0 before:h-0.5 before:bg-dark-400 before:transition-all before:duration-300 before:ease-in-out hover:text-dark-100 dark:before:bg-light-400 dark:hover:text-light font-semibold text-dark-100 before:w-full dark:text-light`}
            to={`/experts/${expertDetails?.name}/products`}
          >
            Products
          </Link>
          <Link
            className={`${
              currentLocation === "about"
                ? styles.expert_nav_active
                : styles.expert_nav
            } relative cursor-pointer pb-3.5 before:absolute before:left-0 before:bottom-0 before:h-0.5 before:bg-dark-400 before:transition-all before:duration-300 before:ease-in-out hover:text-dark-100 dark:before:bg-light-400 dark:hover:text-light font-semibold text-dark-100 before:w-full dark:text-light`}
            to={`/experts/${expertDetails?.name}/about`}
          >
            About
          </Link>
          <Link
            className={`${
              currentLocation === "help"
                ? styles.expert_nav_active
                : styles.expert_nav
            } relative cursor-pointer pb-3.5 before:absolute before:left-0 before:bottom-0 before:h-0.5 before:bg-dark-400 before:transition-all before:duration-300 before:ease-in-out hover:text-dark-100 dark:before:bg-light-400 dark:hover:text-light font-semibold text-dark-100 before:w-full dark:text-light`}
            to={`/experts/${expertDetails?.name}/help`}
          >
            Help
          </Link>
          <Link
            className={`${
              currentLocation === "contact-us"
                ? styles.expert_nav_active
                : styles.expert_nav
            } relative cursor-pointer pb-3.5 before:absolute before:left-0 before:bottom-0 before:h-0.5 before:bg-dark-400 before:transition-all before:duration-300 before:ease-in-out hover:text-dark-100 dark:before:bg-light-400 dark:hover:text-light font-semibold text-dark-100 before:w-full dark:text-light`}
            to={`/experts/${expertDetails?.name}/contact-us`}
          >
            Contact Us
          </Link>
          <Link
            className={`${
              currentLocation === "terms"
                ? styles.expert_nav_active
                : styles.expert_nav
            } relative cursor-pointer pb-3.5 before:absolute before:left-0 before:bottom-0 before:h-0.5 before:bg-dark-400 before:transition-all before:duration-300 before:ease-in-out hover:text-dark-100 dark:before:bg-light-400 dark:hover:text-light font-semibold text-dark-100 before:w-full dark:text-light`}
            to={`/experts/${expertDetails?.name}/terms`}
          >
            Terms
          </Link>
        </div>
      </div>
    </>
  );
};

export default TopExpertsProfileCover;

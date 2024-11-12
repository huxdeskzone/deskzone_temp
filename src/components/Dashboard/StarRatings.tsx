import { IconContext } from "react-icons";
import { FaStar } from "react-icons/fa6";
import Icon from "../commons/Icon";
import styles from "./StarRatings.module.css";

const StarRatings: React.FC = () => {
  return (
    <div className="flex items-center mt-14">
      <div className=" flex flex-col items-center basis-1/4  lg:basis-1/6 mr-5">
        <div className={styles.rating_score}>
          <h1 className="text-xl font-semibold">4</h1>
          <IconContext.Provider value={{ color: "#fefefe", size: "1.3em" }}>
            <FaStar />
          </IconContext.Provider>
        </div>

        <h1 className={`${styles.total_reviews} text-sm mt-3`}>3 Reviews</h1>
      </div>
      <div
        className={`basis-3/4 lg:basis-1/2 ${styles.rating_container} pl-10 sm:-ml-6 `}
      >
        <div className={styles.rating_cat}>
          5 <Icon iconClasses={`fa-solid fa-star ${styles.rating_icon}`} />
          <div
            className={` w-full md:w-1/3 ${styles.progress_bg}  rounded-full h-1.5`}
          >
            <div
              className={`${styles.progress} h-1.5 rounded-full`}
              style={{ width: "35%" }}
            ></div>
          </div>
          <p className="ml-4">1</p>
        </div>
        <div className={styles.rating_cat}>
          4 <Icon iconClasses={`fa-solid fa-star ${styles.rating_icon}`} />
          <div
            className={`w-full md:w-1/3 ${styles.progress_bg}  rounded-full h-1.5`}
          >
            <div
              className={`${styles.progress} h-1.5 rounded-full`}
              style={{ width: "35%" }}
            ></div>
          </div>
          <p className="ml-4">1</p>
        </div>
        <div className={styles.rating_cat}>
          3 <Icon iconClasses={`fa-solid fa-star ${styles.rating_icon}`} />
          <div
            className={`w-full md:w-1/3 ${styles.progress_bg}  rounded-full h-1.5`}
          >
            <div
              className={`${styles.progress} h-1.5 rounded-full`}
              style={{ width: "35%" }}
            ></div>
          </div>
          <p className="ml-4">1</p>
        </div>
        <div className={styles.rating_cat}>
          2 <Icon iconClasses={`fa-solid fa-star ${styles.rating_icon}`} />
          <div
            className={`w-full md:w-1/3 ${styles.progress_bg}  rounded-full h-1.5`}
          >
            <div
              className={`${styles.progress} h-1.5 rounded-full`}
              style={{ width: "0%" }}
            ></div>
          </div>
          <p className="ml-4">0</p>
        </div>
        <div className={`${styles.rating_cat2}`}>
          1 <Icon iconClasses={`fa-solid fa-star ${styles.rating_icon}`} />
          <div
            className={`w-full md:w-1/3 ${styles.progress_bg}  rounded-full h-1.5`}
          >
            <div
              className={`${styles.progress} h-1.5 rounded-full`}
              style={{ width: "0%" }}
            ></div>
          </div>
          <p className="ml-4">0</p>
        </div>
      </div>
    </div>
  );
};

export default StarRatings;

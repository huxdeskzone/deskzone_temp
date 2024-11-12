import Icon from "../commons/Icon";
import styles from "./Reviews.module.css";

const Reviews: React.FC = () => {
  return (
    <div className="my-16">
      <div
        className={`flex items-center justify-between mb-5 ${styles.main_reviews}`}
      >
        <h1 className={`${styles.review_intro} text-xs md:text-sm`}>
          Product Reviews (3)
        </h1>
        <select className={`${styles.form_select} w-44 text-xs md:text-sm`}>
          <option className={styles.cat_options}>Recent</option>
          <option className={styles.cat_options}>Most Useful</option>
        </select>
      </div>

      <div className={styles.review_container}>
        <div className="flex  gap-5 items-center">
          <div className={`${styles.customer_avatar}`}>C1</div>
          <div className={styles.customer_name}>
            <h1>Customer 1</h1>
          </div>
          <div className={styles.customer_rating}>
            5 <Icon iconClasses={`fa-solid fa-star`} />
          </div>
        </div>
        <div className="mt-3 ml-12">
          <p className={`pl-1 ${styles.main_review}`}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime
            mollitia, molestiae quas vel sint commodi repudiandae consequuntur
            voluptatum laborum numquam blanditiis harum quisquam eius sed odit
            fugiat iusto fuga praesentium
          </p>
        </div>
      </div>

      <div className={styles.review_container}>
        <div className="flex  gap-5 items-center">
          <div className={styles.customer_avatar}>C2</div>
          <div className={styles.customer_name}>
            <h1>Customer 2</h1>
          </div>
          <div className={styles.customer_rating}>
            3 <Icon iconClasses={`fa-solid fa-star`} />
          </div>
        </div>
        <div className="mt-3 ml-12">
          <p className={`pl-1 ${styles.main_review}`}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime
            mollitia, molestiae quas vel sint commodi repudiandae consequuntur
            voluptatum laborum numquam blanditiis harum quisquam eius sed odit
            fugiat iusto fuga praesentium
          </p>
        </div>
      </div>

      <div className={styles.review_container}>
        <div className="flex  gap-5 items-center">
          <div className={styles.customer_avatar}>C3</div>
          <div className={styles.customer_name}>
            <h1>Customer 3</h1>
          </div>
          <div className={styles.customer_rating}>
            4 <Icon iconClasses={`fa-solid fa-star`} />
          </div>
        </div>
        <div className="mt-3 ml-12">
          <p className={`pl-1 ${styles.main_review}`}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime
            mollitia, molestiae quas vel sint commodi repudiandae consequuntur
            voluptatum laborum numquam blanditiis harum quisquam eius sed odit
            fugiat iusto fuga praesentium
          </p>
        </div>
      </div>
    </div>
  );
};

export default Reviews;

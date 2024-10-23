import { experts } from "../../lib/dummy_data/dummyData";

import styles from "./TopExperts.module.css";
import { Link } from "react-router-dom";

const TopExperts: React.FC = () => {
  return (
    <div className="flex flex-grow flex-col px-4 pt-6 pb-10 md:px-6 lg:px-7 lg:pb-12 3xl:px-8">
      <div className="mb-2 -mt-4 flex flex-col-reverse flex-wrap items-center justify-between bg-light-200 py-4 dark:bg-dark-100 md:mt-0 md:mb-5 md:flex-row md:space-x-4 md:bg-transparent md:py-0 md:dark:bg-transparent lg:mb-7">
        <div className="relative my-5 w-full max-w-xs sm:mt-0">
          <svg
            viewBox="0 0 20 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="absolute left-1 top-1/2 -mt-2 h-4 w-4"
          >
            <path
              d="M18.1951 17.2053L13.4176 12.4277C14.343 11.2846 14.9002 9.83207 14.9002 8.25006C14.9002 4.58342 11.9167 1.59998 8.25009 1.59998C4.58345 1.59998 1.60004 4.58339 1.60004 8.25003C1.60004 11.9167 4.58348 14.9001 8.25012 14.9001C9.83213 14.9001 11.2847 14.3429 12.4278 13.4175L17.2053 18.1951C17.3418 18.3316 17.521 18.4002 17.7002 18.4002C17.8795 18.4002 18.0586 18.3316 18.1952 18.1951C18.4688 17.9214 18.4688 17.479 18.1951 17.2053ZM8.25012 13.5001C5.35488 13.5001 3.00006 11.1453 3.00006 8.25003C3.00006 5.35479 5.35488 2.99997 8.25012 2.99997C11.1454 2.99997 13.5002 5.35479 13.5002 8.25003C13.5002 11.1453 11.1453 13.5001 8.25012 13.5001Z"
              stroke="currentColor"
              fill="currentColor"
              stroke-width="0.4"
            ></path>
          </svg>
          <input
            type="search"
            placeholder="Search by name..."
            className="border-dark-30 h-11 w-full border-0 border-b border-b-light-600 bg-transparent pl-8 text-13px outline-none focus:border-b-light-800 focus:ring-0 dark:border-b-dark-400 dark:focus:border-b-dark-500"
          />
        </div>

        {/* Top Experts List */}
        <div className="w-full">
          <div className="grid grid-cols-2 sm:grid-cols-3  md:grid-cols-5 xl:grid-cols-6 gap-4 xs:grid-cols-[repeat(auto-fill,minmax(185px,1fr))] md:gap-5">
            {experts.map((expert) => {
              return (
                <Link to={`/experts/${expert.name}/products`}>
                  <div
                    key={expert.id}
                    className={`${styles.top_experts} group cursor-pointer rounded-md bg-light px-4 py-7 text-center`}
                    tabIndex={0}
                  >
                    <div className="relative mx-auto mb-2.5 h-[75px] w-[75px] md:h-20 md:w-20 lg:h-[90px] lg:w-[90px]">
                      <img
                        alt="Maxicon Soft Tech"
                        loading="lazy"
                        decoding="async"
                        data-nimg="fill"
                        className="rounded-3xl object-cover"
                        sizes="100vw"
                        src={expert.imageUrl}
                        style={{
                          position: "absolute",
                          height: "100%",
                          width: "100%",
                          inset: "0px",
                          color: "transparent",
                        }}
                      />
                    </div>
                    <h3
                      className={`mb-1 text-13px font-medium text-dark transition-colors ${styles.expert_name}`}
                    >
                      {expert.name}
                    </h3>
                    <div
                      className={`font-medium text-dark-800 dark:text-dark-base ${styles.expert_product}`}
                    >
                      6 Products
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopExperts;

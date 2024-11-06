import { useState, useEffect } from "react";
import ExpertServiceCard from "../components/Dashboard/ExpertServiceCard";
import { freelanceServices } from "../lib/dummy_data/dummyData";
import ServicesLoader from "../components/commons/ServicesLoader";
import { useGetAllExpertServicesMutation } from "../lib/apis/serviceApis";
import styles from "./SearchServiceModal.module.css";

const SearchServicesModal: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState("");

  const [getExpertServices, { isLoading, error, data }] =
    useGetAllExpertServicesMutation();

  useEffect(() => {
    const timer = setTimeout(() => {
      getExpertServices(null);
    }, 2000);

    return () => clearTimeout(timer);
  }, [searchQuery]);

  return (
    <div
      id="static-modal"
      data-modal-backdrop="static"
      tabIndex={-1}
      aria-hidden="true"
      className={`${styles.modal_backdrop} hidden overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 justify-center items-center w-full md:inset-0 h-[calc(100%-1rem)] h-full`}
    >
      <div className="relative px-4  w-full h-full">
        <div className="relative">
          <div className="px-4 md:px-5  space-y-4">
            <div
              className={`${styles.search_container} search-header fixed top-0 right-0 left-0  z-20   pb-3 border-b`}
            >
              <div
                className={`flex items-center justify-between px-4 p-5  rounded-t dark:border-gray-600`}
              >
                <button
                  type="button"
                  className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white"
                  data-modal-hide="static-modal"
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
              <div className="relative">
                <input
                  type="text"
                  placeholder="Type anything to search..."
                  className={`${styles.search_input} w-full border-0 bg-transparent px-1 text-base text-dark outline-none focus:ring-0 dark:text-light md:text-lg lg:text-xl 3xl:text-[22px] 4xl:text-2xl`}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  value={searchQuery}
                />

                {searchQuery.length > 0 && (
                  <button
                    onClick={() => setSearchQuery("")}
                    className={`${styles.clear_btn} transition-fill-colors -ml-14 font-semibold duration-200 pointer-events-auto cursor-pointer  text-dark dark:text-light absolute top-1/2 -mt-2 px-1  opacity-70 hover:opacity-100 ltr:right-0 rtl:left-0`}
                  >
                    Clear
                  </button>
                )}
              </div>
            </div>

            {isLoading && (
              <div style={{ marginTop: "140px" }}>
                <ServicesLoader />
              </div>
            )}
            <div
              style={{ marginTop: "170px" }}
              className="grid px-3  grid-cols-1  sm:grid-cols-2 md:grid-cols-3 gap-6 3xl:gap-7 xl:grid-cols-4 2xl:grid-cols-6 3xl:grid-cols-6 4xl:grid-cols-[repeat(auto-fill,minmax(300px,1fr))]"
            >
              {!isLoading &&
                freelanceServices.length > 0 &&
                freelanceServices.map((service: any) => {
                  return <ExpertServiceCard {...service} key={service.id} />;
                })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchServicesModal;

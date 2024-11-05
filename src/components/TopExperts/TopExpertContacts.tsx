import styles from "./TopExperts.module.css";

const TopExpertContact: React.FC = () => {
  return (
    <div
      className={`${styles.top_experts} mx-auto h-fit w-full mt-10 max-w-screen-xl px-4 py-6 focus:outline-none md:px-6 md:py-8 lg:py-10 lg:px-8`}
    >
      <div className="flex w-full flex-col overflow-hidden rounded-md px-4 py-5 sm:px-6 sm:py-8 md:bg-light md:p-10 md:shadow-card md:dark:bg-dark-200 md:dark:shadow-none lg:flex-row lg:p-0">
        <div className="shrink-0 border-light-300 dark:border-dark-300 lg:w-[400px] lg:py-10 ltr:lg:border-r ltr:lg:pr-[72px] ltr:lg:pl-10 rtl:lg:border-l rtl:lg:pl-[72px] rtl:lg:pr-10 lg:dark:bg-dark-250 xl:w-[430px] xl:py-12 ltr:xl:pr-24 rtl:xl:pl-24">
          <h2
            className={`pb-2 text-lg font-medium  md:text-xl ${styles.intro_text}`}
          >
            Contact Information
          </h2>
          <p
            className={`font-medium leading-[1.8em] ${styles.contact_label_text}`}
          >
            Fill out the form and our team will get back to you within 24 hours.
          </p>

          <div className="grid-cols-2 gap-x-5 gap-y-8 space-y-7 pt-9 sm:grid sm:space-y-0 md:gap-y-9 lg:block lg:space-y-9">
            <div className="flex max-w-xs flex-row items-center pr-4 sm:pr-2 lg:max-w-sm lg:pr-0">
              <div className="flex w-12 flex-shrink-0 justify-center text-brand">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 45.53 45.53"
                  fill="currentColor"
                  className={`h-10 w-10 ${styles.contact_icon} mr-3`}
                >
                  <path d="M22.78,45.53A22.76,22.76,0,0,1,6.54,6.8,22.67,22.67,0,0,1,22.62,0h.15A22.41,22.41,0,0,1,36,4.26a22.83,22.83,0,0,1,8.3,11,1.35,1.35,0,0,1,.07.49,1.31,1.31,0,0,1-.12.48,1.37,1.37,0,0,1-.29.39,1.51,1.51,0,0,1-.42.25,1.25,1.25,0,0,1-.43.07,1.34,1.34,0,0,1-.53-.12,1.18,1.18,0,0,1-.4-.29,1.38,1.38,0,0,1-.25-.42A20.36,20.36,0,0,0,22.77,2.51h-.13A20.25,20.25,0,0,0,8.5,37.1a20.2,20.2,0,0,0,25.34,2.63,1.25,1.25,0,0,1,.45-.18l.24,0a1.07,1.07,0,0,1,.25,0,1.23,1.23,0,0,1,1,1,1.35,1.35,0,0,1,0,.49,1.3,1.3,0,0,1-.2.45,1.14,1.14,0,0,1-.35.34,22.62,22.62,0,0,1-12.42,3.7Zm0-13A10,10,0,0,1,20,32.1a9.74,9.74,0,0,1-1.68-18A9.84,9.84,0,0,1,22.76,13a11.48,11.48,0,0,1,1.17.07,9.71,9.71,0,0,1,5.21,2.32l.94.81V14.67a1.35,1.35,0,0,1,.09-.5,1.17,1.17,0,0,1,.27-.42,1.3,1.3,0,0,1,.41-.28,1.23,1.23,0,0,1,1,0,1.2,1.2,0,0,1,.41.28,1.17,1.17,0,0,1,.27.42,1,1,0,0,1,.09.49v10a5.22,5.22,0,0,0,10.43,0,1.4,1.4,0,0,1,.09-.51,1.17,1.17,0,0,1,.27-.42,1.42,1.42,0,0,1,.41-.28,1.37,1.37,0,0,1,.49-.09,1.28,1.28,0,0,1,.48.09,1.34,1.34,0,0,1,.42.28,1.51,1.51,0,0,1,.27.42,1.18,1.18,0,0,1,.08.49,7.74,7.74,0,0,1-7.72,7.74,7.75,7.75,0,0,1-6.5-3.55l-.43-.67-.49.62a9.72,9.72,0,0,1-7.63,3.69Zm0-16.95a7.4,7.4,0,0,0-1.41.13,7.21,7.21,0,0,0-5.67,5.68,7.22,7.22,0,1,0,9.84-5.27A7.26,7.26,0,0,0,22.77,15.55Z"></path>
                </svg>
              </div>
              <div className="mt-0 ltr:pl-5 rtl:pr-5">
                <h3
                  className={`mb-2 text-15px font-medium text-dark dark:text-light ${styles.intro_text}`}
                >
                  Visit Website
                </h3>
                <p className={`leading-[1.8em] ${styles.contact_label_text}`}>
                  https://redq.io/
                </p>
              </div>
            </div>
            <div
              className={`flex items-center gap-5 ${styles.contact_label_text}`}
            >
              <a
                className="group flex items-center"
                href="https://www.facebook.com/redqinc/"
              >
                <svg
                  viewBox="0 0 16 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-4 h-4 text-dark-800 dark:text-light-900 shrink-0"
                >
                  <path
                    d="M13.8439 0H2.15615C0.965434 0 0.00012207 0.965273 0.00012207 2.15603V13.8439C0.00012207 15.0346 0.965395 15.9999 2.15615 15.9999H7.92051L7.93034 10.2824H6.44493C6.25189 10.2824 6.09521 10.1263 6.09447 9.93329L6.08735 8.0903C6.0866 7.8962 6.24375 7.73847 6.43785 7.73847H7.92055V5.95767C7.92055 3.89107 9.1827 2.7658 11.0262 2.7658H12.539C12.7326 2.7658 12.8895 2.92271 12.8895 3.1163V4.67031C12.8895 4.86382 12.7327 5.0207 12.5392 5.02081L11.6108 5.02124C10.6083 5.02124 10.4141 5.49766 10.4141 6.19682V7.73851H12.6171C12.827 7.73851 12.9899 7.9218 12.9652 8.13026L12.7467 9.97325C12.7258 10.1496 12.5763 10.2825 12.3987 10.2825H10.424L10.4141 16H13.844C15.0347 16 16 15.0347 16 13.844V2.15603C16 0.965273 15.0347 0 13.8439 0Z"
                    fill="currentColor"
                  ></path>
                </svg>
              </a>
              <a
                className="group flex items-center"
                href="https://www.instagram.com/redqinc/"
              >
                <svg
                  data-name="Group 96"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 12 12"
                  className="w-4 h-4 text-dark-800 dark:text-light-900 shrink-0"
                >
                  <path
                    data-name="Path 1"
                    d="M8.5 1A2.507 2.507 0 0111 3.5v5A2.507 2.507 0 018.5 11h-5A2.507 2.507 0 011 8.5v-5A2.507 2.507 0 013.5 1h5m0-1h-5A3.51 3.51 0 000 3.5v5A3.51 3.51 0 003.5 12h5A3.51 3.51 0 0012 8.5v-5A3.51 3.51 0 008.5 0z"
                    fill="currentColor"
                  ></path>
                  <path
                    data-name="Path 2"
                    d="M9.25 3.5a.75.75 0 11.75-.75.748.748 0 01-.75.75zM6 4a2 2 0 11-2 2 2 2 0 012-2m0-1a3 3 0 103 3 3 3 0 00-3-3z"
                    fill="currentColor"
                  ></path>
                </svg>
              </a>
              <a
                className="group flex items-center"
                href="https://www.youtube.com/channel/UCjld1tyVHRNy_pe3ROLiLhw"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 15.997 12"
                  className="w-4 h-4 text-dark-800 dark:text-light-900 shrink-0"
                >
                  <path
                    d="M15.893 2.65A2.429 2.429 0 0013.581.113c-1.731-.081-3.5-.112-5.3-.112h-.563c-1.8 0-3.569.031-5.3.112A2.434 2.434 0 00.106 2.656C.028 3.768-.006 4.881-.003 5.993s.031 2.225.106 3.34a2.437 2.437 0 002.309 2.547c1.822.085 3.688.12 5.584.12s3.759-.031 5.581-.119a2.438 2.438 0 002.312-2.547c.075-1.116.109-2.228.106-3.344s-.027-2.225-.102-3.34zM6.468 9.059v-6.14l4.531 3.069z"
                    fill="currentColor"
                  ></path>
                </svg>
              </a>
            </div>
          </div>
        </div>
        <div className="w-full flex-grow pt-12 lg:p-10 xl:p-12">
          <form>
            <fieldset className="mb-6 grid gap-5 sm:grid-cols-2">
              <div>
                <label className="block text-13px">
                  <span
                    className={`block cursor-pointer pb-2.5 font-normal rtl:text-right dark:text-light/70 ${styles.contact_label_text}`}
                  >
                    Name
                  </span>
                  <input
                    type="text"
                    name="name"
                    className="h-11 w-full appearance-none rounded border border-light-500 px-4 py-2 text-dark ring-[0.5px] ring-light-500 placeholder:text-dark-900 focus:border-brand focus:ring-[0.5px] focus:ring-brand dark:border-dark-600 dark:text-light dark:ring-dark-600 dark:placeholder:text-dark-700 dark:focus:border-brand dark:focus:ring-brand md:h-12 lg:px-5 xl:h-[50px] bg-transparent"
                  />
                </label>
              </div>
              <div>
                <label className="block text-13px">
                  <span
                    className={`block cursor-pointer pb-2.5 font-normal rtl:text-right dark:text-light/70 ${styles.contact_label_text}`}
                  >
                    Email
                  </span>
                  <input
                    type="email"
                    name="email"
                    className="h-11 w-full appearance-none rounded border border-light-500 px-4 py-2 text-dark ring-[0.5px] ring-light-500 placeholder:text-dark-900 focus:border-brand focus:ring-[0.5px] focus:ring-brand dark:border-dark-600 dark:text-light dark:ring-dark-600 dark:placeholder:text-dark-700 dark:focus:border-brand dark:focus:ring-brand md:h-12 lg:px-5 xl:h-[50px] bg-transparent"
                  />
                </label>
              </div>
              <div className="sm:col-span-2">
                <label className="block text-13px">
                  <span
                    className={`block cursor-pointer pb-2.5 font-normal rtl:text-right dark:text-light/70 ${styles.contact_label_text}`}
                  >
                    Subject
                  </span>
                  <input
                    type="text"
                    name="subject"
                    className="h-11 w-full appearance-none rounded border border-light-500 px-4 py-2 text-dark ring-[0.5px] ring-light-500 placeholder:text-dark-900 focus:border-brand focus:ring-[0.5px] focus:ring-brand dark:border-dark-600 dark:text-light dark:ring-dark-600 dark:placeholder:text-dark-700 dark:focus:border-brand dark:focus:ring-brand md:h-12 lg:px-5 xl:h-[50px] bg-transparent"
                  />
                </label>
              </div>
              <div className="sm:col-span-2">
                <label className="block text-13px">
                  <span
                    className={`block cursor-pointer pb-2.5 font-normal rtl:text-right dark:text-light/70 ${styles.contact_label_text}`}
                  >
                    Message
                  </span>
                  <textarea
                    name="description"
                    className="min-h-[150px] w-full appearance-none rounded border border-light-500 px-4 py-3 text-13px text-dark ring-[0.5px] ring-light-500 placeholder:text-dark-900 focus:border-brand focus:ring-[0.5px] focus:ring-brand dark:border-dark-600 dark:text-light dark:ring-dark-600 dark:placeholder:text-dark-700 dark:focus:border-brand dark:focus:ring-brand lg:px-5 bg-transparent"
                  ></textarea>
                </label>
              </div>
            </fieldset>
            <button
              style={{ backgroundColor: "#24b47e" }}
              className="transition-fill-colors flex items-center justify-center gap-2 font-semibold duration-200 pointer-events-auto cursor-pointer opacity-100 min-h-[46px] sm:h-12 rounded py-3 px-4 md:px-5 bg-brand text-white hover:bg-brand-dark focus:bg-brand-dark mb-1 w-full flex-1 sm:flex-none md:w-auto"
              type="submit"
            >
              Contact Us
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default TopExpertContact;

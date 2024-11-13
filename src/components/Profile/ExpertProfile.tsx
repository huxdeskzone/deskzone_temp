import { Link, Outlet } from "react-router-dom";
import styles from "./Profile.module.css";

const ExpertProfile: React.FC = () => {
  return (
    <div
      className="mx-auto w-full max-w-screen-xl mt-28 flex-1 px-4  sm:px-5  3xl:my-14"
      style={{ opacity: 1, transform: "none" }}
    >
      <div
        className={`flex w-full flex-col rounded-lg lg:min-h-[70vh] lg:flex-row lg:shadow-card 2xl:min-h-[630px]`}
      >
        <aside
          className={`${styles.profile_sidebar} border-light-300 dark:border-dark-400 lg:w-60 lg:flex-shrink-0 lg:bg-light ltr:lg:border-r rtl:lg:border-l lg:dark:bg-dark-250`}
        >
          <div className="flex h-full flex-col">
            <nav className="hidden grow flex-col text-13px text-dark-900 lg:flex">
              <Link
                className={`${styles.active} ${styles.profile_nav_link}  flex items-center gap-3 px-6 py-3.5 hover:text-dark focus:text-dark dark:hover:text-light dark:focus:text-light`}
                to="/expert/profile"
              >
                <span className="flex w-5 items-start">
                  <svg
                    fill="none"
                    viewBox="0 0 18 18"
                    xmlns="http://www.w3.org/2000/svg"
                    className={`${styles.profile_link_icon} h-4 w-4 sm:h-[18px] sm:w-[18px]`}
                  >
                    <path
                      d="M9 0.000976562C4.02996 0.000976562 0 4.03014 0 9.00058C0 13.971 4.02956 18.0002 9 18.0002C13.9708 18.0002 18 13.971 18 9.00058C18 4.03014 13.9708 0.000976562 9 0.000976562ZM9 2.69196C10.6446 2.69196 11.9772 4.025 11.9772 5.66877C11.9772 7.31293 10.6446 8.64558 9 8.64558C7.35623 8.64558 6.02359 7.31293 6.02359 5.66877C6.02359 4.025 7.35623 2.69196 9 2.69196ZM8.99802 15.6472C7.35781 15.6472 5.85557 15.0499 4.69687 14.0612C4.41461 13.8204 4.25173 13.4674 4.25173 13.097C4.25173 11.4299 5.60098 10.0956 7.26847 10.0956H10.7323C12.4002 10.0956 13.7443 11.4299 13.7443 13.097C13.7443 13.4678 13.5822 13.82 13.2996 14.0608C12.1413 15.0499 10.6386 15.6472 8.99802 15.6472Z"
                      fill="currentColor"
                    ></path>
                  </svg>
                </span>{" "}
                <span
                  className={`${styles.profile_links} text-dark-100 dark:text-light-400`}
                >
                  Profile
                </span>
              </Link>
              <Link
                className={`${styles.profile_nav_link}  flex items-center gap-3 px-6 py-3.5 hover:text-dark focus:text-dark dark:hover:text-light dark:focus:text-light`}
                to="/expert/profile/sales"
              >
                <span className="flex w-5 items-start">
                  <svg
                    fill="none"
                    viewBox="0 0 16 16"
                    xmlns="http://www.w3.org/2000/svg"
                    className={`${styles.profile_link_icon} h-4 w-4 sm:h-[18px] sm:w-[18px]`}
                  >
                    <path
                      d="M12.655 0.125H3.34497C2.776 0.125003 2.22817 0.340559 1.81175 0.728271C1.39534 1.11598 1.14127 1.64706 1.10071 2.21457L0.297231 13.4646C0.2752 13.7728 0.316883 14.0822 0.41968 14.3736C0.522478 14.665 0.684187 14.932 0.894729 15.1582C1.10527 15.3843 1.36014 15.5647 1.64344 15.688C1.92674 15.8113 2.2324 15.875 2.54138 15.875H13.4586C13.7676 15.875 14.0733 15.8114 14.3566 15.688C14.6399 15.5647 14.8948 15.3844 15.1053 15.1582C15.3159 14.9321 15.4776 14.665 15.5804 14.3736C15.6832 14.0822 15.7249 13.7728 15.7029 13.4646L14.8993 2.21457C14.8587 1.64706 14.6046 1.11598 14.1882 0.728271C13.7718 0.340559 13.224 0.125003 12.655 0.125ZM7.99999 6.875C6.95609 6.87375 5.95529 6.45851 5.21714 5.72035C4.47899 4.9822 4.06374 3.98141 4.06249 2.9375C4.06249 2.78832 4.12176 2.64524 4.22725 2.53975C4.33273 2.43426 4.47581 2.375 4.62499 2.375C4.77418 2.375 4.91725 2.43426 5.02274 2.53975C5.12823 2.64524 5.18749 2.78832 5.18749 2.9375C5.18749 3.68342 5.48381 4.39879 6.01126 4.92624C6.5387 5.45368 7.25407 5.75 7.99999 5.75C8.74591 5.75 9.46129 5.45368 9.98873 4.92624C10.5162 4.39879 10.8125 3.68342 10.8125 2.9375C10.8125 2.78832 10.8718 2.64524 10.9772 2.53975C11.0827 2.43426 11.2258 2.375 11.375 2.375C11.5242 2.375 11.6673 2.43426 11.7727 2.53975C11.8782 2.64524 11.9375 2.78832 11.9375 2.9375C11.9362 3.98141 11.521 4.9822 10.7828 5.72035C10.0447 6.45851 9.0439 6.87375 7.99999 6.875Z"
                      fill="currentColor"
                    ></path>
                  </svg>
                </span>{" "}
                <span
                  className={`${styles.profile_links} text-dark-100 dark:text-light-400`}
                >
                  Sales
                </span>
              </Link>
              <Link
                className={`${styles.profile_nav_link}  flex items-center gap-3 px-6 py-3.5 hover:text-dark focus:text-dark dark:hover:text-light dark:focus:text-light`}
                to="/expert/profile/cards"
              >
                <span className="flex w-5 items-start">
                  <svg
                    viewBox="0 0 18 18"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className={`${styles.profile_link_icon} h-4 w-4 sm:h-[18px] sm:w-[18px]`}
                  >
                    <path
                      d="M18 5.73047V4.78125C18 3.69394 17.1186 2.8125 16.0312 2.8125H1.96875C0.881438 2.8125 0 3.69394 0 4.78125V5.73047C0 5.82754 0.0787148 5.90625 0.175781 5.90625H17.8242C17.9213 5.90625 18 5.82754 18 5.73047Z"
                      fill="currentColor"
                    ></path>
                    <path
                      d="M0 7.20703V13.2188C0 14.3061 0.881438 15.1875 1.96875 15.1875H16.0312C17.1186 15.1875 18 14.3061 18 13.2188V7.20703C18 7.10996 17.9213 7.03125 17.8242 7.03125H0.175781C0.0787148 7.03125 0 7.10996 0 7.20703ZM4.5 11.8125C4.5 12.1231 4.24814 12.375 3.9375 12.375H3.375C3.06436 12.375 2.8125 12.1231 2.8125 11.8125V11.25C2.8125 10.9394 3.06436 10.6875 3.375 10.6875H3.9375C4.24814 10.6875 4.5 10.9394 4.5 11.25V11.8125Z"
                      fill="currentColor"
                    ></path>
                  </svg>
                </span>{" "}
                <span
                  className={`${styles.profile_links} text-dark-100 dark:text-light-400`}
                >
                  Banks Details
                </span>
              </Link>

              <Link
                className={`${styles.profile_nav_link}  flex items-center gap-3 px-6 py-3.5 hover:text-dark focus:text-dark dark:hover:text-light dark:focus:text-light`}
                to="/expert/profile/products"
              >
                <span className="flex w-5 items-start">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 576 512"
                    fill="none"
                    className={`${styles.profile_link_icon} h-6 w-6 sm:h-[18px] sm:w-[18px]`}
                  >
                    <path
                      d="M460.3 241.7c25.8-41.3 15.2-48.8-11.7-48.8h-27c-.1 0-1.5-1.4-10.9 8-11.2 5.6-37.9 6.3-37.9 8.7 0 4.5 70.3-3.1 88.1 0 9.5 1.5-1.5 20.4-4.4 32-.5 4.5 2.4 2.3 3.8 .1zm-112.1 22.6c64-21.3 97.3-23.9 102-26.2 4.4-2.9-4.4-6.6-26.2-5.8-51.7 2.2-137.6 37.1-172.6 53.9l-30.7-93.3h196.6c-2.7-28.2-152.9-22.6-337.9-22.6L27 415.8c196.4-97.3 258.9-130.3 321.2-151.5zM94.7 96c253.3 53.7 330 65.7 332.1 85.2 36.4 0 45.9 0 52.4 6.6 21.1 19.7-14.6 67.7-14.6 67.7-4.4 2.9-406.4 160.2-406.4 160.2h423.1L549 96z"
                      fill="currentColor"
                    />
                  </svg>
                </span>{" "}
                <span
                  className={`${styles.profile_links} text-dark-100 dark:text-light-400`}
                >
                  My Products
                </span>
              </Link>

              <Link
                className={`${styles.profile_nav_link}  flex items-center gap-3 px-6 py-3.5 hover:text-dark focus:text-dark dark:hover:text-light dark:focus:text-light`}
                to="/expert/profile/reports"
              >
                <span className="flex w-5 items-start">
                  <svg
                    viewBox="0 0 60 60"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className={`${styles.profile_link_icon} h-4 w-4 sm:h-[18px] sm:w-[18px]`}
                  >
                    <path
                      d="M30 1.83528e-06C26.06 -0.00137653 22.1583 0.773655 18.5179 2.28081C14.8775 3.78796 11.5698 5.99769 8.78372 8.78372C5.99769 11.5698 3.78796 14.8775 2.28081 18.5179C0.773655 22.1583 -0.00137653 26.06 1.83528e-06 30C-0.00137653 33.94 0.773655 37.8417 2.28081 41.4821C3.78796 45.1225 5.99769 48.4303 8.78372 51.2163C11.5698 54.0023 14.8775 56.212 18.5179 57.7192C22.1583 59.2264 26.06 60.0014 30 60C33.94 60.0014 37.8417 59.2264 41.4821 57.7192C45.1225 56.212 48.4303 54.0023 51.2163 51.2163C54.0023 48.4303 56.212 45.1225 57.7192 41.4821C59.2264 37.8417 60.0014 33.94 60 30C60.0014 26.06 59.2264 22.1583 57.7192 18.5179C56.212 14.8775 54.0023 11.5698 51.2163 8.78372C48.4303 5.99769 45.1225 3.78796 41.4821 2.28081C37.8417 0.773655 33.94 -0.00137653 30 1.83528e-06V1.83528e-06ZM30 51.6084C29.1029 51.6105 28.2253 51.3462 27.4785 50.8491C26.7317 50.352 26.1493 49.6443 25.805 48.8159C25.4607 47.9875 25.3701 47.0755 25.5446 46.1955C25.7191 45.3155 26.1509 44.5071 26.7853 43.8727C27.4197 43.2383 28.2281 42.8065 29.1081 42.632C29.988 42.4575 30.9 42.5481 31.7285 42.8924C32.5569 43.2367 33.2645 43.8191 33.7617 44.5659C34.2588 45.3127 34.5231 46.1903 34.521 47.0874C34.5182 48.2856 34.041 49.4339 33.1938 50.2812C32.3465 51.1284 31.1982 51.6056 30 51.6084V51.6084ZM35.486 14.2657L33.7762 37.3427C33.7656 37.5022 33.6946 37.6517 33.5777 37.7608C33.4608 37.8699 33.3068 37.9304 33.1469 37.9301H26.8532C26.6933 37.9304 26.5392 37.8699 26.4223 37.7608C26.3054 37.6517 26.2344 37.5022 26.2238 37.3427L24.514 14.2657C24.4677 13.5168 24.5752 12.7662 24.8299 12.0604C25.0846 11.3546 25.4812 10.7084 25.9952 10.1616C26.5092 9.61487 27.1296 9.17915 27.8184 8.88131C28.5072 8.58347 29.2496 8.42982 30 8.42982C30.7504 8.42982 31.4929 8.58347 32.1816 8.88131C32.8704 9.17915 33.4909 9.61487 34.0048 10.1616C34.5188 10.7084 34.9154 11.3546 35.1701 12.0604C35.4248 12.7662 35.5324 13.5168 35.486 14.2657V14.2657Z"
                      fill="currentColor"
                    ></path>
                  </svg>
                </span>{" "}
                <span
                  className={`${styles.profile_links} text-dark-100 dark:text-light-400`}
                >
                  My Reports
                </span>
              </Link>

              <Link
                className={`${styles.profile_nav_link}  flex items-center gap-3 px-6 py-3.5 hover:text-dark focus:text-dark dark:hover:text-light dark:focus:text-light`}
                to="/expert/profile/wish-list"
              >
                <span className="flex w-5 items-start">
                  <svg
                    viewBox="0 -28 512 512"
                    xmlns="http://www.w3.org/2000/svg"
                    width="21"
                    height="21"
                    fill="currentColor"
                    className={`${styles.profile_link_icon} h-4 w-4 sm:h-[18px] sm:w-[18px]`}
                  >
                    <path d="M471.383 44.578C444.879 15.832 408.512 0 368.973 0c-29.555 0-56.621 9.344-80.45 27.77C276.5 37.07 265.605 48.45 256 61.73c-9.602-13.277-20.5-24.66-32.527-33.96C199.648 9.344 172.582 0 143.027 0c-39.539 0-75.91 15.832-102.414 44.578C14.426 72.988 0 111.801 0 153.871c0 43.3 16.137 82.938 50.781 124.742 30.992 37.395 75.535 75.356 127.117 119.313 17.614 15.012 37.579 32.027 58.309 50.152A30.023 30.023 0 0 0 256 455.516c7.285 0 14.316-2.641 19.785-7.43 20.73-18.129 40.707-35.152 58.328-50.172 51.575-43.95 96.117-81.906 127.11-119.305C495.867 236.81 512 197.172 512 153.867c0-42.066-14.426-80.879-40.617-109.289zm0 0"></path>
                  </svg>
                </span>{" "}
                <span
                  className={`${styles.profile_links} text-dark-100 dark:text-light-400`}
                >
                  My Wish List
                </span>
              </Link>

              <Link
                className={`${styles.profile_nav_link}  flex items-center gap-3 px-6 py-3.5 hover:text-dark focus:text-dark dark:hover:text-light dark:focus:text-light`}
                to="/expert/profile/followed-authors"
              >
                <span className="flex w-5 items-start">
                  <svg
                    viewBox="0 0 18 18"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className={`${styles.profile_link_icon} h-4 w-4 sm:h-[18px] sm:w-[18px]`}
                  >
                    <path
                      d="M8 8.5C9.933 8.5 11.5 6.933 11.5 5C11.5 3.067 9.933 1.5 8 1.5C6.067 1.5 4.5 3.067 4.5 5C4.5 6.933 6.067 8.5 8 8.5Z"
                      fill="currentColor"
                    ></path>
                    <path
                      d="M8.00012 9.50006C6.27682 9.50205 4.62468 10.1875 3.40612 11.4061C2.18756 12.6246 1.50211 14.2768 1.50012 16.0001C1.50012 16.1327 1.5528 16.2598 1.64657 16.3536C1.74034 16.4474 1.86751 16.5001 2.00012 16.5001H14.0001C14.1327 16.5001 14.2599 16.4474 14.3537 16.3536C14.4474 16.2598 14.5001 16.1327 14.5001 16.0001C14.4981 14.2768 13.8127 12.6246 12.5941 11.4061C11.3756 10.1875 9.72342 9.50205 8.00012 9.50006Z"
                      fill="currentColor"
                    ></path>
                    <path
                      d="M15.9998 8.00006H14.4998V6.50006C14.4998 6.36745 14.4471 6.24028 14.3534 6.14651C14.2596 6.05274 14.1324 6.00006 13.9998 6.00006C13.8672 6.00006 13.74 6.05274 13.6463 6.14651C13.5525 6.24028 13.4998 6.36745 13.4998 6.50006V8.00006H11.9998C11.8672 8.00006 11.74 8.05274 11.6463 8.14651C11.5525 8.24028 11.4998 8.36745 11.4998 8.50006C11.4998 8.63267 11.5525 8.75985 11.6463 8.85362C11.74 8.94738 11.8672 9.00006 11.9998 9.00006H13.4998V10.5001C13.4998 10.6327 13.5525 10.7598 13.6463 10.8536C13.74 10.9474 13.8672 11.0001 13.9998 11.0001C14.1324 11.0001 14.2596 10.9474 14.3534 10.8536C14.4471 10.7598 14.4998 10.6327 14.4998 10.5001V9.00006H15.9998C16.1324 9.00006 16.2596 8.94738 16.3534 8.85362C16.4471 8.75985 16.4998 8.63267 16.4998 8.50006C16.4998 8.36745 16.4471 8.24028 16.3534 8.14651C16.2596 8.05274 16.1324 8.00006 15.9998 8.00006Z"
                      fill="currentColor"
                    ></path>
                  </svg>
                </span>{" "}
                <span
                  className={`${styles.profile_links} text-dark-100 dark:text-light-400`}
                >
                  Followed Authors
                </span>
              </Link>
              <Link
                className={`${styles.profile_nav_link}  flex items-center gap-3 px-6 py-3.5 hover:text-dark focus:text-dark dark:hover:text-light dark:focus:text-light`}
                to="/expert/profile/password"
              >
                <span className="flex w-5 items-start">
                  <svg
                    fill="none"
                    viewBox="0 0 14 18"
                    xmlns="http://www.w3.org/2000/svg"
                    className={`${styles.profile_link_icon} h-4 w-4 sm:h-[18px] sm:w-[18px]`}
                  >
                    <path
                      d="M12.0625 6.75H11.5V4.5C11.5 2.01825 9.48175 0 7 0C4.51825 0 2.5 2.01825 2.5 4.5V6.75H1.9375C1.0075 6.75 0.25 7.50675 0.25 8.4375V16.3125C0.25 17.2432 1.0075 18 1.9375 18H12.0625C12.9925 18 13.75 17.2432 13.75 16.3125V8.4375C13.75 7.50675 12.9925 6.75 12.0625 6.75ZM4 4.5C4 2.8455 5.3455 1.5 7 1.5C8.6545 1.5 10 2.8455 10 4.5V6.75H4V4.5ZM7.75 12.5415V14.25C7.75 14.664 7.41475 15 7 15C6.58525 15 6.25 14.664 6.25 14.25V12.5415C5.80375 12.2812 5.5 11.8027 5.5 11.25C5.5 10.4227 6.17275 9.75 7 9.75C7.82725 9.75 8.5 10.4227 8.5 11.25C8.5 11.8027 8.19625 12.2812 7.75 12.5415Z"
                      fill="currentColor"
                    ></path>
                  </svg>
                </span>{" "}
                <span
                  className={`${styles.profile_links} text-dark-100 dark:text-light-400`}
                >
                  Password
                </span>
              </Link>
              <button
                className={`${styles.profile_nav_link} flex w-full items-center gap-2.5 px-6 py-3.5 text-left hover:text-dark focus:text-dark dark:hover:text-light dark:focus:text-light `}
              >
                <svg
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  className={`${styles.profile_link_icon} h-6 w-6`}
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="1.5"
                    d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"
                  ></path>
                </svg>
                <span
                  className={`${styles.profile_links} text-dark-100 dark:text-light-400`}
                >
                  Logout
                </span>
              </button>
            </nav>
          </div>
        </aside>
        <main
          className={`${styles.profile_section} flex w-full flex-grow flex-col lg:flex-grow-0 lg:bg-light lg:px-12 lg:py-8 lg:dark:bg-dark-250`}
        >
          <div
            className="flex min-h-full flex-grow flex-col"
            style={{ opacity: 1, transform: "none" }}
          >
            <Outlet />
          </div>
        </main>
      </div>
    </div>
  );
};

export default ExpertProfile;

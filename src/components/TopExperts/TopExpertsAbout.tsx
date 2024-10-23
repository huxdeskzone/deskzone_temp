const TopExpertsAbout: React.FC = () => {
  return (
    <div className="h-full">
      <div className="px-4 py-6 focus:outline-none md:px-6 md:py-8 lg:py-10 lg:px-8">
        <div
          className="mx-auto flex max-w-[480px] flex-col justify-between md:max-w-[1000px] md:flex-row 2xl:max-w-[1280px]"
          style={{ opacity: 1, transform: "none" }}
        >
          <div className="flex-shrink-0 md:w-6/12 lg:w-7/12 xl:w-5/12">
            <h2 className="mb-3 text-sm font-medium text-cyan-50 text-dark dark:text-light lg:text-15px">
              BentaSoft
            </h2>
            <p className="leading-6 text-zinc-500">
              Along With Wordpress Themes &amp; Plugins, We always try to use
              latest trending techs like React, Next Js, Gatsby Js, GraphQl,
              Shopify etc to make our products special. Our rich tech choice
              will help you to build high performance applications. We are also
              known to provide great customer supports to our customers.
            </p>
            <div className="space-y-3.5 pt-4 text-dark/80 dark:text-light/80 md:pt-6 xl:pt-7 text-cyan-50">
              {/* <address className="flex max-w-sm items-start not-italic leading-[1.8]">
                <span className="mt-[3px] w-7 shrink-0 text-dark-800 dark:text-light-900">
                  <svg
                    viewBox="0 0 16 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-4 w-4"
                  >
                    <path
                      d="M8 0C6.40935 0.00211004 4.88445 0.634929 3.75969 1.75969C2.63493 2.88445 2.00211 4.40935 2 6C2 10.3075 7.59 15.7025 7.8275 15.93C7.8737 15.9749 7.93558 16 8 16C8.06442 16 8.1263 15.9749 8.1725 15.93C8.41 15.7025 14 10.3075 14 6C13.9979 4.40935 13.3651 2.88445 12.2403 1.75969C11.1155 0.634929 9.59065 0.00211004 8 0V0ZM8 8.75C7.4561 8.75 6.92442 8.58871 6.47218 8.28654C6.01995 7.98437 5.66747 7.55488 5.45933 7.05238C5.25119 6.54988 5.19673 5.99695 5.30284 5.4635C5.40895 4.93005 5.67086 4.44005 6.05546 4.05546C6.44005 3.67086 6.93005 3.40895 7.4635 3.30284C7.99695 3.19673 8.54988 3.25119 9.05238 3.45933C9.55488 3.66747 9.98437 4.01995 10.2865 4.47218C10.5887 4.92442 10.75 5.4561 10.75 6C10.7496 6.72921 10.4597 7.42843 9.94406 7.94406C9.42843 8.45969 8.72921 8.74956 8 8.75Z"
                      fill="currentColor"
                    ></path>
                  </svg>
                </span>
                4408 Hinkle Lake Road, Massachusetts, Cambridge, 02138, USA
              </address> */}
              <div className="flex items-center">
                <span className="w-7 shrink-0 text-dark-800 dark:text-light-900">
                  <svg
                    viewBox="0 0 16 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-4 w-4"
                  >
                    <path
                      d="M15.6741 6.90001C15.3946 4.86308 14.3174 3.0206 12.6795 1.77789C11.0415 0.535183 8.97699 -0.00595881 6.94006 0.273513C4.90313 0.552985 3.06065 1.63018 1.81794 3.26812C0.575229 4.90606 0.0340879 6.97058 0.31356 9.00751C0.543808 10.6934 1.31855 12.258 2.51989 13.463C3.72122 14.668 5.28336 15.4476 6.96856 15.683C7.31339 15.7282 7.66079 15.7509 8.00856 15.751C9.41364 15.7533 10.7924 15.3699 11.9946 14.6425C12.0789 14.5917 12.1525 14.5248 12.211 14.4455C12.2695 14.3663 12.3118 14.2763 12.3355 14.1807C12.3593 14.0851 12.3639 13.9857 12.3493 13.8883C12.3346 13.7909 12.3009 13.6974 12.2501 13.613C12.1992 13.5286 12.1323 13.4551 12.0531 13.3966C11.9738 13.3381 11.8838 13.2958 11.7882 13.272C11.5952 13.2241 11.391 13.2549 11.2206 13.3575C10.3649 13.8711 9.39866 14.1723 8.40271 14.236C7.40676 14.2997 6.41005 14.1239 5.49595 13.7234C4.58185 13.3229 3.77695 12.7093 3.14857 11.934C2.52019 11.1587 2.08661 10.2442 1.88409 9.267C1.68158 8.28978 1.71602 7.27827 1.98454 6.31709C2.25306 5.35592 2.74784 4.47301 3.4275 3.74224C4.10717 3.01147 4.95194 2.45408 5.89116 2.1167C6.83039 1.77932 7.83675 1.67176 8.82606 1.80301C9.74497 1.92519 10.6252 2.25025 11.403 2.75463C12.1807 3.25901 12.8366 3.93009 13.3229 4.71925C13.8093 5.5084 14.1141 6.39586 14.2151 7.31734C14.3161 8.23881 14.2109 9.17122 13.9071 10.047C13.8282 10.2576 13.6858 10.4384 13.4995 10.5644C13.3132 10.6904 13.0924 10.7553 12.8676 10.75C12.5713 10.7496 12.2873 10.6318 12.0778 10.4223C11.8683 10.2128 11.7505 9.92877 11.7501 9.63251V5.00001C11.7501 4.8011 11.671 4.61034 11.5304 4.46968C11.3897 4.32903 11.199 4.25001 11.0001 4.25001C10.8011 4.25001 10.6104 4.32903 10.4697 4.46968C10.3291 4.61034 10.2501 4.8011 10.2501 5.00001V5.00701C9.68149 4.57788 9.00245 4.31957 8.29242 4.26231C7.58239 4.20505 6.87073 4.35121 6.24074 4.68368C5.61075 5.01614 5.08848 5.52117 4.73506 6.13966C4.38164 6.75814 4.21169 7.46449 4.2451 8.17604C4.27851 8.8876 4.51389 9.57492 4.9237 10.1576C5.33351 10.7402 5.9008 11.1941 6.55917 11.4661C7.21754 11.7381 7.93976 11.8169 8.6413 11.6934C9.34285 11.5698 9.9947 11.249 10.5206 10.7685C10.733 11.2111 11.0659 11.5848 11.481 11.8468C11.8961 12.1088 12.3767 12.2486 12.8676 12.25C13.4042 12.2552 13.9291 12.0931 14.3694 11.7863C14.8097 11.4795 15.1436 11.0432 15.3246 10.538C15.7288 9.37041 15.8486 8.12322 15.6741 6.90001V6.90001ZM8.00006 10.25C7.55505 10.25 7.12004 10.1181 6.75003 9.87082C6.38002 9.62359 6.09163 9.27219 5.92133 8.86105C5.75103 8.44992 5.70648 7.99752 5.79329 7.56106C5.88011 7.1246 6.0944 6.72369 6.40907 6.40902C6.72374 6.09436 7.12465 5.88006 7.56111 5.79325C7.99756 5.70643 8.44996 5.75099 8.8611 5.92128C9.27223 6.09158 9.62363 6.37997 9.87087 6.74998C10.1181 7.11999 10.2501 7.55501 10.2501 8.00001C10.2494 8.59655 10.0121 9.16846 9.59032 9.59027C9.16851 10.0121 8.59659 10.2494 8.00006 10.25V10.25Z"
                      fill="currentColor"
                    ></path>
                  </svg>
                </span>
                <a href="mailto:vendor@demo.com" className="hover:text-brand">
                  vendor@demo.com
                </a>
              </div>
            </div>
          </div>
          <div className="mt-7 flex-shrink-0 rounded-md bg-light p-6 shadow-card dark:bg-dark-250 md:mt-0 md:w-72 lg:p-8 text-cyan-50">
            <div className="-mx-2 flex pb-6 lg:pb-7">
              <div className="flex flex-shrink-0 flex-col px-2 pr-10 text-13px capitalize text-dark-500 dark:text-light-900 lg:w-1/2 lg:pr-0">
                <span className="mb-0.5 text-2xl text-dark dark:text-light">
                  4
                </span>
                Total Sales
              </div>
              <div className="flex flex-shrink-0 flex-col px-2 pr-10 text-13px capitalize text-dark-500 dark:text-light-900 xl:w-1/2 xl:pr-0">
                <span className="mb-0.5 text-2xl text-dark dark:text-light">
                  6
                </span>
                Products
              </div>
            </div>
            <div className="space-y-3 border-t border-light-300 pt-5 dark:border-dark-500">
              <a
                href="https://www.facebook.com/redqinc/"
                target="_blank"
                rel="noreferrer"
                className="group flex items-center"
              >
                <svg
                  viewBox="0 0 16 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-3.5 h-3.5 text-dark-800 dark:text-light-900 shrink-0"
                >
                  <path
                    d="M13.8439 0H2.15615C0.965434 0 0.00012207 0.965273 0.00012207 2.15603V13.8439C0.00012207 15.0346 0.965395 15.9999 2.15615 15.9999H7.92051L7.93034 10.2824H6.44493C6.25189 10.2824 6.09521 10.1263 6.09447 9.93329L6.08735 8.0903C6.0866 7.8962 6.24375 7.73847 6.43785 7.73847H7.92055V5.95767C7.92055 3.89107 9.1827 2.7658 11.0262 2.7658H12.539C12.7326 2.7658 12.8895 2.92271 12.8895 3.1163V4.67031C12.8895 4.86382 12.7327 5.0207 12.5392 5.02081L11.6108 5.02124C10.6083 5.02124 10.4141 5.49766 10.4141 6.19682V7.73851H12.6171C12.827 7.73851 12.9899 7.9218 12.9652 8.13026L12.7467 9.97325C12.7258 10.1496 12.5763 10.2825 12.3987 10.2825H10.424L10.4141 16H13.844C15.0347 16 16 15.0347 16 13.844V2.15603C16 0.965273 15.0347 0 13.8439 0Z"
                    fill="currentColor"
                  ></path>
                </svg>
                <span className="ml-3 transition-colors group-hover:text-dark ltr:pl-2 rtl:pr-2 dark:group-hover:text-light">
                  facebook.com
                </span>
              </a>
              <a
                href="https://www.instagram.com/redqinc/"
                target="_blank"
                rel="noreferrer"
                className="group flex items-center"
              >
                <svg
                  data-name="Group 96"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 12 12"
                  className="w-3.5 h-3.5 text-dark-800 dark:text-light-900 shrink-0"
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
                <span className="ml-3 transition-colors group-hover:text-dark ltr:pl-2 rtl:pr-2 dark:group-hover:text-light">
                  instagram.com
                </span>
              </a>
              <a
                href="https://www.youtube.com/channel/UCjld1tyVHRNy_pe3ROLiLhw"
                target="_blank"
                rel="noreferrer"
                className="group flex items-center"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 15.997 12"
                  className="w-3.5 h-3.5 text-dark-800 dark:text-light-900 shrink-0"
                >
                  <path
                    d="M15.893 2.65A2.429 2.429 0 0013.581.113c-1.731-.081-3.5-.112-5.3-.112h-.563c-1.8 0-3.569.031-5.3.112A2.434 2.434 0 00.106 2.656C.028 3.768-.006 4.881-.003 5.993s.031 2.225.106 3.34a2.437 2.437 0 002.309 2.547c1.822.085 3.688.12 5.584.12s3.759-.031 5.581-.119a2.438 2.438 0 002.312-2.547c.075-1.116.109-2.228.106-3.344s-.027-2.225-.102-3.34zM6.468 9.059v-6.14l4.531 3.069z"
                    fill="currentColor"
                  ></path>
                </svg>
                <span className="ml-3 transition-colors group-hover:text-dark ltr:pl-2 rtl:pr-2 dark:group-hover:text-light">
                  youtube.com
                </span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopExpertsAbout;

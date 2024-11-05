import { useState, useEffect, useContext } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { ModalContext } from "../../context/modal-context";
import RequestServiceModal from "../Services/ReqeustServiceModal";
import Notification from "../commons/Notification";
import { useGetExpertServiceByIdMutation } from "../../lib/apis/serviceApis";
import VideoPlayer from "./VideoPlayer";
import RelatedServices from "./RelatedServices";
import OtherServices from "./OtherServices";
import ServiceDetailsLoader from "../commons/ServiceDetailsLoader";
import { getServiceByName } from "../../lib/apis/ServicesApis";
import styles from "./ExpertServices.module.css";

interface IServiceDetailProps {
  id: string;
  businessName: string;
  service: string;
  price: number;
  servicePoster: string;
  businessLogo: string;
  serviceVideo: string;
}

const ServiceDetails: React.FC = () => {
  const [serviceDetail, setServiceDetail] =
    useState<IServiceDetailProps | null>(null);

  const [openModal, setOpenModal] = useState(false);

  const modalCtx = useContext(ModalContext);

  const { user } = useSelector((state: any) => state.userState);

  const [getExpertServiceById, { data, isLoading, error }] =
    useGetExpertServiceByIdMutation();

  const navigate = useNavigate();

  const { serviceName } = useParams();

  useEffect(() => {
    getExpertServiceById(null);
    if (serviceName) {
      const result = getServiceByName(serviceName);

      setServiceDetail(result);
    }
  }, [serviceName]);

  return (
    <>
      <RequestServiceModal
        open={openModal}
        serviceDetail={serviceDetail || undefined}
        onCloseModal={() => setOpenModal(false)}
      />
      <Notification />
      {isLoading && <ServiceDetailsLoader />}
      {!isLoading && (
        <div className={`relative my-28  w-full ${styles.service_details}`}>
          <div
            className={`${styles.close_container}  flex items-center justify-between rounded-t`}
          >
            <div
              className={`${styles.service_intro}  flex gap-5 items-center my-5`}
            >
              <p className={`${styles.service} max-sm:text-xs`}>
                {serviceDetail?.service}
              </p>

              <div className="sm:pt-2">
                <img
                  src={serviceDetail?.businessLogo}
                  alt={`${serviceDetail?.businessName} logo`}
                  className="sm:w-6 sm:h-6 w-6 h-6  rounded-full"
                />
              </div>
            </div>
          </div>
          <div className="lg:flex lg:gap-8">
            <div className="lg:w-3/5">
              {!isLoading && serviceDetail && (
                <VideoPlayer serviceVideo={serviceDetail?.serviceVideo || ""} />
              )}

              {!isLoading && serviceDetail && (
                <OtherServices
                  service={serviceDetail?.service}
                  serviceVideo={serviceDetail?.serviceVideo}
                  businessName={serviceDetail?.businessName}
                  servicePoster={serviceDetail?.servicePoster}
                />
              )}
            </div>

            <div className="lg:w-2/5  lg:pr-5">
              <p className={`${styles.service_description}`}>
                Along With Wordpress Themes & Plugins, We always try to use
                latest trending techs like React, Next Js, Gatsby Js, GraphQl,
                Shopify etc to make our products special.
              </p>
              <p className={`${styles.service_description}`}>
                Along With Wordpress Themes & Plugins, We always try to use
                latest trending techs like React, Next Js, Gatsby Js, GraphQl,
                Shopify etc to make our products special.
              </p>
              <p className={`${styles.service_description}`}>
                Along With Wordpress Themes & Plugins, We always try to use
                latest trending techs like React, Next Js, Gatsby Js, GraphQl,
                Shopify etc to make our products special.
              </p>

              <div className="flex space-x-6 border-t border-light-500 py-3 rtl:space-x-reverse dark:border-dark-500 md:py-4 3xl:py-5 mt-5">
                <div className="flex items-center tracking-[.1px] text-dark dark:text-light">
                  <svg
                    viewBox="0 0 18 18"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className={`h-[18px] w-[18px] ${styles.cart_icon}`}
                  >
                    <path
                      d="M14.2521 12.7481C13.0145 12.7481 12.0077 13.755 12.0077 14.9925C12.0077 16.2301 13.0145 17.2369 14.2521 17.2369C15.4896 17.2369 16.4965 16.2301 16.4965 14.9925C16.4965 13.755 15.4896 12.7481 14.2521 12.7481ZM14.2521 15.8903C13.757 15.8903 13.3543 15.4876 13.3543 14.9925C13.3543 14.4974 13.757 14.0948 14.2521 14.0948C14.7472 14.0948 15.1498 14.4974 15.1498 14.9925C15.1498 15.4876 14.7472 15.8903 14.2521 15.8903Z"
                      fill="currentColor"
                    ></path>
                    <path
                      d="M17.8569 4.07381C17.7294 3.91064 17.5339 3.81548 17.3268 3.81548H4.1562L3.5502 1.27999C3.47771 0.977014 3.2068 0.763123 2.89527 0.763123H0.673316C0.301431 0.763087 0 1.06452 0 1.4364C0 1.80829 0.301431 2.10972 0.673316 2.10972H2.36381L4.55209 11.266C4.62459 11.5692 4.8955 11.7828 5.20702 11.7828H15.6884C15.9979 11.7828 16.2677 11.5719 16.3419 11.2716L17.9804 4.65058C18.03 4.44952 17.9844 4.23697 17.8569 4.07381ZM15.1616 10.4362H5.73848L4.47802 5.16211H16.4665L15.1616 10.4362Z"
                      fill="currentColor"
                    ></path>
                    <path
                      d="M6.10511 12.7481C4.86753 12.7481 3.86072 13.755 3.86072 14.9925C3.86072 16.2301 4.86756 17.2369 6.10511 17.2369C7.34265 17.2369 8.34949 16.2301 8.34949 14.9925C8.34949 13.755 7.34265 12.7481 6.10511 12.7481ZM6.10511 15.8903C5.61 15.8903 5.20735 15.4876 5.20735 14.9925C5.20735 14.4974 5.61 14.0948 6.10511 14.0948C6.60021 14.0948 7.00286 14.4974 7.00286 14.9925C7.00286 15.4876 6.60021 15.8903 6.10511 15.8903Z"
                      fill="currentColor"
                    ></path>
                  </svg>
                  <span className={styles.service_text}> 6 Sales</span>
                </div>
              </div>

              <div className="space-y-4 text-13px border-t border-light-500 py-5 dark:border-dark-500 lg:py-6 3xl:py-10">
                <div className="flex items-start text-dark dark:text-light">
                  <strong className="flex w-36 flex-shrink-0 items-center font-normal text-dark-600 dark:text-light-600">
                    <span className="w-8 flex-shrink-0 text-dark-900 dark:text-light-900">
                      <svg
                        viewBox="0 0 18 18"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        className={`h-[18px] w-[18px] ${styles.cart_icon}`}
                      >
                        <path
                          d="M9 2.24999C10.1624 2.24828 11.3052 2.54942 12.3158 3.12374L11.4698 3.96974C11.3649 4.07463 11.2935 4.20826 11.2646 4.35372C11.2356 4.49918 11.2505 4.64996 11.3072 4.78698C11.364 4.92401 11.4601 5.04113 11.5834 5.12355C11.7067 5.20596 11.8517 5.24996 12 5.24999H15C15.1989 5.24999 15.3897 5.17098 15.5303 5.03032C15.671 4.88967 15.75 4.69891 15.75 4.49999V1.49999C15.75 1.35168 15.706 1.20671 15.6236 1.0834C15.5411 0.960093 15.424 0.863988 15.287 0.807236C15.15 0.750483 14.9992 0.735631 14.8537 0.764556C14.7083 0.793482 14.5746 0.864887 14.4698 0.969744L13.4123 2.02499C12.1642 1.23507 10.7271 0.794676 9.25075 0.749784C7.77444 0.704893 6.31315 1.05715 5.01946 1.76979C3.72576 2.48242 2.6471 3.52929 1.89609 4.8011C1.14509 6.0729 0.749281 7.523 0.750001 8.99999C0.750001 9.19891 0.829019 9.38967 0.969671 9.53032C1.11032 9.67098 1.30109 9.74999 1.5 9.74999C1.69891 9.74999 1.88968 9.67098 2.03033 9.53032C2.17098 9.38967 2.25 9.19891 2.25 8.99999C2.25199 7.21039 2.96378 5.49466 4.22922 4.22922C5.49466 2.96378 7.2104 2.25198 9 2.24999Z"
                          fill="currentColor"
                        ></path>
                        <path
                          d="M16.5 8.25C16.3011 8.25 16.1103 8.32902 15.9697 8.46967C15.829 8.61032 15.75 8.80109 15.75 9C15.748 10.7896 15.0362 12.5053 13.7708 13.7708C12.5053 15.0362 10.7896 15.748 9 15.75C7.83771 15.7521 6.69502 15.4506 5.685 14.8755L6.53025 14.0303C6.63511 13.9254 6.70651 13.7917 6.73544 13.6463C6.76436 13.5008 6.74951 13.35 6.69276 13.213C6.63601 13.076 6.5399 12.9589 6.41659 12.8764C6.29329 12.794 6.14831 12.75 6 12.75H3C2.80109 12.75 2.61032 12.829 2.46967 12.9697C2.32902 13.1103 2.25 13.3011 2.25 13.5V16.5C2.24996 16.6483 2.29391 16.7933 2.37627 16.9167C2.45864 17.04 2.57574 17.1362 2.71275 17.193C2.80375 17.2309 2.90141 17.2503 3 17.25C3.1989 17.25 3.38963 17.1709 3.53025 17.0303L4.5885 15.975C5.90698 16.8128 7.43789 17.2552 9 17.25C11.1872 17.2474 13.2842 16.3774 14.8308 14.8308C16.3774 13.2842 17.2474 11.1872 17.25 9C17.25 8.80109 17.171 8.61032 17.0303 8.46967C16.8897 8.32902 16.6989 8.25 16.5 8.25Z"
                          fill="currentColor"
                        ></path>
                      </svg>
                    </span>

                    <span className={styles.service_text1}> Last Update:</span>
                  </strong>
                  <span className={`font-medium ${styles.service_text}`}>
                    Mar 5, 2022
                  </span>
                </div>
                <div className="flex items-start text-dark dark:text-light">
                  <strong className="flex w-36 flex-shrink-0 items-center font-normal text-dark-600 dark:text-light-600">
                    <span className="w-8 flex-shrink-0 text-dark-900 dark:text-light-900">
                      <svg
                        viewBox="0 0 18 18"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        className={`h-[18px] w-[18px] ${styles.cart_icon}`}
                      >
                        <path
                          fill-rule="evenodd"
                          clip-rule="evenodd"
                          d="M2.90225 4.31247C2.50604 4.31247 2.18486 4.63427 2.18486 5.03122V15.0937C2.18486 15.4907 2.50604 15.8124 2.90225 15.8124H15.0979C15.4941 15.8124 15.8153 15.4907 15.8153 15.0937V5.03122C15.8153 4.63427 15.4941 4.31247 15.0979 4.31247H2.90225ZM1.46747 2.87497C1.07126 2.87497 0.750076 3.19676 0.750076 3.59372V16.5312C0.750076 16.9281 1.07126 17.25 1.46747 17.25H16.5327C16.9289 17.25 17.2501 16.9281 17.2501 16.5312V3.59372C17.2501 3.19676 16.9289 2.87497 16.5327 2.87497H1.46747Z"
                          fill="currentColor"
                        ></path>
                        <path
                          d="M1.4671 3.59375H17.2497V6.46875H1.4671V3.59375ZM3.61928 0.71875C3.61928 0.321795 3.94047 0 4.33667 0C4.73287 0 5.05406 0.321795 5.05406 0.71875V2.875C5.05406 3.27196 4.73287 3.59375 4.33667 3.59375C3.94047 3.59375 3.61928 3.27196 3.61928 2.875V0.71875ZM12.9454 0.71875C12.9454 0.321795 13.2665 0 13.6628 0C14.059 0 14.3801 0.321795 14.3801 0.71875V2.875C14.3801 3.27196 14.059 3.59375 13.6628 3.59375C13.2665 3.59375 12.9454 3.27196 12.9454 2.875V0.71875ZM4.33667 7.90628H6.48884V10.0625H4.33667V7.90628ZM4.33667 12.2188H6.48884V14.375H4.33667V12.2188ZM7.92363 7.90628H10.0758V10.0625H7.92363V7.90628ZM7.92363 12.2188H10.0758V14.375H7.92363V12.2188ZM11.5106 7.90628H13.6628V10.0625H11.5106V7.90628Z"
                          fill="currentColor"
                        ></path>
                      </svg>
                    </span>

                    <span className={styles.service_text1}> Published:</span>
                  </strong>
                  <span className={`${styles.service_text} font-medium`}>
                    Jan 27, 2022
                  </span>
                </div>

                {/* <div className="flex items-start text-dark dark:text-light">
                  <strong className="flex w-36 flex-shrink-0 items-center pt-0.5 font-normal text-dark-600 dark:text-light-600">
                    <span className="w-8 flex-shrink-0 text-dark-900 dark:text-light-900">
                      <svg
                        viewBox="0 0 20 20"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        className={`h-5 w-5 ${styles.cart_icon}`}
                      >
                        <path
                          d="M17.125 1H12.3677C11.4662 1 10.6188 1.351 9.98123 1.98849L1.63974 10.33C1.22725 10.7425 1 11.2908 1 11.8765C1 12.4593 1.22725 13.0075 1.63974 13.42L6.58 18.3603C6.99249 18.7728 7.54075 19 8.12649 19C8.70924 19 9.2575 18.7728 9.66999 18.3603L18.0115 10.0188C18.649 9.38125 19 8.53374 19 7.63226V2.87499C19 1.8415 18.1585 1 17.125 1ZM18.25 7.63226C18.25 8.33352 17.977 8.99277 17.482 9.48777L9.13976 17.83C8.6005 18.3693 7.65476 18.373 7.111 17.83L2.17 12.889C1.89926 12.619 1.74999 12.259 1.74999 11.8735C1.74999 11.491 1.89923 11.131 2.17 10.8603L10.5115 2.51875C11.008 2.02301 11.6665 1.74999 12.3677 1.74999H17.125C17.7452 1.74999 18.25 2.25473 18.25 2.87499V7.63226H18.25Z"
                          fill="currentColor"
                          stroke="currentColor"
                          stroke-width="0.5"
                        ></path>
                        <path
                          d="M14.8749 3.25C13.8414 3.25 12.9999 4.0915 12.9999 5.12499C12.9999 6.15848 13.8414 6.99998 14.8749 6.99998C15.9084 6.99998 16.7499 6.15851 16.7499 5.12499C16.7499 4.0915 15.9084 3.25 14.8749 3.25ZM14.8749 6.24999C14.2546 6.24999 13.7499 5.74525 13.7499 5.12499C13.7499 4.50473 14.2546 3.99999 14.8749 3.99999C15.4952 3.99999 15.9999 4.50473 15.9999 5.12499C15.9999 5.74525 15.4951 6.24999 14.8749 6.24999Z"
                          fill="currentColor"
                          stroke="currentColor"
                          stroke-width="0.5"
                        ></path>
                      </svg>
                    </span>
                    <span className={styles.service_text1}>Tags:</span>
                  </strong>
                  <div className="flex flex-wrap gap-2">
                    <a
                      className={`inline-flex items-center justify-center rounded border border-light-600 px-2 py-0.5 font-medium text-light-base transition-all hover:bg-light-200 hover:text-dark-300 dark:border-dark-500 dark:text-light-600 dark:hover:bg-dark-400 hover:dark:text-light ${styles.service_text1}`}
                      href="#"
                    >
                      E-commerce
                    </a>
                    <a
                      className={`inline-flex items-center justify-center rounded border border-light-600 px-2 py-0.5 font-medium text-light-base transition-all hover:bg-light-200 hover:text-dark-300 dark:border-dark-500 dark:text-light-600 dark:hover:bg-dark-400 hover:dark:text-light ${styles.service_text1}`}
                      href="#"
                    >
                      Blog
                    </a>
                    <a
                      className={`inline-flex items-center justify-center rounded border border-light-600 px-2 py-0.5 font-medium text-light-base transition-all hover:bg-light-200 hover:text-dark-300 dark:border-dark-500 dark:text-light-600 dark:hover:bg-dark-400 hover:dark:text-light ${styles.service_text1}`}
                      href="/products/tags/education"
                    >
                      Education
                    </a>
                  </div>
                </div> */}
              </div>
              <div className="border-t border-light-500 pt-5 dark:border-dark-500 mt-5">
                <div className="flex text-13px gap-6 lg:items-center">
                  <div
                    className={`${styles.service_text1} flex-shrink-0 pt-2 ltr:pr-4 rtl:pl-4 rtl:text-right dark:text-light-600 sm:w-36 lg:pt-0`}
                  >
                    Share this service:
                  </div>

                  <div className="flex flex-shrink-0  items-center gap-3 md:gap-1.5 xl:gap-3">
                    <button
                      className={styles.share_button}
                      data-title="Share service on facebook"
                    >
                      <svg
                        viewBox="0 0 64 64"
                        className="text-md h-7 w-7 transition-all"
                      >
                        <path
                          d="M34.1,47V33.3h4.6l0.7-5.3h-5.3v-3.4c0-1.5,0.4-2.6,2.6-2.6l2.8,0v-4.8c-0.5-0.1-2.2-0.2-4.1-0.2 c-4.1,0-6.9,2.5-6.9,7V28H24v5.3h4.6V47H34.1z"
                          fill="white"
                        ></path>
                      </svg>
                    </button>
                    <button
                      className={styles.share_button}
                      data-title="Share service on X"
                    >
                      <svg
                        viewBox="0 0 64 64"
                        className="text-md h-7 w-7 transition-all"
                      >
                        <path
                          d="M48,22.1c-1.2,0.5-2.4,0.9-3.8,1c1.4-0.8,2.4-2.1,2.9-3.6c-1.3,0.8-2.7,1.3-4.2,1.6 C41.7,19.8,40,19,38.2,19c-3.6,0-6.6,2.9-6.6,6.6c0,0.5,0.1,1,0.2,1.5c-5.5-0.3-10.3-2.9-13.5-6.9c-0.6,1-0.9,2.1-0.9,3.3 c0,2.3,1.2,4.3,2.9,5.5c-1.1,0-2.1-0.3-3-0.8c0,0,0,0.1,0,0.1c0,3.2,2.3,5.8,5.3,6.4c-0.6,0.1-1.1,0.2-1.7,0.2c-0.4,0-0.8,0-1.2-0.1 c0.8,2.6,3.3,4.5,6.1,4.6c-2.2,1.8-5.1,2.8-8.2,2.8c-0.5,0-1.1,0-1.6-0.1c2.9,1.9,6.4,2.9,10.1,2.9c12.1,0,18.7-10,18.7-18.7 c0-0.3,0-0.6,0-0.8C46,24.5,47.1,23.4,48,22.1z"
                          fill="white"
                        ></path>
                      </svg>
                    </button>
                    <button
                      className={styles.share_button}
                      data-title="Share service on linkedin"
                    >
                      <svg
                        viewBox="0 0 64 64"
                        className="text-md h-7 w-7 transition-all"
                      >
                        <path
                          d="M20.4,44h5.4V26.6h-5.4V44z M23.1,18c-1.7,0-3.1,1.4-3.1,3.1c0,1.7,1.4,3.1,3.1,3.1 c1.7,0,3.1-1.4,3.1-3.1C26.2,19.4,24.8,18,23.1,18z M39.5,26.2c-2.6,0-4.4,1.4-5.1,2.8h-0.1v-2.4h-5.2V44h5.4v-8.6 c0-2.3,0.4-4.5,3.2-4.5c2.8,0,2.8,2.6,2.8,4.6V44H46v-9.5C46,29.8,45,26.2,39.5,26.2z"
                          fill="white"
                        ></path>
                      </svg>
                    </button>

                    <button
                      className={`${styles.share_button2} `}
                      data-title="Copy service link"
                    >
                      <svg
                        viewBox="0 0 15 15"
                        fill="none"
                        // xmlns="http://www.w3.org/2000/svg"
                        className="text-md  transition-all h-4 xl:w-4"
                      >
                        <path
                          d="M6.21858 11.4329L4.45106 13.2004C3.71829 13.9332 2.53161 13.9332 1.79945 13.2006C1.06714 12.4683 1.06714 11.2815 1.7993 10.5493L5.33496 7.01364C6.06712 6.28145 7.25391 6.28145 7.98607 7.01364C8.23015 7.25771 8.62589 7.25771 8.86997 7.01364C9.11404 6.76957 9.11404 6.37382 8.86997 6.12975C7.64963 4.90941 5.6714 4.90941 4.45106 6.12975L0.915437 9.66537C-0.304902 10.8857 -0.304902 12.8639 0.915437 14.0843C2.13563 15.3053 4.114 15.3053 5.33498 14.0843L7.1025 12.3168C7.34658 12.0727 7.34658 11.6769 7.1025 11.4329C6.85843 11.1888 6.46266 11.1888 6.21858 11.4329Z"
                          fill="white"
                        ></path>
                        <path
                          d="M14.0846 0.915238C12.8642 -0.3051 10.8854 -0.3051 9.66502 0.915238L7.54439 3.03587C7.30031 3.27995 7.30031 3.67569 7.54439 3.91976C7.78846 4.16384 8.18421 4.16384 8.42828 3.91976L10.5489 1.79913C11.2811 1.06694 12.4685 1.06694 13.2007 1.79913C13.9328 2.53129 13.9328 3.71808 13.2007 4.45025L9.31191 8.33904C8.57972 9.07123 7.39295 9.07123 6.66079 8.33904C6.41671 8.09497 6.02097 8.09497 5.7769 8.33904C5.53282 8.58312 5.53282 8.97886 5.7769 9.22294C6.99724 10.4433 8.97546 10.4433 10.1958 9.22294L14.0846 5.33417C15.3049 4.11383 15.3049 2.13558 14.0846 0.915238Z"
                          fill="white"
                        ></path>
                      </svg>
                      {/* <span className={styles.service_text1}>Copy link</span> */}
                    </button>
                  </div>
                </div>
              </div>

              <div className="mt-8">
                {!user ? (
                  <Link
                    className={`${styles.service_button} w-full  md:w-3/4  font-semibold duration-200 pointer-events-auto cursor-pointer opacity-100 min-h-[46px] sm:h-12 rounded py-3 px-4 md:px-5 bg-brand text-white hover:bg-brand-dark focus:bg-brand-dark relative   mt-2.5 flex-1 xs:mt-0`}
                    onClick={() => modalCtx.toggleModal("auth")}
                    to="/auth/login"
                    // disabled
                  >
                    Request Service $65.00
                  </Link>
                ) : (
                  <button
                    className={`${styles.service_button} w-full  md:w-3/4  font-semibold duration-200 pointer-events-auto cursor-pointer opacity-100 min-h-[46px] sm:h-12 rounded py-3 px-4 md:px-5 bg-brand text-white hover:bg-brand-dark focus:bg-brand-dark relative   mt-2.5 flex-1 xs:mt-0`}
                    onClick={() => setOpenModal(true)}
                  >
                    Request Service ${serviceDetail?.price}
                  </button>
                )}
              </div>
            </div>
          </div>

          <RelatedServices serviceName={serviceName} />
        </div>
      )}
    </>
  );
};

export default ServiceDetails;

import { useState, useEffect, useContext } from "react";
import { Link, useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { Markup } from "interweave";
import { IconContext } from "react-icons";
import { TiStarburst } from "react-icons/ti";
import { PiCheckBold } from "react-icons/pi";
import { FaCheck } from "react-icons/fa6";
import { ModalContext } from "../../context/modal-context";
import RequestServiceModal from "../Services/ReqeustServiceModal";
import {
  useGetExpertServiceByIdMutation,
  useGetAllExpertServicesMutation,
} from "../../lib/apis/serviceApis";
import VideoPlayer from "./VideoPlayer";
import RelatedServices from "./RelatedServices";
import OtherServices from "./OtherServices";
import StarRatings from "./StarRatings";
import Reviews from "./Reviews";
import ServiceDetailsLoader from "../commons/ServiceDetailsLoader";
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

  const [
    getAllExpertServices,
    {
      isLoading: relatedServiceLoading,
      error: relatedServiceError,
      data: relatedServiceData,
    },
  ] = useGetAllExpertServicesMutation();

  const { serviceName } = useParams();

  useEffect(() => {
    if (serviceName) {
      getExpertServiceById(serviceName);
      getAllExpertServices(null);
    }
  }, [serviceName]);

  return (
    <>
      <RequestServiceModal
        open={openModal}
        lowest_acceptable_amount={data?.data?.lowest_acceptable_amount}
        description={data?.data?.description}
        businessName={data?.data?.expert_profile?.business_name}
        serviceId={data?.data?.id}
        onCloseModal={() => setOpenModal(false)}
      />

      {isLoading && <ServiceDetailsLoader />}

      {!isLoading && data?.data && (
        <div className={`relative my-28   w-full ${styles.service_details}`}>
          <div
            className={`${styles.close_container}  flex items-center h-20 gap-5 rounded-t`}
          >
            <p className={`${styles.service} max-sm:text-xs`}>
              {data?.data?.title}
            </p>

            <div className="sm:pt-2">
              <img
                src={data?.data?.expert_profile?.business_logo}
                alt={`${data?.data?.expert_profile?.business_name} logo`}
                className="sm:w-6 sm:h-6 w-6 h-6  rounded-full"
              />
            </div>
          </div>
          <div className="lg:flex lg:gap-8">
            <div className="lg:w-3/5">
              {!isLoading && data?.data && (
                <VideoPlayer serviceVideo={data?.data?.explainer_video} />
              )}

              {!isLoading && data?.data && (
                <OtherServices
                  service={data?.data?.title}
                  serviceVideo={data?.data?.explainer_video}
                  businessName={data?.data?.expert_profile?.business_name}
                  servicePoster={data?.data?.expert_profile?.business_logo}
                />
              )}
            </div>

            <div className="lg:w-2/5  lg:pr-5">
              <h1
                className={`${styles.service_description_intro} text-sm md:text-lg xl:text-xl`}
              >
                About
              </h1>

              {data?.data?.description && (
                <div
                  className={`${styles.service_description} text-xs md:text-sm`}
                >
                  <Markup content={data?.data?.description} />
                </div>
              )}

              <div
                className={`${styles.border_color} flex space-x-6 border-t border-light-500 py-3 rtl:space-x-reverse dark:border-dark-500 mt-5`}
              >
                <div className="flex items-center tracking-[.1px] text-dark dark:text-light">
                  <div className="flex items-center">
                    <IconContext.Provider
                      value={{ color: "#24b47e", size: "2em" }}
                    >
                      <TiStarburst />
                    </IconContext.Provider>

                    <div className="-ml-6 mr-4">
                      <IconContext.Provider
                        value={{ color: "black", size: "1em" }}
                      >
                        <FaCheck />
                      </IconContext.Provider>
                    </div>
                  </div>

                  <span className={styles.service_text}>
                    Verified by Deskzone
                  </span>
                </div>
              </div>

              <div
                className={`${styles.border_color} flex justify-between md:justify-start  md:gap-14 items-center text-13px border-t border-light-500 py-5 dark:border-dark-500 lg:py-6 3xl:py-10`}
              >
                <div>
                  <div className="flex items-center gap-3 mb-5">
                    <IconContext.Provider
                      value={{ color: "#24b47e", size: "1.8em" }}
                    >
                      <PiCheckBold />
                    </IconContext.Provider>

                    <span
                      className={`font-medium text-sm  ${styles.service_text}`}
                    >
                      User Research
                    </span>
                  </div>

                  <div className="flex items-center gap-3">
                    <IconContext.Provider
                      value={{ color: "#24b47e", size: "1.8em" }}
                    >
                      <PiCheckBold />
                    </IconContext.Provider>

                    <span
                      className={`font-medium text-xs  ${styles.service_text}`}
                    >
                      Timely Delivery
                    </span>
                  </div>
                </div>

                <div>
                  <div className="flex items-center gap-3 mb-5">
                    <IconContext.Provider
                      value={{ color: "#24b47e", size: "1.8em" }}
                    >
                      <PiCheckBold />
                    </IconContext.Provider>

                    <span
                      className={`font-medium text-xs ${styles.service_text}`}
                    >
                      Post Service Support
                    </span>
                  </div>

                  <div className="flex items-center gap-3">
                    <IconContext.Provider
                      value={{ color: "#24b47e", size: "1.8em" }}
                    >
                      <PiCheckBold />
                    </IconContext.Provider>

                    <span
                      className={`font-medium text-xs  ${styles.service_text}`}
                    >
                      Continuous Update
                    </span>
                  </div>
                </div>
              </div>
              <div
                className={`border-t border-light-500 pt-5 dark:border-dark-500 mt-5 ${styles.border_color}`}
              >
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
                    </button>
                  </div>
                </div>
              </div>

              <div className="mt-8">
                {!user ? (
                  <Link
                    className={`${styles.service_button} w-full  font-semibold duration-200 pointer-events-auto cursor-pointer opacity-100 min-h-[46px] sm:h-12 rounded py-3 px-4 md:px-5 bg-brand text-white hover:bg-brand-dark focus:bg-brand-dark relative   mt-2.5 flex-1 xs:mt-0`}
                    onClick={() => modalCtx.toggleModal("auth")}
                    to="/auth/login"
                    // disabled
                  >
                    Contact Expert
                  </Link>
                ) : (
                  <Link
                    to="#"
                    className={`${styles.service_button} w-full  font-semibold duration-200 pointer-events-auto cursor-pointer opacity-100 min-h-[46px] sm:h-12 rounded py-3 px-4 md:px-5 bg-brand text-white hover:bg-brand-dark focus:bg-brand-dark relative   mt-2.5 flex-1 xs:mt-0`}
                    onClick={() => setOpenModal(true)}
                  >
                    Contact Expert
                  </Link>
                )}
              </div>
            </div>
          </div>

          <StarRatings />
          <Reviews />
          {relatedServiceData && (
            <RelatedServices
              services={relatedServiceData?.data}
              serviceName={serviceName}
            />
          )}
        </div>
      )}
    </>
  );
};

export default ServiceDetails;

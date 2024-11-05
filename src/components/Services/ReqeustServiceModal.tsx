import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { useCreateServiceRequestMutation } from "../../lib/apis/serviceApis";
import SuccessModal from "../commons/SuccessModal";
import FormButton from "../commons/FormButton";
import ReactDOM from "react-dom";
import styles from "./RequestServiceModal.module.css";

interface IServiceDetailProps {
  id: string;
  businessName: string;
  service: string;
  price: number;
  servicePoster: string;
  businessLogo: string;
  serviceVideo: string;
  description?: string; // Add the description property
  expected_start_date?: string;
  amount_offered?: string;
}

const RequestServiceModal: React.FC<{
  open?: boolean;
  onCloseModal?: () => void;
  serviceDetail?: IServiceDetailProps;
}> = ({ open, onCloseModal, serviceDetail }) => {
  const [openSuccessModal, setOpenSuccessModal] = useState(false);
  const [serviceData, setServiceData] = useState<
    IServiceDetailProps | undefined
  >(undefined);

  const [createServiceRequest, { isLoading, error, isError, isSuccess }] =
    useCreateServiceRequestMutation();

  const { user } = useSelector((state: any) => state.userState);

  const navigate = useNavigate();

  useEffect(() => {
    if (serviceDetail) {
      setServiceData(serviceDetail);
    }
  }, [serviceDetail]);

  useEffect(() => {
    if (isSuccess || isError) {
      setOpenSuccessModal(true);
    }
  }, [isSuccess, isError]);

  const onCreateService = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    await createServiceRequest({});
  };

  return ReactDOM.createPortal(
    <div
      // id="authentication-modal"
      tabIndex={-1}
      aria-hidden="true"
      className={`${!open && "hidden"}  ${
        open && "flex"
      } overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 justify-center items-center w-full  h-full bg-black bg-opacity-90`}
    >
      <SuccessModal
        message="Message sent successfully"
        open={openSuccessModal}
        onCloseModal={() => navigate(`/messages/${serviceData?.id}`)}
      />
      <div
        className={`relative p-4 w-full max-w-md max-h-fit ${styles.auth_form_container}`}
      >
        <div className="relative  shadow">
          <div className="px-4 flex  justify-between w-full items-center mb-7">
            <div className="flex gap-3 items-center">
              <img src={serviceDetail?.businessLogo} />
              <Link to={"/"} className={styles.business_name}>
                <p>{serviceDetail?.businessName}</p>
              </Link>
            </div>
            <button
              onClick={onCloseModal}
              type="button"
              className="end-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white"
              data-modal-hide="authentication-modal"
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

          {/* backend Api error */}
          {/* {isError &&
          error &&
          "data" in error &&
          typeof error.data === "object" &&
          error.data !== null &&
          "message" in error.data &&
          (error.data as { message: string }).message
            .split(":")
            .map((msg, index) => (
              <Error key={index} message={msg || "something went wrong"} />
            ))} */}

          <div className="p-4 md:p-5">
            <form className="space-y-4" action="#" onSubmit={onCreateService}>
              <div>
                <label
                  htmlFor="email"
                  className={`${styles.form_label} block mb-2  font-medium`}
                >
                  Service Type
                </label>
                <input
                  type="text"
                  name="email"
                  id="email"
                  className={`${styles.form_input} text-sm block w-full p-2.5  dark:text-white`}
                  placeholder="name@company.com"
                  value={serviceData?.service}
                />
              </div>
              <div>
                <label
                  htmlFor="password"
                  className={`block mb-2  font-medium ${styles.form_label}`}
                >
                  Project Description
                </label>
                <div className="flex items-center">
                  <textarea
                    onChange={(event) =>
                      setServiceData(
                        serviceData
                          ? { ...serviceData, description: event.target.value }
                          : undefined
                      )
                    }
                    placeholder="Describe your project"
                    name="profile.bio"
                    className={`${styles.profile_input} text-cyan-50 min-h-[100px] w-full appearance-none rounded border border-light-500 px-4 py-3 text-13px text-dark ring-[0.5px] ring-light-500 placeholder:text-dark-900 focus:border-brand focus:ring-[0.5px] focus:ring-brand dark:border-dark-600 dark:text-light dark:ring-dark-600 dark:placeholder:text-dark-700 dark:focus:border-brand dark:focus:ring-brand lg:px-5 bg-transparent`}
                  ></textarea>
                </div>
              </div>

              <div>
                <label
                  htmlFor="password"
                  className={`block mb-2  font-medium ${styles.form_label}`}
                >
                  Expected Start Date
                </label>
                <div className="flex items-center">
                  <input
                    type="date"
                    name="date"
                    id="date"
                    className={`${styles.form_input} text-sm block w-full p-2.5  dark:text-white`}
                    placeholder="name@company.com"
                    onChange={(event) =>
                      setServiceData(
                        serviceData
                          ? {
                              ...serviceData,
                              expected_start_date: event.target.value,
                            }
                          : undefined
                      )
                    }
                    // onChange={(event) => setEmail(event.target.value)}
                    // value={serviceDetail?.service}
                  />
                </div>
              </div>

              <div>
                <label
                  htmlFor="password"
                  className={`block mb-2  font-medium ${styles.form_label}`}
                >
                  Amount Offered
                </label>
                <div className="flex items-center">
                  <input
                    type="text"
                    id="date"
                    className={`${styles.form_input} text-sm block w-full p-2.5  dark:text-white`}
                    placeholder="2000"
                    onChange={(event) =>
                      setServiceData(
                        serviceData
                          ? {
                              ...serviceData,
                              amount_offered: event.target.value,
                            }
                          : undefined
                      )
                    }
                    value={`$${serviceData?.price}`}
                  />
                </div>
              </div>

              <FormButton
                isLoading={isLoading}
                formIsValid={true}
                textContent="Get Started"
              />
            </form>
          </div>
        </div>
      </div>
    </div>,
    document.getElementById("modal") as HTMLElement
  );
};

export default RequestServiceModal;

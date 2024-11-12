import { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import { Link, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import ServiceDatePicker from "./ServiceDatePicker";
import { useCreateServiceRequestMutation } from "../../lib/apis/serviceApis";
import useFormValidation from "../../hooks/useFormValidation";
import SuccessModal from "../commons/SuccessModal";
import FormButton from "../commons/FormButton";
import sample_logo from "../../Assets/poster5.png";
import styles from "./RequestServiceModal.module.css";

const RequestServiceModal: React.FC<{
  open?: boolean;
  onCloseModal?: () => void;
  lowest_acceptable_amount?: number;
  description?: string;
  businessName?: string;
  serviceId: string;
}> = ({
  open,
  onCloseModal,
  lowest_acceptable_amount,
  description,
  businessName,
  serviceId,
}) => {
  const [openSuccessModal, setOpenSuccessModal] = useState(false);
  const [serviceData, setServiceData] = useState({
    service_id: "",
    amount_offered: "",
    description: "",
    project_end_date: "",
  });

  const [createServiceRequest, { isLoading, error, isError, isSuccess }] =
    useCreateServiceRequestMutation();

  // validate form hook
  const [formIsValid, formError, validateFormInputs] = useFormValidation() as [
    boolean,
    { field: string; error: string },
    (type: string, formProps: any) => void
  ];

  const { user } = useSelector((state: any) => state.userState);

  const navigate = useNavigate();

  useEffect(() => {
    if (businessName && lowest_acceptable_amount) {
      setServiceData({
        service_id: serviceId,
        amount_offered: lowest_acceptable_amount?.toString(),
        description: "",
        project_end_date: "",
      });
    }
  }, [serviceId]);

  useEffect(() => {
    if (isSuccess || isError) {
      setOpenSuccessModal(true);
    }
  }, [isSuccess, isError]);

  const onCreateService = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    await createServiceRequest({});
  };

  useEffect(() => {
    if (typeof validateFormInputs === "function") {
      const timer = setTimeout(() => {
        validateFormInputs("service-request", serviceData);
      }, 1000);
      return () => {
        clearTimeout(timer);
      };
    }
  }, [serviceData]);

  return ReactDOM.createPortal(
    <div
      // id="authentication-modal"
      tabIndex={-1}
      aria-hidden="true"
      className={`${!open && "hidden"}  ${open && "flex"} ${
        styles.modal_overlay
      } overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 justify-center items-center w-full  h-full bg-black bg-opacity-90`}
    >
      <SuccessModal
        message="Message sent successfully"
        open={openSuccessModal}
        onCloseModal={() => navigate(`/messages/${serviceData?.service_id}`)}
      />
      <div
        className={`relative mt-20 mb-10 p-4 w-full max-w-md max-h-fit ${styles.auth_form_container}`}
      >
        <div className="ml-auto flex mr-2 -mb-3">
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
        <div className="relative shadow">
          <div className="px-4 flex justify-between w-full items-center mb-4">
            <div className="flex gap-3 items-center">
              <img
                src={sample_logo}
                className={`w-10 h-10 ${styles.business_logo}`}
                alt="business logo"
              />
              <div>
                <p
                  className={`${styles.connect} font-medium text-sm md:text-lg xl:text-xl`}
                >
                  Connect with
                  <Link to={"/"} className={styles.business_name}>
                    <span className="ml-2">{businessName}</span>
                  </Link>
                </p>

                <p className={`${styles.connect2} text-xs`}>
                  Respond in about 1 hour
                </p>
              </div>
            </div>
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
              {/* <div>
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
                  className={`${styles.form_input2} text-sm block w-full p-2.5  dark:text-white`}
                  placeholder="name@company.com"
                  value={serviceDetail?.service}
                />
              </div> */}
              <div className="mb-8">
                <label
                  htmlFor="password"
                  className={`block mb-2  font-medium ${styles.form_label}`}
                >
                  Project Description
                </label>
                <div className="flex items-center">
                  <textarea
                    onChange={(event) =>
                      setServiceData({
                        ...serviceData,
                        description: event.target.value,
                      })
                    }
                    placeholder="Please describe your project, include any requirements, timelines and goals"
                    className={`${styles.profile_input} ${
                      formError?.field === "description" &&
                      styles.error_identifier
                    } text-cyan-50 min-h-[100px] w-full appearance-none rounded border border-light-500 px-3 py-3 text-13px  bg-transparent`}
                  ></textarea>
                </div>
                <div className="flex justify-end -mt-5 mr-2">
                  <span className=" text-fuchsia-200 text-sm">
                    {!serviceData?.description
                      ? "0"
                      : serviceData?.description?.trim().length}
                    /500
                  </span>
                </div>
              </div>

              <div>
                <label
                  htmlFor="password"
                  className={`flex flex-col mb-2  font-medium ${styles.form_label}`}
                >
                  Target Date
                  <span className="text-cyan-50" style={{ fontSize: "10px" }}>
                    Select when you need project to be completed
                  </span>
                </label>
                <div className="flex items-center">
                  <ServiceDatePicker
                    onSelectDate={(date: any) =>
                      setServiceData({ ...serviceData, project_end_date: date })
                    }
                  />
                </div>
              </div>

              <div>
                <label
                  htmlFor="project budget"
                  className={`mb-2 mt-8  font-medium flex flex-col ${styles.form_label}`}
                >
                  Project Budget
                  <span className="text-cyan-50" style={{ fontSize: "10px" }}>
                    {businessName}'s minimum rate for the selected service is $
                    {lowest_acceptable_amount &&
                      Math.floor(lowest_acceptable_amount)}
                  </span>
                </label>

                <div className={`flex`}>
                  <input
                    value="$"
                    className={`${styles.form_input3}  w-7 pl-3`}
                    disabled
                  />
                  <input
                    type="text"
                    id="date"
                    className={`${styles.form_input} text-sm block w-full p-2.5  dark:text-white`}
                    placeholder="2000"
                    onChange={(event) =>
                      setServiceData({
                        ...serviceData,
                        amount_offered: event.target.value,
                      })
                    }
                    value={`${serviceData?.amount_offered}`}
                  />
                </div>
              </div>

              <FormButton
                isLoading={isLoading}
                formIsValid={formIsValid}
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

import { useState, useReducer, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useCreateExpertMutation } from "../../lib/apis/expertApis";
import { IExpertApplicationAction } from "../../interfaces/propsInterfaces";
import BusinessDetails from "./BusinessDetails";
import SuccessModal from "../commons/SuccessModal";
import ErrorModal from "../commons/ErrorModal";
import { IExpertApplicationState } from "../../interfaces/propsInterfaces";
import useFormValidation from "../../hooks/useFormValidation";
import FormButton from "../commons/FormButton";
import styles from "./Expert.module.css";
import BusinessLogo from "./BusinessLogo";
import BusinessCoverImage from "./BusinessCoverImage";

const expertApplicationReducer = (
  state: IExpertApplicationState,
  action: IExpertApplicationAction
): IExpertApplicationState => {
  switch (action.type) {
    case "BUSINESS_NAME":
      return { ...state, businessName: action.payload };

    case "ABOUT_ME":
      return { ...state, about: action.payload };

    case "LOGO":
      return {
        ...state,
        logo: action.payload,
      };
    case "COVER_IMAGE":
      return {
        ...state,
        coverImage: action.payload,
      };
    default:
      return state;
  }
};

const ExpertApplicationForm: React.FC = () => {
  const [createExpert, { data, error, isSuccess, isLoading, isError }] =
    useCreateExpertMutation();

  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [errorModalIsOpen, setErrorModalIsOpen] = useState(false);

  const navigate = useNavigate();

  // validate registration form hook
  const [formIsValid, formError, validateFormInputs] = useFormValidation() as [
    boolean,
    { field: string; error: string },
    (type: string, formProps: any) => void
  ];

  const [expertApplicationState, dispatch] = useReducer(
    expertApplicationReducer,
    {
      businessName: "",
      about: "",
      logo: null,
      coverImage: null,
      stage: 1,
      percentage: 0,
    }
  );

  // change business name function
  const onChangeBusinessName = (event: React.ChangeEvent<HTMLInputElement>) => {
    dispatch({
      type: "BUSINESS_NAME",
      payload: event.target.value,
    });
  };

  // change business about function
  const onChangeAbout = (about: string) => {
    dispatch({ type: "ABOUT_ME", payload: about });
  };

  // update business logo function
  const onSelectLogo = (logo: any) => {
    dispatch({ type: "LOGO", payload: logo });
  };

  const onSelectCoverImage = (coverImage: any) => {
    dispatch({ type: "COVER_IMAGE", payload: coverImage });
  };

  useEffect(() => {
    if (typeof validateFormInputs === "function") {
      const timer = setTimeout(() => {
        validateFormInputs("expert-application", expertApplicationState);
      }, 1000);
      return () => {
        clearTimeout(timer);
      };
    }
  }, [
    expertApplicationState.businessName,
    expertApplicationState.about,
    expertApplicationState.coverImage,
    expertApplicationState.logo,
  ]);

  const onFormSubmitHandler = async (
    event: React.FormEvent<HTMLFormElement>
  ) => {
    event.preventDefault();

    if (!formIsValid) {
      return;
    }

    const formData = new FormData();
    formData.append("logo", expertApplicationState?.logo);
    formData.append("cover_image", expertApplicationState?.coverImage);
    formData.append("about_me", expertApplicationState?.about || "");
    formData.append(
      "business_name",
      expertApplicationState?.businessName || ""
    );

    await createExpert({ expertData: formData });
  };

  useEffect(() => {
    if (isSuccess && data) {
      setModalIsOpen(true);
    }
  }, [isSuccess, data]);

  useEffect(() => {
    if (isError && error) {
      setErrorModalIsOpen(true);
    }
  }, [isError, error]);

  return (
    <>
      {modalIsOpen && (
        <SuccessModal
          message="Application successful, you can start creating service on DeskZone."
          open={modalIsOpen}
          onCloseModal={() => navigate("/expert/profile")}
        />
      )}

      {errorModalIsOpen && (
        <ErrorModal
          message="Application failed"
          buttonText="Try Again"
          open={errorModalIsOpen}
          onCloseModal={() => setErrorModalIsOpen(false)}
        />
      )}

      <div className={`relative ${styles.service_details}`}>
        <div className={`${styles.close_container}  rounded-t`}>
          <div className={styles.service_intro}>
            <p className="md:text-3xl xl:text-4xl mb-1 text-lg">
              Become an Expert on DeskZone
            </p>
            <h1 className="text-xs  md:text-sm">
              We will help you earn good value from your skills.
            </h1>
          </div>
        </div>
        <div
          className={`${styles.service_form} flex justify-center h-4/5 overflow-y-auto`}
        >
          <div className="w-3/4 px-5 lg:pr-5">
            <h3 className="text-cyan-50 text-sm sm:text-2xl md:text-3xl">
              Business Details
            </h3>
            <form onSubmit={onFormSubmitHandler}>
              <div className="my-5">
                <label
                  htmlFor="service-title"
                  className={`${styles.form_label} block mb-2  font-medium`}
                ></label>

                <span
                  className={`${styles.required_field} flex gap-2 items-center  absolute ml-3 mt-1 text-sm `}
                >
                  Business name (required){" "}
                  <a
                    className={styles.input_info}
                    href="#"
                    data-title="A catchy business name can help you get the right clients for your business"
                  >
                    <i className="fa-regular w-4 h-4 fa-circle-question"></i>
                  </a>
                </span>
                <input
                  type="text"
                  name="title"
                  id="email"
                  className={`${styles.form_input} ${
                    formError.field === "businessName" && styles.error_border
                  } text-sm block w-full  dark:text-white`}
                  placeholder="Deskzone"
                  onChange={onChangeBusinessName}
                  // value={serviceTitle.title}
                />
                <span className="absolute left-3/4  -mt-6 -ml-14 text-fuchsia-200 text-sm">
                  {expertApplicationState?.businessName?.length}/30
                </span>
              </div>

              <div className="mb-5">
                <BusinessDetails
                  onChangeAbout={onChangeAbout}
                  about={expertApplicationState.about}
                  formError={formError}
                />
              </div>
              <div className="w-full mt-10">
                <div className="w-full mb-14">
                  <BusinessLogo
                    selectedLogo={expertApplicationState.logo}
                    onSelectLogo={onSelectLogo}
                  />
                </div>

                <div className="w-full">
                  <BusinessCoverImage onSelectCoverImage={onSelectCoverImage} />
                </div>
              </div>

              <div className="my-5">
                <FormButton
                  isLoading={isLoading}
                  formIsValid={formIsValid}
                  textContent="Submit Application"
                />
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default ExpertApplicationForm;

import { useReducer, useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useCreateExpertMutation } from "../../lib/apis/expertApis";
import { getToken } from "../../helpers/firebase";
import Error from "../commons/Error";
import SuccessModal from "../commons/SuccessModal";
import ExpertApplicationProgress from "./ExpertApplicationProgress";
import BusinessLogo from "./BusinessLogo";
import BusinessCoverImage from "./BusinessCoverImage";
import { ModalContext } from "../../context/modal-context";
import { IExpertApplicationAction } from "../../interfaces/propsInterfaces";
import { IExpertApplicationState } from "../../interfaces/propsInterfaces";
import BusinessDetails from "./BusinessDetails";
import useFormValidation from "../../hooks/useFormValidation";
import FormButton from "../commons/FormButton";
import CloseFormModalBtn from "../commons/CloseFormModalBtn";
import styles from "./Expert.module.css";

interface IOnMoveNextEvent
  extends React.MouseEvent<HTMLButtonElement, MouseEvent> {}

const expertApplicationReducer = (
  state: IExpertApplicationState,
  action: IExpertApplicationAction
): IExpertApplicationState => {
  switch (action.type) {
    case "BUSINESS_NAME":
      return { ...state, businessName: action.payload };

    case "ABOUT_ME":
      return { ...state, about: action.payload };

    case "MOVE_NEXT":
      return {
        ...state,
        stage: state.stage + 1,
        percentage: Number(action.payload),
      };

    case "MOVE_PREV":
      return {
        ...state,
        stage: state.stage - 1,
        percentage: Number(action.payload),
      };

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

  const navigate = useNavigate();

  // modal context
  const modalCtx = useContext(ModalContext);

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
  const onChangeBusinessName = (businessName: string) => {
    dispatch({
      type: "BUSINESS_NAME",
      payload: businessName,
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

  // move to next stage function
  const onMoveNext = (event: IOnMoveNextEvent): void => {
    event.preventDefault();

    if (expertApplicationState.stage >= 3) {
      return;
    }

    dispatch({
      type: "MOVE_NEXT",
      payload: expertApplicationState.stage === 1 ? "50" : "100",
    });
  };

  // move to previous stage function
  const onMovePrev = (event: IOnMoveNextEvent): void => {
    event.preventDefault();

    if (expertApplicationState.stage <= 1) {
      return;
    }

    dispatch({
      type: "MOVE_PREV",
      payload: expertApplicationState.stage === 1 ? "100" : "50",
    });
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

    const token = await getToken();

    if (!token) {
      return console.log("token expired");
    }

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

    await createExpert({ expertData: formData, accessToken: token });
  };

  return (
    <>
      {isSuccess && <SuccessModal />}
      {!isSuccess && (
        <div
          className={`relative p-5 w-full max-w-4xl h-fit ${styles.auth_form_container}`}
        >
          <div className="relative rounded-lg shadow">
            <CloseFormModalBtn
              onToggleModal={() => {
                modalCtx.toggleModal("expert");
                navigate("/");
              }}
              formTitle="Apply to become an Expert"
            />

            <ExpertApplicationProgress
              progressStage={expertApplicationState.stage}
              percentageCompletion={expertApplicationState.percentage}
            />

            <div className="px-4 mt-10  md:px-5">
              {/* backend Api error */}
              {isError &&
                error &&
                "data" in error &&
                typeof error.data === "object" &&
                error.data !== null &&
                "message" in error.data &&
                (error.data as { message: string }).message
                  .split(":")
                  .map((msg, index) => (
                    <Error
                      key={index}
                      message={msg || "something went wrong"}
                    />
                  ))}

              <form
                className="space-y-4"
                action="#"
                onSubmit={onFormSubmitHandler}
              >
                {expertApplicationState?.stage === 1 && (
                  <BusinessDetails
                    onChangeAbout={onChangeAbout}
                    onChangeBusinessName={onChangeBusinessName}
                    businessName={expertApplicationState.businessName}
                    about={expertApplicationState.about}
                    formError={formError}
                  />
                )}
                {expertApplicationState?.stage === 2 && (
                  <BusinessLogo
                    onSelectLogo={onSelectLogo}
                    selectedLogo={expertApplicationState.logo}
                  />
                )}

                {expertApplicationState.stage === 3 && (
                  <BusinessCoverImage onSelectCoverImage={onSelectCoverImage} />
                )}

                {!formIsValid && (
                  <div className="flex justify-between items-center">
                    <button
                      type="submit"
                      className={` text-white  font-medium  text-sm px-5 py-2.5 text-center ${styles.form_btn} disabled:cursor-not-allowed`}
                      onClick={(event) => onMovePrev(event as IOnMoveNextEvent)}
                    >
                      Prev
                    </button>

                    <button
                      type="submit"
                      className={` text-white  font-medium  text-sm px-5 py-2.5 text-center ${styles.form_btn} disabled:cursor-not-allowed`}
                      onClick={(event) => onMoveNext(event as IOnMoveNextEvent)}
                    >
                      Next
                    </button>
                  </div>
                )}

                {formIsValid && (
                  <FormButton
                    isLoading={isLoading}
                    formIsValid={formIsValid}
                    textContent="Complete Application"
                  />
                )}
              </form>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default ExpertApplicationForm;

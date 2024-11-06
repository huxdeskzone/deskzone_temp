import { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import {
  useGetServiceCategoriesMutation,
  useCreateExpertServiceMutation,
} from "../../lib/apis/serviceApis";
import { useGetLoggedInExpertsMutation } from "../../lib/apis/expertApis";
import { getToken } from "../../helpers/firebase";
import ServiceVideoPreview from "./ServiceVideoPreveiw";
import ServiceDescription from "./ServiceDescprition";
import ImageCropModal from "./ImageCropModal";
import FileUploadSpinner from "./FileUploadSpinner";
import FormButton from "../commons/FormButton";
import SuccessModal from "../commons/SuccessModal";
import ErrorModal from "../commons/ErrorModal";

import Icon from "../commons/Icon";
import styles from "./Services.module.css";

interface FileInputEvent extends React.ChangeEvent<HTMLInputElement> {}

interface OnLoadFn {
  (dataURL: string | ArrayBuffer | null): void;
}

const CreateService: React.FC = () => {
  const [banner, setBanner] = useState<File | string>("");
  const [prevImage, setPrevImage] = useState("");
  const [prevVideo, setPrevVideo] = useState("");
  const [category, setCategory] = useState<string>("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState<string>("$");
  const [explaner_video, setExplanerVideo] = useState<File | string>("");
  const [bannerUploadIsLoading, setBannerUploadIsLoading] = useState(false);
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [errorModalIsOpen, setErrorModalIsOpen] = useState(false);
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 });
  const [serviceTitle, setServiceTitle] = useState({
    title: "",
    totalCharacter: 50,
  });

  // const modalCtx = useContext(ModalContext);

  const [uploadPercentage, setUploadPercentagage] = useState(0);

  const [inlineResult, setInlineResult] = useState<string>("");

  const navigate = useNavigate();

  const [getServiceCategories, { data }] = useGetServiceCategoriesMutation();
  const [getLoggedInExpert, { data: expertData }] =
    useGetLoggedInExpertsMutation();

  const [
    createExpertService,
    { isLoading, isSuccess, isError, data: serviceData, error },
  ] = useCreateExpertServiceMutation();

  useEffect(() => {
    if (isSuccess && serviceData) {
      setModalIsOpen(true);
    }
  }, [isSuccess, serviceData]);

  useEffect(() => {
    if (isError && error) {
      setErrorModalIsOpen(true);
    }
  }, [isError, error]);

  const timerRef = useRef<NodeJS.Timeout | null>(null);

  const onClickImageUpload = (event: React.MouseEvent<HTMLElement>) => {
    if (timerRef.current) {
      clearInterval(timerRef.current);
    }
    setUploadPercentagage(0);
    setPrevImage("");
    setBanner("");
    setInlineResult("");
    setBannerUploadIsLoading(false);
  };

  const onDeleteSelectedVideo = (event: React.MouseEvent<HTMLElement>) => {
    setPrevVideo("");
    setExplanerVideo("");
  };

  const incrementUploadPercentage = () => {
    setBannerUploadIsLoading(true);
    let max = 100;
    setUploadPercentagage((prev) => (prev === max ? prev : prev + 10));
  };

  useEffect(() => {
    const changeImageLoadingState = () => {
      if (uploadPercentage === 100) {
        setBannerUploadIsLoading(false);
      }
    };

    changeImageLoadingState();
  }, [uploadPercentage]);

  const onLoadFn: OnLoadFn = (dataURL) => {
    if (typeof dataURL === "string") {
      const type = atob(btoa(dataURL)).split(":")[1].split(";")[0];
      if (
        type !== "image/png" &&
        type !== "image/jpg" &&
        type !== "image/jpeg"
      ) {
        setPrevImage("");
        return;
      }

      timerRef.current = setInterval(() => {
        incrementUploadPercentage();
      }, 500);
      setPrevImage(dataURL);
    }
  };

  const onLoadVideoFn: OnLoadFn = (dataURL) => {
    if (typeof dataURL === "string") {
      const type = atob(btoa(dataURL)).split(":")[1].split(";")[0];
      if (type !== "video/mp4" && type !== "image/avi") {
        setPrevVideo("");
        return;
      }

      setPrevVideo(dataURL);
    }
  };

  const onSelectFile = (event: FileInputEvent): void => {
    if (event.target.files && event.target.files.length > 0) {
      const reader = new FileReader();
      reader.addEventListener("load", () => onLoadFn(reader.result));
      reader.readAsDataURL(event.target.files[0]);
      setBanner(event.target.files[0]);
    }
  };

  const onSelectVideoFile = (event: FileInputEvent): void => {
    if (event.target.files && event.target.files.length > 0) {
      const videoURL = URL.createObjectURL(event.target.files[0]); // Create a URL for the selected video
      const video = document.createElement("video"); // Create a temporary video element

      // Load metadata to get the video dimensions
      video.addEventListener("loadedmetadata", () => {
        setDimensions({
          width: video.videoWidth,
          height: video.videoHeight,
        });
        URL.revokeObjectURL(videoURL); // Free memory after loading metadata
      });

      video.src = videoURL; // Set the source of the video element

      const reader = new FileReader();
      reader.addEventListener("load", () => onLoadVideoFn(reader.result));
      reader.readAsDataURL(event.target.files[0]);
      setExplanerVideo(event.target.files[0]);
    }
  };

  // change service title function
  const changeServiceTitleHandler = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setServiceTitle({
      title: event.target.value,
      totalCharacter: 50,
    });
  };

  // get cropped image
  const onDoneCropping = (inlineResult: string) => {
    setInlineResult(inlineResult);
    setPrevImage("");
  };

  // get service description function
  const onChangeDescription = (description: string) => {
    return setDescription(description);
  };

  // get all service categories from api
  useEffect(() => {
    const onGetRequiredServiceData = async () => {
      const token = await getToken();

      if (token) {
        getServiceCategories(token);
      }
    };

    onGetRequiredServiceData();
  }, []);

  useEffect(() => {
    getLoggedInExpert(null);
  }, []);

  const onSubmitServiceData = async (event: React.FormEvent) => {
    event.preventDefault();
    const token = await getToken();
    if (token) {
      const formData = new FormData();

      formData.append("title", serviceTitle.title);
      formData.append("description", description);
      formData.append("lowest_acceptable_amount", price.slice(1));
      formData.append("thumbnail", banner);
      formData.append("explainer_video", explaner_video);
      formData.append("currency", "1");
      formData.append("years_of_experience", "4");
      formData.append("service_category", category);

      createExpertService({
        accessToken: token,
        serviceData: formData,
      });
    }
  };
  console.log(error);
  return (
    <>
      {modalIsOpen && (
        <SuccessModal
          message="Service Created Successfully"
          open={modalIsOpen}
          onCloseModal={() =>
            navigate(`/experts/${expertData?.data?.business_name}/products`)
          }
        />
      )}

      {errorModalIsOpen && (
        <ErrorModal
          message="Service creation failed"
          buttonText="Try Again"
          open={errorModalIsOpen}
          onCloseModal={() => setErrorModalIsOpen(false)}
        />
      )}

      <div className={`relative ${styles.service_details}`}>
        <div className={`${styles.close_container}  rounded-t`}>
          <div className={styles.service_intro}>
            <p className="md:text-3xl xl:text-4xl mb-1 text-lg">
              Post a service on DeskZone
            </p>
            <h1 className="text-xs  md:text-sm">
              We will help you earn good value from your skills.
            </h1>
          </div>
        </div>
        <div className={`${styles.service_form} flex justify-center`}>
          <div className="w-3/4 px-5 lg:pr-5">
            <h3 className="text-cyan-50 text-sm sm:text-2xl md:text-3xl">
              Service Details
            </h3>
            <form onSubmit={onSubmitServiceData}>
              <div className="my-5">
                <label
                  htmlFor="service-title"
                  className={`${styles.form_label} block mb-2  font-medium`}
                >
                  {/* Service Title */}
                </label>

                <span
                  className={`${styles.required_field} flex gap-2 items-center  absolute ml-3 mt-1 text-sm `}
                >
                  Title (required){" "}
                  <a
                    className={styles.input_info}
                    href="#"
                    data-title="A catchy title can help you get clients hook. When you create service titles, it’s a good idea to include keywords a client is likely to use when looking for services like yours."
                  >
                    <i className="fa-regular w-4 h-4 fa-circle-question"></i>
                  </a>
                </span>
                <input
                  type="text"
                  name="title"
                  id="email"
                  className={`${styles.form_input} ${
                    serviceTitle.title.length > 50 && styles.error_border
                  } text-sm block w-full  dark:text-white`}
                  placeholder="e-commerce website"
                  onChange={changeServiceTitleHandler}
                  value={serviceTitle.title}
                />
                <span className="absolute left-3/4  -mt-6 -ml-12 text-fuchsia-200 text-sm">
                  {serviceTitle?.title?.length}/{serviceTitle.totalCharacter}
                </span>
              </div>
              <div className="md:flex gap-5 mb-5 max-md:gap-9 sm:justify-between items-center">
                <div className="w-full">
                  <label
                    htmlFor="category"
                    className={`${styles.form_label} block mb-2  font-medium`}
                  >
                    {/* Category */}
                  </label>

                  <span
                    className={`${styles.required_field} flex gap-2 items-center  absolute ml-3 mt-1 text-sm `}
                  >
                    Category (required){" "}
                    <a
                      className={styles.input_info}
                      href="#"
                      data-title="Selecting the right category can help clients find your services easily. You can always change your category later."
                    >
                      <i className="fa-regular w-4 h-4 fa-circle-question"></i>
                    </a>
                  </span>
                  <select
                    id="countries"
                    className={`${styles.form_select} text-sm block w-full p-2.5  dark:text-white`}
                    onChange={(event) => setCategory(event.target.value)}
                  >
                    {data &&
                      data?.data.length > 0 &&
                      data?.data?.map((category: any) => {
                        return (
                          <option
                            key={category?.id}
                            selected
                            value={category.id}
                            className={styles.cat_options}
                          >
                            {category?.name}
                          </option>
                        );
                      })}
                  </select>
                </div>

                <div className="w-full">
                  <label
                    htmlFor="price"
                    className={`${styles.form_label} block mb-2  font-medium`}
                  >
                    {/* Price */}
                  </label>

                  <span
                    className={`${styles.required_field} flex gap-2 items-center  absolute ml-3 mt-1 text-sm `}
                  >
                    Price (required){" "}
                    <a
                      className={styles.input_info}
                      href="#"
                      data-title="Stating a considerable and competitive price can increase your chances for clients to buy your services. You can always adjust your price later."
                    >
                      <i className="fa-regular w-4 h-4 fa-circle-question"></i>
                    </a>
                  </span>
                  <input
                    type="text"
                    name="price"
                    id="email"
                    className={`${styles.form_input} text-sm block w-full p-2.5  dark:text-white`}
                    placeholder="400"
                    onChange={(event) => setPrice(event.target.value)}
                    value={price}
                  />
                </div>
              </div>
              <div className="mb-5">
                <label
                  htmlFor="service-title"
                  className={`${styles.form_label} block mb-2  font-medium`}
                >
                  Service Description
                </label>
                <ServiceDescription onChangeDescription={onChangeDescription} />
              </div>
              <div className="w-full mt-10">
                {/* image upload */}

                <div
                  className={`${styles.thrash}  relative flex justify-between px-3  gap-2 items-center  mt-1 text-sm`}
                >
                  {bannerUploadIsLoading && !inlineResult && (
                    <FileUploadSpinner />
                  )}
                </div>

                <div className="md:flex gap-4">
                  <label
                    htmlFor="thumbnail"
                    className={`${
                      inlineResult
                        ? "flex flex-col items-center justify-center"
                        : "flex justify-center items-center px-7"
                    }  w-full md:w-1/2 mb-5  h-48 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 dark:hover:bg-gray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600`}
                  >
                    <div className="w-full">
                      <div
                        className={`${styles.thrash} z-20 relative  px-3 -mb-6   mt-1 text-sm`}
                      >
                        {inlineResult && (
                          <Icon
                            iconClasses="fa-regular cursor-pointer fa-trash-can"
                            onClickIcon={onClickImageUpload}
                          />
                        )}
                      </div>

                      {uploadPercentage < 100 && (
                        <>
                          <svg
                            className="w-8 h-8 mb-4 text-gray-500 dark:text-gray-400"
                            aria-hidden="true"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 20 16"
                          >
                            <path
                              stroke="currentColor"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              stroke-width="2"
                              d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2"
                            />
                          </svg>
                          <p className="mb-2 text-sm text-gray-500 dark:text-gray-400">
                            <span className="font-semibold">
                              Click to upload
                            </span>{" "}
                            or drag and drop thumbnail
                          </p>
                          <p className="text-xs text-gray-500 dark:text-gray-400">
                            SVG, PNG, JPG or GIF
                          </p>

                          <input
                            id="thumbnail"
                            type="file"
                            className="hidden"
                            accept="image/x-png,image/jpeg"
                            onInput={onSelectFile}
                          />
                        </>
                      )}
                    </div>

                    {inlineResult && (
                      <div className="h-full">
                        <img
                          src={inlineResult}
                          alt="upload_image_preview"
                          className="w-fit h-full object-cover rounded-lg opacity-60"
                        />
                      </div>
                    )}
                  </label>

                  <label
                    htmlFor="dropzone-file"
                    className={`${
                      prevVideo
                        ? "flex flex-col items-center justify-center"
                        : "flex justify-center items-center px-7"
                    }  w-full md:w-1/2 mb-5  h-48 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50  dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600`}
                  >
                    <div className="w-full">
                      <div
                        className={`${styles.thrash} z-20 relative  px-3 -mb-6   mt-1 text-sm`}
                      >
                        {prevVideo && (
                          <Icon
                            iconClasses="fa-regular cursor-pointer fa-trash-can"
                            onClickIcon={onDeleteSelectedVideo}
                          />
                        )}
                      </div>

                      {!prevVideo && (
                        <>
                          <svg
                            className="w-8 h-8 mb-4 text-gray-500 dark:text-gray-400"
                            aria-hidden="true"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 20 16"
                          >
                            <path
                              stroke="currentColor"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              stroke-width="2"
                              d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2"
                            />
                          </svg>
                          <p className="mb-2 text-sm text-gray-500 dark:text-gray-400">
                            <span className="font-semibold">
                              Click to upload
                            </span>{" "}
                            or drag and drop video
                          </p>
                          <p className="text-xs text-gray-500 dark:text-gray-400">
                            MP4, AVI
                          </p>

                          <input
                            id="dropzone-file"
                            type="file"
                            className="hidden"
                            accept="vidoe/mp4"
                            onInput={onSelectVideoFile}
                            // onClick={onClickImageUpload}
                          />
                        </>
                      )}
                    </div>

                    {prevVideo && (
                      <div className="h-full">
                        <ServiceVideoPreview serviceVideo={prevVideo} />
                      </div>
                    )}
                  </label>
                </div>
              </div>

              {uploadPercentage >= 100 && (
                <ImageCropModal
                  prevImage={prevImage}
                  uploadPercentage={uploadPercentage}
                  onDoneCropping={onDoneCropping}
                />
              )}

              <div className="my-5">
                <FormButton
                  isLoading={isLoading}
                  formIsValid={true}
                  textContent="Create Service"
                />
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default CreateService;

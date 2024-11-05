import { useState } from "react";
import Icon from "../commons/Icon";
import styles from "./Expert.module.css";

interface IBusinessLogoProps {
  onSelectCoverImage: (coverImage: any) => void;
}
const BusinessCoverImage: React.FC<IBusinessLogoProps> = ({
  onSelectCoverImage,
}) => {
  const [prevImage, setPrevImage] = useState("");

  interface FileInputEvent extends React.ChangeEvent<HTMLInputElement> {}

  interface OnLoadFn {
    (dataURL: string | ArrayBuffer | null): void;
  }

  const onSelectFile = (event: FileInputEvent): void => {
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
          // return setErrorMessage("Invalid image format");
        }

        // setErrorMessage("");
        setPrevImage(dataURL);
      }
    };

    if (event.target.files && event.target.files.length > 0) {
      const reader = new FileReader();
      reader.addEventListener("load", () => onLoadFn(reader.result));
      reader.readAsDataURL(event.target.files[0]);
      onSelectCoverImage(event.target.files[0]);
    }
  };

  const onClearLogoImage = (
    event: React.MouseEvent<HTMLElement, MouseEvent>
  ) => {
    event.preventDefault();

    onSelectCoverImage(undefined);
    return setPrevImage("");
  };

  return (
    <>
      <div className="w-full">
        <div
          className={`${styles.thrash}  relative  px-3 -mb-6   mt-1 text-sm`}
        >
          {prevImage && (
            <Icon
              iconClasses="fa-regular cursor-pointer fa-trash-can"
              onClickIcon={onClearLogoImage}
            />
          )}
        </div>
        <label
          htmlFor="cover_image"
          className="flex  items-center justify-center w-full mb-5  h-48 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 dark:hover:bg-gray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600"
        >
          <div className="">
            {!prevImage && (
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
                  <span className="font-semibold">Click to upload</span> or drag
                  and drop thumbnail
                </p>
                <p className="text-xs text-gray-500 dark:text-gray-400">
                  SVG, PNG, JPG or GIF
                </p>

                <input
                  id="cover_image"
                  type="file"
                  className="hidden"
                  accept="image/x-png,image/jpeg"
                  onInput={onSelectFile}
                />
              </>
            )}
          </div>

          {prevImage && (
            <div className="h-full w-full">
              <img
                src={prevImage}
                alt="upload_image_preview"
                className="w-full h-full object-cover rounded-lg opacity-60"
              />
            </div>
          )}
        </label>
      </div>
    </>
  );
};

export default BusinessCoverImage;

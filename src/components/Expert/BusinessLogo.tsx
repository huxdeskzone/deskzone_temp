import { useState, useEffect } from "react";
import styles from "./Expert.module.css";

interface IBusinessLogoProps {
  onSelectLogo: (logo: any) => void;
  selectedLogo: any;
}
const BusinessLogo: React.FC<IBusinessLogoProps> = ({
  onSelectLogo,
  selectedLogo,
}) => {
  const [prevImage, setPrevImage] = useState("");

  interface FileInputEvent extends React.ChangeEvent<HTMLInputElement> {}

  interface OnLoadFn {
    (dataURL: string | ArrayBuffer | null): void;
  }

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

      setPrevImage(dataURL);
    }
  };

  const onSelectFile = (event: FileInputEvent): void => {
    if (event.target.files && event.target.files.length > 0) {
      const reader = new FileReader();
      reader.addEventListener("load", () => onLoadFn(reader.result));
      reader.readAsDataURL(event.target.files[0]);
      onSelectLogo(event.target.files[0]);
    }
  };

  const onClearLogoImage = (
    event: React.MouseEvent<HTMLAnchorElement, MouseEvent>
  ) => {
    event.preventDefault();

    return setPrevImage("");
  };

  useEffect(() => {
    if (selectedLogo) {
      const reader = new FileReader();
      reader.addEventListener("load", () => onLoadFn(reader.result));
      reader.readAsDataURL(selectedLogo);
      onSelectLogo(selectedLogo);
    }
  }, [selectedLogo]);

  return (
    <>
      {!prevImage ? (
        <div className="flex items-center justify-center w-full">
          <label
            htmlFor="dropzone-file"
            className="flex flex-col items-center justify-center w-full h-64 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 dark:hover:bg-gray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600"
          >
            <div className="flex flex-col items-center justify-center pt-5 pb-6">
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
                and drop
              </p>
              <p className="text-xs text-gray-500 dark:text-gray-400">
                SVG, PNG, JPG or GIF (MAX. 800x400px)
              </p>
            </div>
            <input
              id="dropzone-file"
              type="file"
              className="hidden"
              accept="image/x-png,image/jpeg"
              onInput={onSelectFile}
            />
          </label>
        </div>
      ) : (
        <div className="flex justify-center">
          <div>
            <a
              className={`${styles.change_btn} z-50`}
              href=""
              onClick={onClearLogoImage}
            >
              Change Logo
            </a>

            <img
              className="h-auto max-w-lg rounded-lg"
              src={prevImage}
              alt="image_description"
            />
          </div>
        </div>
      )}{" "}
    </>
  );
};

export default BusinessLogo;

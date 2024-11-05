import { PinturaEditor } from "@pqina/react-pintura";
import { getEditorDefaults } from "@pqina/pintura";
import "@pqina/pintura/pintura.css";

const ImageCropModal: React.FC<{
  prevImage: string;
  onDoneCropping: (inlineResult: string) => void;
  uploadPercentage: number;
}> = ({ prevImage, onDoneCropping, uploadPercentage }) => {
  return (
    <div
      id="static-modal"
      data-modal-backdrop="static"
      tabIndex={-1}
      aria-hidden="true"
      className={`${
        !prevImage && "hidden"
      } overflow-y-auto flex overflow-x-hidden fixed top-0 right-96 left-0 z-50 justify-center items-center w-full bg-black bg-opacity-50  md:inset-0 h-[calc(100%-1rem)] max-h-full`}
    >
      <div className="relative p-4 w-full max-w-2xl max-h-full">
        <div className="h-96" style={{ background: "black" }}>
          <PinturaEditor
            {...getEditorDefaults()}
            src={prevImage}
            onProcess={(res) => onDoneCropping(URL.createObjectURL(res.dest))}
          />
        </div>
      </div>
    </div>
  );
};

export default ImageCropModal;

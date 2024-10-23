import { useContext } from "react";
import { ModalContext } from "../../context/modal-context";
import ReactDOM from "react-dom";
import { IModalOverlayProps } from "../../interfaces/propsInterfaces";

const ExpertModalOverlay: React.FC<IModalOverlayProps> = ({ children }) => {
  const modalCtx = useContext(ModalContext);

  return ReactDOM.createPortal(
    <div
      // id="authentication-modal"
      tabIndex={-1}
      aria-hidden="true"
      className={`${
        !modalCtx.modal.isOpen && modalCtx.modal.type === "expert" && "hidden"
      }  ${
        modalCtx.modal.isOpen && "flex"
      } overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 justify-center items-center w-full  h-full bg-black bg-opacity-90`}
    >
      {children}
    </div>,
    document.getElementById("modal") as HTMLElement
  );
};

export default ExpertModalOverlay;

import { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { ModalContext } from "../../context/modal-context";
import ReactDOM from "react-dom";
import { IModalOverlayProps } from "../../interfaces/propsInterfaces";
import styles from "./Modal.module.css";

const ModalOverlay: React.FC<IModalOverlayProps> = ({ children }) => {
  const modalCtx = useContext(ModalContext);

  const navigate = useNavigate();

  const { user } = useSelector((state: any) => state.userState);

  useEffect(() => {
    if (user) {
      navigate("/");
    }
  }, []);

  return ReactDOM.createPortal(
    <div
      // id="authentication-modal"
      tabIndex={-1}
      aria-hidden="true"
      className={`${
        !modalCtx.modal.isOpen && modalCtx.modal.type === "auth" && "hidden"
      }  ${modalCtx.modal.isOpen && "flex"} ${
        styles.modal_overlay
      } overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 justify-center items-center w-full  h-full bg-black bg-opacity-90 `}
    >
      {children}
    </div>,
    document.getElementById("modal") as HTMLElement
  );
};

export default ModalOverlay;

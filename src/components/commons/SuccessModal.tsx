import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { ModalContext } from "../../context/modal-context";
import Icon from "./Icon";
import styles from "./SuccessModal.module.css";

const SuccessModal: React.FC = () => {
  const modalCtx = useContext(ModalContext);

  const navigate = useNavigate();

  const onCloseModal = () => {
    modalCtx.toggleModal("expert");
    navigate("/");
  };

  return (
    <div className={`${styles.modal_body} relative p-4 w-2/3 max-w-2xl h-fit`}>
      <div className="relative rounded-lg shadow px-10 text-center">
        <Icon iconClasses={`fa-solid fa-check ${styles.icon} text-2xl`} />
        <p className="my-5">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime
          mollitia, molestiae quas vel sint commodi
        </p>

        <button
          type="button"
          className={`${styles.modal_btn}`}
          onClick={onCloseModal}
        >
          OK
        </button>
      </div>
    </div>
  );
};

export default SuccessModal;

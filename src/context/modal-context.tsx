import { ReactNode, createContext, useContext, useState } from "react";
import { MessageContext } from "./message-context";

export const ModalContext = createContext({
  modal: { type: "", isOpen: false },
  toggleModal: (type: string) => {},
});

const ModalContextProvider = ({ children }: { children: ReactNode }) => {
  const [modal, setModal] = useState({ type: "", isOpen: false });

  const messageCtx = useContext(MessageContext);

  const toggleModal = (type: string) => {
    if (type === "auth") {
      if (modal.isOpen) {
        messageCtx.updateErrorMessage("", "");
        messageCtx.updateErrorMessage("", "");

        return setModal({ type, isOpen: false });
      }

      return setModal({ type, isOpen: true });
    }

    if (type === "expert") {
      if (modal.isOpen) {
        messageCtx.updateErrorMessage("", "");
        messageCtx.updateErrorMessage("", "");

        return setModal({ type, isOpen: false });
      }

      return setModal({ type, isOpen: true });
    }
  };

  const value = {
    modal,
    toggleModal,
  };

  return (
    <ModalContext.Provider value={value}>{children}</ModalContext.Provider>
  );
};

export default ModalContextProvider;

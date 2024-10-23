import { ReactNode, createContext, useState } from "react";

export const MessageContext = createContext({
  successMessage: { type: "", message: "" },
  errorMessage: { type: "", error: "" },
  updateErrorMessage: (type: string, error: string) => {},
  updateSuccessMessage: (type: string, message: string) => {},
});

const MessageContextProvider = ({ children }: { children: ReactNode }) => {
  const [errorMessage, setErrorMessage] = useState({ type: "", error: "" });
  const [successMessage, setSuccessMessage] = useState({
    type: "",
    message: "",
  });

  const updateErrorMessage = (type: string, error: string) => {
    const currentType = type.split("-")[0];
    if (currentType === "auth") {
      return setErrorMessage({ type, error });
    }
  };

  const updateSuccessMessage = (type: string, message: string) => {
    const currentType = type.split("-")[0];
    if (currentType === "auth") {
      return setSuccessMessage({ type, message });
    }
  };

  const value = {
    errorMessage,
    successMessage,
    updateErrorMessage,
    updateSuccessMessage,
  };

  return (
    <MessageContext.Provider value={value}>{children}</MessageContext.Provider>
  );
};

export default MessageContextProvider;

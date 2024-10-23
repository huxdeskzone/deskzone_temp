import { useState } from "react";
const useToggleModal = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    if (isOpen) {
      return setIsOpen(false);
    }

    return setIsOpen(true);
  };

  return [isOpen, toggle];
};

export default useToggleModal;

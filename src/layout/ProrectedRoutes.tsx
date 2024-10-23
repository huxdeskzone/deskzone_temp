import { useContext } from "react";
import { Navigate } from "react-router-dom";
import { ModalContext } from "../context/modal-context";
import { IProtectedRouteProps } from "../interfaces/propsInterfaces";

const ProtectedRoutes: React.FC<IProtectedRouteProps> = ({
  user,
  children,
}) => {
  const modalCtx = useContext(ModalContext);
  if (!user) {
    return (
      <>
        {!modalCtx.modal.isOpen && modalCtx.toggleModal("auth")}
        <Navigate to="/auth/login" replace />
      </>
    );
  }

  return children;
};

export default ProtectedRoutes;

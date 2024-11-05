// import { useContext } from "react";
import { Navigate } from "react-router-dom";
// import { ModalContext } from "../context/modal-context";
import { IProtectedRouteProps } from "../interfaces/propsInterfaces";

const ExpertRoutes: React.FC<IProtectedRouteProps> = ({ user, children }) => {
  //   const modalCtx = useContext(ModalContext);
  if (!user || user.role !== "expert") {
    return (
      <>
        <Navigate to="/" replace />
      </>
    );
  }

  return children;
};

export default ExpertRoutes;

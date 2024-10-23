import { Outlet } from "react-router-dom";
import ExpertServices from "../components/Dashboard/ExpertServices";

const HomePage: React.FC = () => {
  return (
    <>
      <Outlet />

      <ExpertServices />
    </>
  );
};

export default HomePage;

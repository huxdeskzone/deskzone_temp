import { Outlet } from "react-router-dom";
import TopExpertsDetails from "../components/TopExperts/TopExpertDetails";
const ExpertDetailsPage: React.FC = () => {
  return (
    <>
      <TopExpertsDetails />
      <Outlet />
    </>
  );
};

export default ExpertDetailsPage;

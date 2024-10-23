import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import TopExpertsProfileCover from "./TopExpertsProfileCover";
import { experts } from "../../lib/dummy_data/dummyData";

const TopExpertsDetails: React.FC = () => {
  interface Expert {
    id: number;
    name: string;
    imageUrl: any;
  }

  const [expertDetails, setExpertDetails] = useState<Expert | undefined>(
    undefined
  );
  const { name } = useParams();

  useEffect(() => {
    setExpertDetails(experts.find((expert: any) => expert.name === name));
  }, [name]);
  return (
    <>
      <TopExpertsProfileCover expertDetails={expertDetails} />
    </>
  );
};

export default TopExpertsDetails;

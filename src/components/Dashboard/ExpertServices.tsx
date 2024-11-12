import { useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import ExpertServiceCard from "./ExpertServiceCard";
import ServicesLoader from "../commons/ServicesLoader";
import { useGetAllExpertServicesMutation } from "../../lib/apis/serviceApis";
import ErrorPage from "../commons/ErrorPage";

const ExpertServices: React.FC = () => {
  const [searchParams] = useSearchParams();
  const category = searchParams.get("category");

  const [getAllExpertServices, { isLoading, error, data, isError }] =
    useGetAllExpertServicesMutation();

  useEffect(() => {
    getAllExpertServices(null);
  }, [category]);

  return (
    <>
      {isError && <ErrorPage />}
      {isLoading ? (
        <ServicesLoader />
      ) : (
        <section className="w-full my-5 px-4 pb-9 pt-5 md:px-6 md:pb-10 md:pt-6 lg:px-7 lg:pb-12 3xl:px-8 ">
          <div className="-z-10 grid grid-cols-1 lsm:grid-cols-2  md:grid-cols-2 smd:grid-cols-3 gap-5 xl:grid-cols-4 2xl:grid-cols-6 3xl:grid-cols-6 4xl:grid-cols-[repeat(auto-fill,minmax(300px,1fr))]">
            {data &&
              data?.data?.length > 0 &&
              data?.data?.map((service: any) => {
                return (
                  <ExpertServiceCard
                    businessLogo={service.expert_profile?.business_logo}
                    serviceVideo={service.explainer_video}
                    businessName={service.expert_profile?.business_name}
                    price={service.lowest_acceptable_amount}
                    servicePoster={service.thumbnail}
                    service={service.title}
                    key={service.id}
                    id={service.id}
                    category="Software Development"
                  />
                );
              })}
          </div>
        </section>
      )}
    </>
  );
};

export default ExpertServices;

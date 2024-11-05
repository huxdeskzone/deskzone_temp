import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import ExpertServiceCard from "./ExpertServiceCard";
import ServicesLoader from "../commons/ServicesLoader";
import { getAllServices } from "../../lib/apis/ServicesApis";
import { useGetAllExpertServicesMutation } from "../../lib/apis/serviceApis";
import { IServicesProps } from "../../interfaces/propsInterfaces";

const ExpertServices: React.FC = () => {
  const [services, setServices] = useState<IServicesProps[]>([]);

  const [searchParams] = useSearchParams();
  const category = searchParams.get("category");

  const [getAllExpertServices, { isLoading, error, data }] =
    useGetAllExpertServicesMutation();

  useEffect(() => {
    const result = getAllServices();
    setServices(result);

    getAllExpertServices(null);
  }, [category]);

  console.log(services);

  return (
    <>
      {isLoading ? (
        <ServicesLoader />
      ) : (
        <section className="w-full my-5 px-4 pb-9 pt-5 md:px-6 md:pb-10 md:pt-6 lg:px-7 lg:pb-12 3xl:px-8 ">
          <div className="-z-10 grid grid-cols-1 gap-2 sm:grid-cols-2 md:grid-cols-3 lg:gap-6 3xl:gap-7 xl:grid-cols-4 2xl:grid-cols-6 3xl:grid-cols-6 4xl:grid-cols-[repeat(auto-fill,minmax(300px,1fr))]">
            {services &&
              services.length > 0 &&
              services.map((service: any) => {
                return <ExpertServiceCard {...service} key={service.id} />;
              })}
          </div>
        </section>
      )}
    </>
  );
};

export default ExpertServices;

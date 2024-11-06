import { useState, useEffect } from "react";
import ExpertServiceCard from "../Dashboard/ExpertServiceCard";
import { getAllServices } from "../../lib/apis/ServicesApis";
import { IServicesProps } from "../../interfaces/propsInterfaces";

const ExpertProducts: React.FC = () => {
  const [services, setServices] = useState<IServicesProps[]>([]);

  useEffect(() => {
    const result = getAllServices();
    setServices(result);
  }, []);

  return (
    <div className="h-full my-6">
      <div className="flex h-full pt-6 focus:outline-none md:pt-8 lg:pt-10">
        <div className="w-full px-4 pb-9 pt-5 md:px-6 md:pb-10 md:pt-6 lg:px-7 lg:pb-12 3xl:px-8">
          <div className="-z-10 grid grid-cols-1  sm:grid-cols-2 md:grid-cols-3 gap-6 3xl:gap-7 xl:grid-cols-4 2xl:grid-cols-6 3xl:grid-cols-6 4xl:grid-cols-[repeat(auto-fill,minmax(300px,1fr))]">
            {services.map((service) => {
              return <ExpertServiceCard {...service} />;
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExpertProducts;

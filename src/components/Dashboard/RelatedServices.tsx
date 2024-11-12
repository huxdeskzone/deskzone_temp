import { useEffect } from "react";
import { Link } from "react-router-dom";
import { useGetAllExpertServicesMutation } from "../../lib/apis/serviceApis";
import RelatedServiceCard from "./RelatedServiceCard";
import styles from "./ExpertServices.module.css";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import ExpertServiceCard from "./ExpertServiceCard";

const responsive = {
  superLargeDesktop2: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 1536 },
    items: 6,
  },
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 1536, min: 1280 },
    items: 4,
  },
  desktop: {
    breakpoint: { max: 1279, min: 950 },
    items: 3,
  },
  tablet: {
    breakpoint: { max: 949, min: 600 },
    items: 2,
  },
  mobile: {
    breakpoint: { max: 599, min: 0 },
    items: 1,
  },
};

const RelatedServices: React.FC<{ services?: []; serviceName?: string }> = ({
  services,
  serviceName,
}) => {
  const [getAllExpertServices, { isLoading, error, data }] =
    useGetAllExpertServicesMutation();

  useEffect(() => {
    getAllExpertServices(null);
  }, []);

  return (
    <div className="mt-16">
      <div className="flex justify-between mb-2 mr-3">
        <h1
          className={`${styles.reco_text} mb-2 text-xs sm:text-base  text-cyan-50`}
        >
          Recommended Services
        </h1>
        <Link
          className={`${styles.reco_text2} mb-2 text-xs sm:text-1xl text-cyan-50`}
          to={`/services/related-service?=${serviceName}`}
        >
          View More
        </Link>
      </div>

      <Carousel
        responsive={responsive}
        infinite={true}
        ssr={true}
        itemClass="carousel-item-spacing"
        containerClass="carousel-container"
        removeArrowOnDeviceType={["mobile"]}
      >
        {services &&
          services?.length > 0 &&
          services?.map((service: any) => {
            return (
              <div style={{ cursor: "pointer", paddingTop: "10px" }}>
                <ExpertServiceCard
                  businessLogo={service?.expert_profile?.business_logo}
                  serviceVideo={service?.explainer_video}
                  businessName={service?.expert_profile?.business_name}
                  price={service?.lowest_acceptable_amount}
                  servicePoster={service?.thumbnail}
                  key={service.id}
                  id={service?.id}
                  service={service.title}
                />
              </div>
            );
          })}
      </Carousel>
    </div>
  );
};

export default RelatedServices;

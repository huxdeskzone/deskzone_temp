import { Link } from "react-router-dom";
import RelatedServiceCard from "./RelatedServiceCard";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";
import { relatedServices } from "../../lib/dummy_data/dummyData";
import styles from "./ExpertServices.module.css";
import "swiper/css";

const RelatedServices: React.FC<{ serviceName?: string }> = ({
  serviceName,
}) => {
  // const [services, setServices] = useState<IServicesProps[]>([]);

  // useEffect(() => {
  //   const result = getAllServices();
  //   setServices(result.filter((service) => service.service === serviceName));
  // }, []);

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
      <div className="flex  focus:outline-none">
        <div className="w-full ">
          <Swiper
            spaceBetween={20}
            modules={[Navigation, Pagination, Scrollbar, A11y]}
            loop={true}
            navigation
            slidesPerView={1}
            onSlideChange={() => {}}
            onSwiper={() => {}}
            breakpoints={{
              // when window width is >= 640px
              640: {
                slidesPerView: 1,
              },
              // when window width is >= 768px
              768: {
                slidesPerView: 2,
              },
              // when window width is >= 1024px
              1024: {
                slidesPerView: 4,
              },

              1400: {
                slidesPerView: 6,
              },
            }}
          >
            {relatedServices.map((service) => {
              return (
                <SwiperSlide>
                  <div style={{ cursor: "pointer", paddingTop: "10px" }}>
                    <RelatedServiceCard {...service} />
                  </div>
                </SwiperSlide>
              );
            })}
          </Swiper>
        </div>
      </div>
    </div>
  );
};

export default RelatedServices;

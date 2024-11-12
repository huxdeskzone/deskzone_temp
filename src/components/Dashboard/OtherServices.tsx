import { useNavigate } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";
import OtherServicePlayerPreview from "./OtherServicePlayerPreview";
import "swiper/css";

const OtherServices: React.FC<{
  businessName?: string;
  service?: string;
  serviceVideo?: string;
  servicePoster?: string;
}> = ({ businessName, service, serviceVideo, servicePoster }) => {
  const navigate = useNavigate();

  const onClickCard = () => {
    navigate(`/products/${service}`);
  };

  return (
    <div className="my-6">
      <h1 className="mb-3 text-cyan-50">
        More by{" "}
        <a href="">
          <span className="text-cyan-300 hover:text-cyan-50">
            {businessName}
          </span>
        </a>
      </h1>
      <Swiper
        spaceBetween={20}
        modules={[Navigation, Pagination, Scrollbar, A11y]}
        loop={true}
        navigation
        // pagination={{ clickable: true }}
        slidesPerView={4}
        onSlideChange={() => {}}
        onSwiper={() => {}}
      >
        <SwiperSlide>
          <div style={{ cursor: "pointer" }} onClick={onClickCard}>
            <OtherServicePlayerPreview
              serviceName={service || ""}
              serviceVideo={serviceVideo || ""}
              servicePoster={servicePoster}
            />
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div style={{ cursor: "pointer" }}>
            <OtherServicePlayerPreview
              serviceName={service || ""}
              serviceVideo={serviceVideo || ""}
              servicePoster={servicePoster}
            />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div style={{ cursor: "pointer" }}>
            <OtherServicePlayerPreview
              serviceName={service || ""}
              serviceVideo={serviceVideo || ""}
              servicePoster={servicePoster}
            />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div style={{ cursor: "pointer" }}>
            <OtherServicePlayerPreview
              serviceName={service || ""}
              serviceVideo={serviceVideo || ""}
              servicePoster={servicePoster}
            />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div style={{ cursor: "pointer" }}>
            <OtherServicePlayerPreview
              serviceName={service || ""}
              serviceVideo={serviceVideo || ""}
              servicePoster={servicePoster}
            />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div style={{ cursor: "pointer" }}>
            <OtherServicePlayerPreview
              serviceName={service || ""}
              serviceVideo={serviceVideo || ""}
              servicePoster={servicePoster}
            />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div style={{ cursor: "pointer" }}>
            <OtherServicePlayerPreview
              serviceName={service || ""}
              serviceVideo={serviceVideo || ""}
              servicePoster={servicePoster}
            />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div style={{ cursor: "pointer" }}>
            <OtherServicePlayerPreview
              serviceName={service || ""}
              serviceVideo={serviceVideo || ""}
              servicePoster={servicePoster}
            />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div style={{ cursor: "pointer" }}>
            <OtherServicePlayerPreview
              serviceName={service || ""}
              serviceVideo={serviceVideo || ""}
              servicePoster={servicePoster}
            />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div style={{ cursor: "pointer" }}>
            <OtherServicePlayerPreview
              serviceName={service || ""}
              serviceVideo={serviceVideo || ""}
              servicePoster={servicePoster}
            />
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default OtherServices;

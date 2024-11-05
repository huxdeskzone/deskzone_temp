import VideoPreview from "./VideoPreview";
import { IServicesProps } from "../../interfaces/propsInterfaces";
import ServiceInfo from "./ServiceInfo";
import styles from "./RelatedService.module.css";

const RelatedServiceCard: React.FC<IServicesProps> = ({
  businessLogo,
  businessName,
  id,
  price,
  service,
  servicePoster,
  serviceVideo,
}) => {
  return (
    <div
      className={`group relative aspect-[3/2] w-full justify-center ${styles.services_card}`}
    >
      {serviceVideo && (
        <VideoPreview
          serviceName={service}
          serviceVideo={serviceVideo}
          servicePoster={servicePoster}
        />
      )}

      <ServiceInfo
        businessLogo={businessLogo}
        businessName={businessName}
        price={price}
        service={service}
      />
    </div>
  );
};

export default RelatedServiceCard;

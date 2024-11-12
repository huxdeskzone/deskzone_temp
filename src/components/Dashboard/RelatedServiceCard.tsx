import RelatedServiceVideoPreview from "./RelatedServiceVideoPreview";
import { IServicesProps } from "../../interfaces/propsInterfaces";
import RelatedServiceInfo from "./RelatedServiceInfo";
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
        <RelatedServiceVideoPreview
          serviceName={service}
          serviceVideo={serviceVideo}
          servicePoster={servicePoster}
        />
      )}

      <RelatedServiceInfo
        businessLogo={businessLogo}
        businessName={businessName}
        price={price}
        service={service}
      />
    </div>
  );
};

export default RelatedServiceCard;

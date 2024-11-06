import { useState } from "react";
import VideoPreview from "./VideoPreview";
import ServiceWishListModal from "../Services/ServiceWishlistModal";
import { IServicesProps } from "../../interfaces/propsInterfaces";
import ServiceInfo from "./ServiceInfo";
import styles from "./ExpertServices.module.css";

const ExpertServiceCard: React.FC<IServicesProps> = ({
  businessLogo,
  businessName,
  id,
  price,
  service,
  servicePoster,
  serviceVideo,
}) => {
  const [wishListModalOpen, setWishListModalOpen] = useState(false);

  return (
    <div
      className={`group relative aspect-[3/2] w-full justify-center ${styles.services_card}`}
    >
      <ServiceWishListModal
        wishListModalOpen={wishListModalOpen}
        onShowWishList={() =>
          wishListModalOpen
            ? setWishListModalOpen(false)
            : setWishListModalOpen(true)
        }
        serviceId={id}
        service={service}
      />
      {serviceVideo && (
        <VideoPreview
          onShowWishList={() =>
            wishListModalOpen
              ? setWishListModalOpen(false)
              : setWishListModalOpen(true)
          }
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

export default ExpertServiceCard;

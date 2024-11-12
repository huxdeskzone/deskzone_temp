import { useState } from "react";
import { useLocation } from "react-router-dom";
import { useSelector } from "react-redux";
import VideoPreview from "./VideoPreview";
import ServiceWishListModal from "../Services/ServiceWishlistModal";
import { IServicesProps } from "../../interfaces/propsInterfaces";
import ServiceInfo from "./ServiceInfo";
import RelatedServiceInfoNew from "./RelatedServiceInfoNew";
import styles from "./ExpertServices.module.css";

const ExpertServiceCard: React.FC<IServicesProps> = ({
  businessLogo,
  businessName,
  id,
  price,
  service,
  servicePoster,
  serviceVideo,
  category,
}) => {
  const [wishListModalOpen, setWishListModalOpen] = useState(false);

  const location = useLocation();

  const { wishlist } = useSelector((state: any) => state.userWishlistState);

  const { pathname } = location;

  return (
    <div
      className={`group relative aspect-[3/2] w-full justify-center ${styles.services_card}`}
    >
      {!wishlist && (
        <ServiceWishListModal
          wishListModalOpen={wishListModalOpen}
          onShowWishList={() =>
            wishListModalOpen
              ? setWishListModalOpen(false)
              : setWishListModalOpen(true)
          }
          serviceId={id}
          service={service}
          category={category}
        />
      )}
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
          id={id}
        />
      )}

      {pathname === "/" ? (
        <ServiceInfo
          businessLogo={businessLogo}
          businessName={businessName}
          price={price}
          service={service}
          id={id}
        />
      ) : (
        <RelatedServiceInfoNew
          businessLogo={businessLogo}
          businessName={businessName}
          price={price}
          service={service}
          id={id}
        />
      )}
    </div>
  );
};

export default ExpertServiceCard;

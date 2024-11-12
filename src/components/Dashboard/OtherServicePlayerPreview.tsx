import { useRef } from "react";
import styles from "./OtherServicesPlayerPreview.module.css";

const OtherServicePlayerPreview: React.FC<{
  serviceName: string;
  serviceVideo: string;
  servicePoster?: string;
}> = ({ serviceName, serviceVideo }) => {
  const videoRef = useRef<HTMLVideoElement>(null);

  const stopVideo = () => {
    if (videoRef?.current) {
      videoRef.current?.pause();
    }
  };

  const playVideo = () => {
    if (videoRef?.current) {
      videoRef.current?.play();
    }
  };

  return (
    <div
      className={styles.container}
      onMouseOver={playVideo}
      onMouseLeave={stopVideo}
    >
      <video
        className={`${styles.videoPlayer1}`}
        ref={videoRef}
        src={serviceVideo}
        muted
      />
    </div>
  );
};

export default OtherServicePlayerPreview;

import { useRef, useState, useEffect } from "react";
import { IconContext } from "react-icons";
import { BiPlay, BiPause } from "react-icons/bi";
import { RiVolumeMuteLine } from "react-icons/ri";
import { AiOutlineMuted } from "react-icons/ai";
import { FaRegStar } from "react-icons/fa";
import { FaStar } from "react-icons/fa";
import { CiHeart } from "react-icons/ci";
import styles from "./VideoPreview.module.css";

const VideoPreview: React.FC<{
  serviceName?: string;
  serviceVideo?: string;
  servicePoster?: string;
}> = ({ serviceVideo, servicePoster }) => {
  const videoRef = useRef<HTMLVideoElement>(null);

  const [isPlaying, setIsPlaying] = useState(false);

  const [isMuted, setIsMuted] = useState(true);

  const [currentTimeSec, setCurrentTimeSec] = useState<number>(0);
  const [durationSec, setDurationSec] = useState<number>(0);

  useEffect(() => {
    let interval: NodeJS.Timeout;
    if (videoRef.current) {
      const { duration } = videoRef.current;

      if (!isNaN(duration)) {
        setDurationSec(duration);
      }

      interval = setInterval(() => {
        if (videoRef.current && !isNaN(videoRef.current.currentTime)) {
          const { currentTime } = videoRef.current;
          setCurrentTimeSec(currentTime);
        }
      }, 1000);
    }
    return () => clearInterval(interval);
  }, [isPlaying, currentTimeSec]);

  const stopVideo = () => {
    if (videoRef?.current) {
      videoRef.current?.pause();
      setIsPlaying(false);
    }
  };

  const playVideo = () => {
    if (videoRef?.current) {
      videoRef.current?.play();
      setIsPlaying(true);
    }
  };

  const handleMuteToggle = () => {
    if (videoRef.current) {
      videoRef.current.muted = !isMuted;
      setIsMuted(!isMuted);
    }
  };

  return (
    <div
      className={styles.container}
      onMouseOver={playVideo}
      onMouseLeave={stopVideo}
    >
      <div className={styles.controls2}>
        <div className="absolute">
          {isPlaying && isMuted && (
            <button
              className={styles.controlButton2}
              onClick={handleMuteToggle}
            >
              <IconContext.Provider value={{ color: "white", size: "1.2em" }}>
                <RiVolumeMuteLine />
              </IconContext.Provider>
            </button>
          )}
        </div>
        <div className="absolute">
          {isPlaying && !isMuted && (
            <button
              className={styles.controlButton2}
              onClick={handleMuteToggle}
            >
              <IconContext.Provider value={{ color: "white", size: "1.2em" }}>
                <AiOutlineMuted />
              </IconContext.Provider>
            </button>
          )}
        </div>

        <button className={styles.controlButton3} onClick={stopVideo}>
          <IconContext.Provider value={{ color: "white", size: "1.3em" }}>
            <CiHeart />
          </IconContext.Provider>
        </button>
      </div>
      {!isPlaying && (
        <img
          alt={`deskzone  service poster`}
          loading="lazy"
          decoding="async"
          data-nimg="fill"
          className={`${styles.thumbnail} shadow-lg object-cover w-full h-full`}
          src={servicePoster}
        />
      )}

      <video
        className={`${styles.videoPlayer}  object-cover w-full h-full`}
        ref={videoRef}
        src={serviceVideo}
        muted={isMuted}
      />

      <div className={styles.controls}>
        {isPlaying ? (
          <button className={styles.controlButton} onClick={stopVideo}>
            <IconContext.Provider value={{ color: "white", size: "1.3em" }}>
              <BiPause />
            </IconContext.Provider>
          </button>
        ) : (
          <button className={styles.controlButton} onClick={playVideo}>
            <IconContext.Provider value={{ color: "white", size: "1.3em" }}>
              <BiPlay />
            </IconContext.Provider>
          </button>
        )}

        <button className={`${styles.star} flex gap-1 items-center`}>
          <IconContext.Provider value={{ color: "white", size: "0.8em" }}>
            <FaStar />
          </IconContext.Provider>
          <span className="text-cyan-50">3.5</span>
        </button>
      </div>
    </div>
  );
};

export default VideoPreview;

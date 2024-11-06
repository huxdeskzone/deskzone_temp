import { useRef, useState, useEffect } from "react";
import { IconContext } from "react-icons";
import { BiPlay, BiPause } from "react-icons/bi";
import { RiVolumeMuteLine } from "react-icons/ri";
import { AiOutlineMuted } from "react-icons/ai";
// import { FaRegStar } from "react-icons/fa";
import { FaStar } from "react-icons/fa";
import { CiHeart } from "react-icons/ci";
import styles from "./VideoPreview.module.css";

const VideoPreview: React.FC<{
  serviceName?: string;
  serviceVideo?: string;
  servicePoster?: string;
  onShowWishList?: () => void;
}> = ({ serviceVideo, servicePoster, onShowWishList }) => {
  const videoRef = useRef<HTMLVideoElement>(null);

  const timerRef = useRef<NodeJS.Timeout | null>(null);

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
      // if (timerRef.current) {
      //   clearTimeout(timerRef.current);
      // }
    }
  };

  const playVideo = () => {
    if (videoRef?.current) {
      // timerRef.current = setTimeout(() => {

      // }, 500);
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

  const handlePlay = () => {
    if (isPlaying) {
      videoRef.current?.pause();
      setIsPlaying(false);
    } else {
      videoRef.current?.play();
      setIsPlaying(true);
    }
  };

  return (
    <div
      tabIndex={0}
      className={styles.container}
      // onMouseEnter={playVideo}
      onMouseOver={playVideo}
      onMouseLeave={stopVideo}
    >
      <div className={styles.controls2}>
        <div className="absolute">
          {isPlaying && isMuted && (
            <button
              className={`${styles.controlButton2} `}
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

        <button
          className={`${styles.controlButton3} relative hover:transform hover:scale-110`}
          onClick={onShowWishList}
        >
          <IconContext.Provider value={{ color: "white", size: "1.5em" }}>
            <CiHeart />
          </IconContext.Provider>
        </button>
      </div>

      <img
        alt={`deskzone  service poster`}
        loading="lazy"
        decoding="async"
        data-nimg="fill"
        className={`${styles.thumbnail} ${
          isPlaying && "hidden ease-in-out duration-1000"
        } shadow-lg object-cover w-full h-full`}
        src={servicePoster}
      />

      <video
        className={`${styles.videoPlayer}  object-cover w-full h-full`}
        ref={videoRef}
        src={serviceVideo}
        muted={isMuted}
      />

      <div className={styles.controls}>
        {isPlaying ? (
          <button className={styles.controlButton} onClick={handlePlay}>
            <IconContext.Provider value={{ color: "white", size: "1.3em" }}>
              <BiPause />
            </IconContext.Provider>
          </button>
        ) : (
          <button className={styles.controlButton} onClick={handlePlay}>
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

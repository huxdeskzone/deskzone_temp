import { useEffect, useRef, useState } from "react";
import { IconContext } from "react-icons";
import { BiPlay, BiSkipNext, BiSkipPrevious, BiPause } from "react-icons/bi";
import styles from "./Services.module.css";

const ServiceVideoPreview: React.FC<{ serviceVideo: string }> = ({
  serviceVideo,
}) => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState([0, 0]);
  const [currentTimeSec, setCurrentTimeSec] = useState<number>(0);
  const [duration, setDuration] = useState([0, 0]);
  const [durationSec, setDurationSec] = useState<number>(0);

  const sec2Min = (sec: number): [number, number] => {
    const min = Math.floor(sec / 60);
    const secRemain = Math.floor(sec % 60);
    return [min, secRemain];
  };

  useEffect(() => {
    let interval: NodeJS.Timeout;
    if (videoRef.current) {
      const { duration } = videoRef.current;

      if (!isNaN(duration)) {
        const [min, sec] = sec2Min(duration);
        setDurationSec(duration);
        setDuration([min, sec]);
      }

      interval = setInterval(() => {
        if (videoRef.current && !isNaN(videoRef.current.currentTime)) {
          const { currentTime } = videoRef.current;
          const [min, sec] = sec2Min(currentTime);
          setCurrentTimeSec(currentTime);
          setCurrentTime([min, sec]);
        }
      }, 1000);
    }
    return () => clearInterval(interval);
  }, [isPlaying, currentTimeSec]);

  const handlePlay = (event: React.MouseEvent<HTMLAnchorElement>) => {
    event.preventDefault();
    if (isPlaying) {
      videoRef.current?.pause();
      setIsPlaying(false);
    } else {
      videoRef.current?.play();
      setIsPlaying(true);
    }
  };

  //   const handleTimelineChange = (e: React.ChangeEvent<HTMLInputElement>) => {
  //     const newTime = parseFloat(e.target.value);
  //     if (videoRef.current) {
  //       videoRef.current.currentTime = newTime;
  //       setCurrentTimeSec(newTime);
  //     }
  //   };

  return (
    <div className={`${styles.container}`}>
      <div className={`${styles.playerContainer} max-w-full`}>
        <video
          className={`${styles.videoPlayer} h-fit `}
          ref={videoRef}
          src={serviceVideo}
          style={{ maxHeight: "187px", width: "100%" }}
        />

        {videoRef?.current && (
          <div className={styles.controlsContainer}>
            <div className={styles.controls}>
              <IconContext.Provider value={{ color: "white", size: "2em" }}>
                <BiSkipPrevious />
              </IconContext.Provider>
              {isPlaying ? (
                <a
                  href=""
                  className={styles.controlButton}
                  onClick={handlePlay}
                >
                  <IconContext.Provider value={{ color: "white", size: "2em" }}>
                    <BiPause />
                  </IconContext.Provider>
                </a>
              ) : (
                <a
                  href=""
                  className={styles.controlButton}
                  onClick={handlePlay}
                >
                  <IconContext.Provider value={{ color: "white", size: "2em" }}>
                    <BiPlay />
                  </IconContext.Provider>
                </a>
              )}
              <IconContext.Provider value={{ color: "white", size: "2em" }}>
                <BiSkipNext />
              </IconContext.Provider>
              <div className={styles.duration}>
                {currentTime[0].toString().padStart(2, "0")}:
                {currentTime[1].toString().padStart(2, "0")} /
                {duration[0].toString().padStart(2, "0")}:
                {duration[1].toString().padStart(2, "0")}
              </div>
            </div>
            {/* <input
              type="range"
              min="0"
              max={durationSec}
              value={currentTimeSec}
              className={styles.timeline}
              onChange={handleTimelineChange}
            /> */}
          </div>
        )}
      </div>
    </div>
  );
};

export default ServiceVideoPreview;

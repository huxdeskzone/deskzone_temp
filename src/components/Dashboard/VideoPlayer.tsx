import { useEffect, useRef, useState } from "react";
import { IconContext } from "react-icons";
import { RiVolumeMuteLine } from "react-icons/ri";
import { AiOutlineMuted } from "react-icons/ai";
import { BiPlay, BiPause } from "react-icons/bi";
import styles from "./Videoplayer.module.css";
const VideoPlayer: React.FC<{ serviceVideo: string }> = ({ serviceVideo }) => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState([0, 0]);
  const [currentTimeSec, setCurrentTimeSec] = useState<number>(0);
  const [duration, setDuration] = useState([0, 0]);
  const [durationSec, setDurationSec] = useState<number>(0);
  const [isMuted, setIsMuted] = useState(false);

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

  const handlePlay = () => {
    if (isPlaying) {
      videoRef.current?.pause();
      setIsPlaying(false);
    } else {
      videoRef.current?.play();
      setIsPlaying(true);
    }
  };

  const handleTimelineChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newTime = parseFloat(e.target.value);
    if (videoRef.current) {
      videoRef.current.currentTime = newTime;
      setCurrentTimeSec(newTime);
    }
  };

  const handleMuteToggle = () => {
    if (videoRef.current) {
      videoRef.current.muted = !isMuted;
      setIsMuted(!isMuted);
    }
  };

  return (
    <div className={styles.container}>
      <div className={styles.playerContainer}>
        <video
          className={styles.videoPlayer}
          ref={videoRef}
          src={serviceVideo}
        />

        {videoRef?.current && (
          <div className={styles.controlsContainer}>
            <div className={`${styles.timeline_container} -mt-12 mx-auto`}>
              <input
                type="range"
                min="0"
                max={durationSec}
                value={currentTimeSec}
                className={styles.timeline}
                onChange={handleTimelineChange}
              />
            </div>
            <div className={styles.controls}>
              {isPlaying ? (
                <button className={styles.controlButton} onClick={handlePlay}>
                  <IconContext.Provider
                    value={{ color: "white", size: "1.5em" }}
                  >
                    <BiPause />
                  </IconContext.Provider>
                </button>
              ) : (
                <button className={styles.controlButton} onClick={handlePlay}>
                  <IconContext.Provider
                    value={{ color: "white", size: "1.5em" }}
                  >
                    <BiPlay />
                  </IconContext.Provider>
                </button>
              )}

              {isMuted && (
                <button
                  className={styles.controlButton2}
                  onClick={handleMuteToggle}
                >
                  <IconContext.Provider
                    value={{ color: "white", size: "1.2em" }}
                  >
                    <RiVolumeMuteLine />
                  </IconContext.Provider>
                </button>
              )}

              {!isMuted && (
                <button
                  className={styles.controlButton2}
                  onClick={handleMuteToggle}
                >
                  <IconContext.Provider
                    value={{ color: "white", size: "1.2em" }}
                  >
                    <AiOutlineMuted />
                  </IconContext.Provider>
                </button>
              )}

              <div className={styles.duration}>
                {currentTime[0].toString().padStart(2, "0")}:
                {currentTime[1].toString().padStart(2, "0")} /{" "}
                {duration[0].toString().padStart(2, "0")}:
                {duration[1].toString().padStart(2, "0")}
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default VideoPlayer;

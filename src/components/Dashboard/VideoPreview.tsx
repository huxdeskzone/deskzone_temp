import { useRef, useState, useEffect, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { IconContext } from "react-icons";
import { BiPlay, BiPause } from "react-icons/bi";
import { RiVolumeMuteLine } from "react-icons/ri";
import { AiOutlineMuted } from "react-icons/ai";
import { FaStar, FaHeart } from "react-icons/fa";
import { CiHeart } from "react-icons/ci";
import Spinner from "../commons/Spinner";
import {
  useAddItemToWishListMutation,
  useDeleteItemFromWishlistMutation,
  useGetLoggedinUserWishlistMutation,
} from "../../lib/apis/wishlistApi";
import { ModalContext } from "../../context/modal-context";
import styles from "./VideoPreview.module.css";

const VideoPreview: React.FC<{
  serviceName?: string;
  serviceVideo?: string;
  servicePoster?: string;
  id?: string;
  onShowWishList?: () => void;
}> = ({ serviceVideo, servicePoster, onShowWishList, serviceName, id }) => {
  const [currentTimeSec, setCurrentTimeSec] = useState<number>(0);
  const [durationSec, setDurationSec] = useState<number>(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(true);
  const videoRef = useRef<HTMLVideoElement>(null);
  const timerRef = useRef<NodeJS.Timeout | null>(null);
  const [showVoiceIcon, setShowVoiceIcon] = useState(false);
  const [itemIsOnWishlist2, setItemIsOnWishlist] = useState(false);
  const [wishlistId, setWishlistId] = useState<string | null>(null);

  const navigate = useNavigate();

  const [
    addToWishList,
    { isSuccess: addWishlistSuccess, isLoading: addWishlistLoading },
  ] = useAddItemToWishListMutation();

  const [deleteItemFromWishlist, { error, isLoading, isSuccess }] =
    useDeleteItemFromWishlistMutation();

  const [getLoggedinUserWishlist] = useGetLoggedinUserWishlistMutation();

  const modalCtx = useContext(ModalContext);

  const { user } = useSelector((state: any) => state.userState);
  const { wishlist } = useSelector((state: any) => state.userWishlistState);

  useEffect(() => {
    if (user) {
      getLoggedinUserWishlist(null);
    }
  }, [isSuccess, addWishlistSuccess]);

  useEffect(() => {
    if (wishlist && wishlist.length > 0) {
      const serviceWithIdExistOnWishlist = wishlist.find(
        (item: any) => item.expertService.id === id
      );

      if (serviceWithIdExistOnWishlist) {
        setItemIsOnWishlist(true);
      } else {
        setItemIsOnWishlist(false);
      }

      if (serviceWithIdExistOnWishlist) {
        setWishlistId(serviceWithIdExistOnWishlist.id);
      }
    } else {
      setItemIsOnWishlist(false);
    }
  }, [isSuccess, wishlist]);

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

  const naviagateUser = () => {
    modalCtx.toggleModal("auth");
    navigate("/auth/login");
  };

  const navigateToServiceDetailsPage = () => {
    navigate(`/products/${id}`);
  };

  const onAddItemToWishList = async () => {
    await addToWishList({
      name: wishlist[0].wishListCategory.name,
      serviceId: id,
    });
  };

  const onDeleteItemFromWishlist = async (wishlistId: string) => {
    await deleteItemFromWishlist(wishlistId);
  };

  return (
    <div
      tabIndex={0}
      className={styles.container}
      onMouseOver={() => setShowVoiceIcon(true)}
      onMouseLeave={() => setShowVoiceIcon(false)}
    >
      <div className={styles.controls2}>
        <div className="absolute">
          {showVoiceIcon && isMuted && (
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
          {showVoiceIcon && !isMuted && (
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

        {!itemIsOnWishlist2 ? (
          <>
            {!wishlist && (
              <button
                className={`${styles.controlButton3} relative hover:transform hover:scale-110`}
                onClick={() =>
                  user && onShowWishList ? onShowWishList() : naviagateUser()
                }
              >
                <IconContext.Provider value={{ color: "white", size: "1.5em" }}>
                  <CiHeart />
                </IconContext.Provider>
              </button>
            )}

            {wishlist && wishlist.length > 0 && (
              <button
                className={`${styles.controlButton3} relative hover:transform hover:scale-110`}
                onClick={() => onAddItemToWishList()}
              >
                <IconContext.Provider value={{ color: "white", size: "1.5em" }}>
                  {addWishlistLoading ? <Spinner /> : <CiHeart />}
                </IconContext.Provider>
              </button>
            )}
          </>
        ) : (
          <button
            className={`${styles.controlButton4} relative hover:transform hover:scale-110`}
            onClick={() =>
              user && wishlistId && onDeleteItemFromWishlist(wishlistId)
            }
          >
            {isLoading ? (
              <Spinner />
            ) : (
              <IconContext.Provider value={{ color: "#e00241", size: "1.5em" }}>
                <FaHeart />
              </IconContext.Provider>
            )}
          </button>
        )}
      </div>

      <img
        alt={`deskzone  service poster`}
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
            <IconContext.Provider value={{ color: "white", size: "1.9em" }}>
              <BiPause />
            </IconContext.Provider>
          </button>
        ) : (
          <button className={styles.controlButton} onClick={handlePlay}>
            <IconContext.Provider value={{ color: "white", size: "1.9em" }}>
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
      <div
        onMouseOver={playVideo}
        onMouseLeave={stopVideo}
        className={styles.preview_player}
        onClick={navigateToServiceDetailsPage}
      ></div>
    </div>
  );
};

export default VideoPreview;

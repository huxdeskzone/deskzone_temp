import { useState, useEffect } from "react";
import { Link, useSearchParams } from "react-router-dom";
import { freelanceSkills } from "../lib/dummy_data/dummyData";
import useCarousel from "../hooks/useCarousel";
import styles from "./ExpertServicesFilterTab.module.css";

const ExpertServicesFilterTab = () => {
  const {
    handleMouseDown,
    handleTouchStart,
    handleTouchMove,
    movePrev,
    moveNext,
    isDisabled,
    carousel,
    isMobile,
  } = useCarousel(freelanceSkills.length);

  const [category, setCategory] = useState<string | null>("");

  const [searchParam] = useSearchParams();

  useEffect(() => {
    const catQuery = searchParam.get("category");
    setCategory(catQuery || "All");
  }, [category, searchParam]);

  return (
    <div
      className={`${styles.carousel}`}
      onMouseDown={handleMouseDown}
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
    >
      <div className="relative overflow-hidden">
        <div
          className={`flex justify-between absolute pt-1 items-center w-full ${
            isMobile && "hidden"
          }`}
        >
          <button
            onClick={movePrev}
            className={` text-white ml-3 w-10 h-full text-center opacity-75 hover:opacity-100 disabled:opacity-25 disabled:cursor-not-allowed z-10 p-0 m-0 transition-all ease-in-out duration-300`}
            disabled={isDisabled("prev")}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15 19l-7-7 7-7"
              />
            </svg>
            <span className="sr-only">Prev</span>
          </button>
          <button
            onClick={moveNext}
            className="text-white w-10 h-full text-center opacity-75 hover:opacity-100 disabled:opacity-25 disabled:cursor-not-allowed z-10 p-0 m-0 transition-all ease-in-out duration-300"
            disabled={isDisabled("next")}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 ml-2"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M9 5l7 7-7 7"
              />
            </svg>
            <span className="sr-only">Next</span>
          </button>
        </div>

        <div
          ref={carousel}
          className={`${styles.carousel_items}  relative flex gap-2 overflow-hidden scroll-smooth snap-x snap-mandatory touch-pan-x z-0`}
        >
          {freelanceSkills.map((skill, index) => {
            return (
              <Link
                to={`/?category=${skill}`}
                className={`${styles.skill} ${
                  skill === category && styles.current_skill
                }`}
                key={index}
              >
                {skill}
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default ExpertServicesFilterTab;

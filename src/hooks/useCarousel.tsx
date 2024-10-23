import { useState, useRef, useEffect } from "react";
import { isMobile } from "react-device-detect";

const useCarousel = (skillsLength: number) => {
  const maxScrollWidth = useRef(0);
  const [currentIndex, setCurrentIndex] = useState(0);
  const carousel = useRef<HTMLDivElement>(null);

  const startX = useRef(0);

  // Move to the previous or next item based on  swipe direction
  const moveCarousel = (direction: "left" | "right") => {
    if (direction === "left" && currentIndex < skillsLength - 1) {
      setCurrentIndex((prevIndex) => prevIndex + 1);
    } else if (direction === "right" && currentIndex > 0) {
      setCurrentIndex((prevIndex) => prevIndex - 1);
    }
  };

  // thumb touch for mobile screens
  const handleTouchStart = (e: React.TouchEvent<HTMLDivElement>) => {
    startX.current = e.targetTouches[0].clientX;
  };

  // thumb swipe for mobile screens
  const handleTouchMove = (e: React.TouchEvent<HTMLDivElement>) => {
    const deltaX = e.touches[0].clientX - startX.current;

    // Trigger carousel move if swipe distance is significant
    if (Math.abs(deltaX) > 50) {
      const direction = deltaX > 0 ? "right" : "left";
      moveCarousel(direction);
    }
  };

  // mouse drag of large screens
  const handleMouseDown = (e: React.MouseEvent<HTMLDivElement>) => {
    startX.current = e.clientX;
    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mouseup", handleMouseUp);
  };

  // mouse swipe for
  const handleMouseMove = (e: MouseEvent) => {
    const deltaX = e.clientX - startX.current;

    // Trigger carousel move if swipe distance is significant
    if (Math.abs(deltaX) > 50) {
      const direction = deltaX > 0 ? "right" : "left";
      moveCarousel(direction);

      // Remove listeners after swipe
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseup", handleMouseUp);
    }
  };

  // mouse swipe stop
  const handleMouseUp = () => {
    // Remove listeners if mouse is released without a swipe
    window.removeEventListener("mousemove", handleMouseMove);
    window.removeEventListener("mouseup", handleMouseUp);
  };

  // swipe carousel left with carousel button
  const movePrev = () => {
    if (currentIndex > 0) {
      setCurrentIndex((prevState) => prevState - 1);
    }
  };

  // swipe carousel right with carousel button
  const moveNext = () => {
    if (
      carousel.current !== null &&
      carousel.current.offsetWidth * currentIndex <= maxScrollWidth.current
    ) {
      setCurrentIndex((prevState) => prevState + 1);
    }
  };

  // check if carousel is at the start or end
  const isDisabled = (direction: string) => {
    if (direction === "prev") {
      return currentIndex <= 0;
    }

    if (direction === "next" && carousel.current !== null) {
      return (
        carousel.current.offsetWidth * currentIndex >= maxScrollWidth.current
      );
    }

    return false;
  };

  useEffect(() => {
    if (carousel !== null && carousel.current !== null) {
      carousel.current.scrollLeft = carousel.current.offsetWidth * currentIndex;
    }
  }, [currentIndex]);

  useEffect(() => {
    maxScrollWidth.current = carousel.current
      ? carousel.current.scrollWidth - carousel.current.offsetWidth
      : 0;
  }, []);

  return {
    movePrev,
    moveNext,
    handleMouseDown,
    handleTouchStart,
    handleTouchMove,
    carousel,
    isDisabled,
    isMobile,
  };
};

export default useCarousel;

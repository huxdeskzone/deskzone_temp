import { useEffect, useState } from "react";
import { isMobile } from "react-device-detect";

const useScrolling = () => {
  const [isScrolling, setIsScrolling] = useState(false);

  useEffect(() => {
    let scrollTimeout: any;

    const handleScroll = () => {
      // When scrolling starts, set isScrolling to true
      setIsScrolling(true);

      // Clear the previous timeout
      if (scrollTimeout) clearTimeout(scrollTimeout);

      // Set a timeout to detect when scrolling stops
      scrollTimeout = setTimeout(() => {
        setIsScrolling(false);
      }, 400); // Adjust the delay as needed
    };

    if (isMobile) {
      // Add scroll event listener
      window.addEventListener("scroll", handleScroll);

      // Clean up the event listener on component unmount
      return () => {
        window.removeEventListener("scroll", handleScroll);
        clearTimeout(scrollTimeout);
      };
    }
  }, []);

  return [isScrolling];
};

export default useScrolling;

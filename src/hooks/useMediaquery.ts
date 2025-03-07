"use client";
import { useState, useEffect } from "react";

const useMediaQuery = (type: "desktop" | "mobile" | "tablet") => {
  const [matches, setMatches] = useState(false);

  useEffect(() => {
    const checkDeviceMatch = () => {
      const isMobile = window.innerWidth > 300 && window.innerWidth < 1366;
      const isDesktop = window.innerWidth > 1366;

      if (type === "mobile") {
        setMatches(isMobile);
      } else if (type === "desktop") {
        setMatches(isDesktop);
      }
    };

    checkDeviceMatch();

    window.addEventListener("resize", checkDeviceMatch);

    return () => {
      window.removeEventListener("resize", checkDeviceMatch);
    };
  }, [type]);

  return matches;
};

export default useMediaQuery;

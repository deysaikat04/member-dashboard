import { useState, useEffect } from "react";

function getWindowDimensions() {
  const { innerWidth: width, innerHeight: height } = window;
  let isMobile = false;
  let isTablet = false;
  let isDesktop = false;
  let isLargeDesktop = false;
  let isSmallTablet = false;
  let isLargeTablet = false;

  console.log(width);
  

  // for mobile
  if (width <= 500) isMobile = true;

  // for tablet
  if (width > 500 && width <= 1050) isTablet = true;

  // for small tablet
  if (width > 500 && width <= 800) isSmallTablet = true;

  // for large tablet
  if (width > 800 && width <= 1050) isLargeTablet = true;

  // for desktop
  if (width > 1050) isDesktop = true;

  // for large desktop
  if (width > 1920) isLargeDesktop = true;

  return {
    width,
    height,
    isMobile,
    isTablet,
    isDesktop,
    isLargeDesktop,
    isSmallTablet,
    isLargeTablet
  };
}

export default function useWindowDimensions() {
  const [windowDimensions, setWindowDimensions] = useState(getWindowDimensions());

  useEffect(() => {
    function handleResize() {
      setWindowDimensions(getWindowDimensions());
    }

    window.addEventListener("resize", handleResize);
    window.addEventListener("orientationchange", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("orientationchange", handleResize);
    };
  }, []);

  return windowDimensions;
}

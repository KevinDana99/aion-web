"use client";
import { useState, useEffect } from 'react';

const useMediaQuery = (type: 'desktop' | 'mobile') => {
  const [matches, setMatches] = useState(false);

  useEffect(() => {
    const checkDeviceMatch = () => {
      const isMobile = window.innerWidth <= 768; 
      const isDesktop = window.innerWidth > 768;

      if (type === 'mobile') {
        setMatches(isMobile);
      } else if (type === 'desktop') {
        setMatches(isDesktop);
      }
    };

    
    checkDeviceMatch();


    window.addEventListener('resize', checkDeviceMatch);

 
    return () => {
      window.removeEventListener('resize', checkDeviceMatch);
    };
  }, [type]); 

  return matches;
};

export default useMediaQuery;
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const ScrollToTop = () => {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0); // Scroll to top when location changes
  }, [location]);

  return null; // No UI, just a behavior
};

export default ScrollToTop;

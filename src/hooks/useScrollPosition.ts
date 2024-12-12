import { useEffect } from 'react';

export const useScrollPosition = () => {
  useEffect(() => {
    // Store the current scroll position before navigation
    const scrollPosition = window.scrollY;

    // Restore the scroll position after component mounts
    window.scrollTo(0, scrollPosition);

    return () => {
      // Save the scroll position before unmounting
      sessionStorage.setItem('scrollPosition', scrollPosition.toString());
    };
  }, []);}
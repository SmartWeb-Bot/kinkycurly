import { useEffect } from 'react';

interface SwipeHandlers {
  onSwipedLeft?: () => void;
  onSwipedRight?: () => void;
}

export const useSwipeable = ({ onSwipedLeft, onSwipedRight }: SwipeHandlers) => {
  let touchStartX = 0;
  let touchEndX = 0;

  const handleTouchStart = (e: TouchEvent) => {
    touchStartX = e.touches[0].clientX;
  };

  const handleTouchEnd = (e: TouchEvent) => {
    touchEndX = e.changedTouches[0].clientX;
    handleSwipe();
  };

  const handleSwipe = () => {
    const swipeThreshold = 50;
    const diff = touchStartX - touchEndX;

    if (Math.abs(diff) > swipeThreshold) {
      if (diff > 0 && onSwipedLeft) {
        onSwipedLeft();
      } else if (diff < 0 && onSwipedRight) {
        onSwipedRight();
      }
    }
  };

  return {
    onTouchStart: handleTouchStart,
    onTouchEnd: handleTouchEnd,
  };
};
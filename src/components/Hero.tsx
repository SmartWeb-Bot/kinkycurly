import React, { useState, useEffect } from 'react';
import { heroImages } from '../data/heroImages';

export const Hero = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Auto-advance slides every 5 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImageIndex((prevIndex) =>
        prevIndex === heroImages.length - 1 ? 0 : prevIndex + 1
      );
    }, 5000);

    return () => clearInterval(timer);
  }, []);

  const handleDotClick = (index: number) => {
    setCurrentImageIndex(index);
  };

  return (
    <div id="home" className="relative" style={{ aspectRatio: '16/9' }}>
      {/* Image container with transition */}
      <div className="absolute inset-0">
        {heroImages.map((image, index) => (
          <div
            key={image.id}
            className={`absolute mt-16 inset-0  transition-opacity duration-1000 ${index === currentImageIndex ? 'opacity-100' : 'opacity-0'
              }`}
          >
            <img
              src={image.url}
              alt={image.alt}
              className="w-full h-auto object-cover"
            />

            <div className="flex justify-center items-center space-x-3 mt-1 ">
              {heroImages.map((_, index) => (
                <button
                  key={index}
                  onClick={() => handleDotClick(index)}
                  className={`w-3 h-3  rounded-full ${index === currentImageIndex ? 'bg-rose-200':'bg-gray-200'} transition-all`}

                />
              ))}
            </div>
          </div>
        ))}

      


      </div>
    </div>

  );
};

// https://www.freepik.com/free-vector/flat-spring-youtube-channel-art_23033967.htm#fromView=search&page=1&position=29&uuid=9fe5f6da-e2d9-440d-9871-b1f4e9c6f96a
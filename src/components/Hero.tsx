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
    <div id="home" className="relative h-screen">
      {/* Image container with transition */}
      <div className="absolute inset-0">
        {heroImages.map((image, index) => (
          <div
            key={image.id}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              index === currentImageIndex ? 'opacity-100' : 'opacity-0'
            }`}
          >
            <img
              src={image.url}
              alt={image.alt}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black opacity-40"></div>
          </div>
        ))}
      </div>

      {/* Content */}
      <div className="relative max-w-7xl mx-auto pt-32 px-4 sm:px-6 lg:px-8 h-full flex items-center">
        <div className="text-white">
          <h1 className="text-5xl font-bold mb-4">Embrace Your Natural Beauty</h1>
          <p className="text-xl mb-8">
            Discover our premium collection of natural hair care products
          </p>
          <a
            href="#products"
            className="bg-rose-600 hover:bg-rose-700 text-white px-8 py-3 rounded-full font-medium inline-block transition-colors duration-300"
          >
            Explore Products
          </a>
        </div>
      </div>

      {/* Dot navigation */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-3">
        {heroImages.map((_, index) => (
          <button
            key={index}
            onClick={() => handleDotClick(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              index === currentImageIndex
                ? 'bg-white scale-125'
                : 'bg-white/50 hover:bg-white/75'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

// https://www.freepik.com/free-vector/flat-spring-youtube-channel-art_23033967.htm#fromView=search&page=1&position=29&uuid=9fe5f6da-e2d9-440d-9871-b1f4e9c6f96a
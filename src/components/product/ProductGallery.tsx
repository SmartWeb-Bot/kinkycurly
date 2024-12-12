import React, { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { useSwipeable } from '../../hooks/useSwipeable';
import { ImageZoom } from './ImageZoom';

interface ProductGalleryProps {
  images: string[];
}

export const ProductGallery = ({ images }: ProductGalleryProps) => {
  const [mainImage, setMainImage] = useState(0);
  // const handlers = useSwipeable({
  //   onSwipedLeft: () => handleImageChange('next'),
  //   onSwipedRight: () => handleImageChange('prev'),
  // });

  // const handleImageChange = (direction: 'prev' | 'next') => {
  //   if (direction === 'prev') {
  //     setMainImage((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  //   } else {
  //     setMainImage((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  //   }
  // };
 
  return (
    <div className="space-y-4" >
     <div className="relative rounded-lg flex items-center justify-center" style={{ minHeight: '500px' }}>
     <div className="relative w-full h-full flex items-center justify-center p-4">
        <ImageZoom
          src={images[mainImage]}
          alt="Product"
        />
        {images.length > 1 && (
          <>
            {/* <button
              onClick={() => handleImageChange('prev')}
              className="absolute left-4 top-1/2 -translate-y-1/2 rounded-full bg-white/80 p-2 hover:bg-white"
              aria-label="Previous image"
            >
              <ChevronLeft className="h-6 w-6" />
            </button>
            <button
              onClick={() => handleImageChange('next')}
              className="absolute right-4 top-1/2 -translate-y-1/2 rounded-full bg-white/80 p-2 hover:bg-white"
              aria-label="Next image"
            >
              <ChevronRight className="h-6 w-6" />
            </button> */}
          </>
        )}
      </div>
      </div>
  
      {images.length > 1 && (
        <div className={`grid grid-cols-7 gap-4`}>
          {images.map((image, index) => (
            <button
              key={index}
              onClick={() => setMainImage(index)}
              onMouseEnter={() => setMainImage(index)} // Switch image on hover
              className={`aspect-square rounded-lg overflow-hidden ${
                index === mainImage ? 'ring-2 ring-rose-500' : ''
              }`}
            >
              <img
                src={image}
                alt={`Product ${index + 1}`}
                className="h-full w-full object-contain"
              />
            </button>
          ))}
        </div>
      )}
    </div>
  );
};
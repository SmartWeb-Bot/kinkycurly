import React, { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface ProductGalleryProps {
  images: string[];
}

export const ProductGallery = ({ images }: ProductGalleryProps) => {
  const [mainImage, setMainImage] = useState(0);

  return (
    <div className="space-y-4">
      <div className="relative aspect-square overflow-hidden rounded-lg">  
        <img
          src={images[mainImage]}
          alt="Product"
          className="h-full w-full object-contain"
        />
        {images.length > 1 && (
          <>
            {/* <button
              onClick={() => setMainImage((prev) => (prev === 0 ? images.length - 1 : prev - 1))}
              className="absolute left-4 top-1/2 -translate-y-1/2 rounded-full bg-white/80 p-2 hover:bg-white"
            >
              <ChevronLeft className="h-6 w-6" />
            </button>
            <button
              onClick={() => setMainImage((prev) => (prev === images.length - 1 ? 0 : prev + 1))}
              className="absolute right-4 top-1/2 -translate-y-1/2 rounded-full bg-white/80 p-2 hover:bg-white"
            >
              <ChevronRight className="h-6 w-6" />
            </button> */}
          </>
        )}
      </div>
      {images.length > 1 && (
        <div className="grid grid-cols-7 gap-4">
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
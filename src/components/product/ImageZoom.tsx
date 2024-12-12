import React, { useState, useRef, useEffect } from 'react';

interface ImageZoomProps {
  src: string;
  alt: string;
}

export const ImageZoom = ({ src, alt }: ImageZoomProps) => {
  const [showZoom, setShowZoom] = useState(false);
  const [zoomPosition, setZoomPosition] = useState({ x: 0, y: 0 });
  const imageRef = useRef<HTMLImageElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!imageRef.current || !containerRef.current) return;

    const { left, top, width, height } = imageRef.current.getBoundingClientRect();
    const x = ((e.clientX - left) / width) * 100;
    const y = ((e.clientY - top) / height) * 100;

    setZoomPosition({ x, y });
  };

  const handleMouseEnter = () => {
    setShowZoom(true);
  };

  const handleMouseLeave = () => {
    setShowZoom(false);
  };

  // Cleanup zoom when component unmounts
  useEffect(() => {
    return () => {
      setShowZoom(false);
    };
  }, []);

  return (
    <div className="relative w-full h-full flex items-center justify-center" ref={containerRef}>
      <div
        className="relative cursor-crosshair max-w-full max-h-full flex items-center justify-center"
        onMouseMove={handleMouseMove}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <img
          ref={imageRef}
          src={src}
          alt={alt}
          className="max-w-full max-h-[450px] object-contain"
        />
      </div>

      {showZoom && (
        <div
          className="fixed top-0 right-0 w-1/2 h-full z-50 flex items-center justify-center pointer-events-none"
        >
          <div
            className="relative border-4 border-gray-400 bg-white"
            style={{
              width: '90%',
              height: '90%',
              backgroundImage: `url(${src})`,
              backgroundPosition: `${zoomPosition.x}% ${zoomPosition.y}%`,
              backgroundRepeat: 'no-repeat',
              backgroundSize: '200%',
            }}
          />
        </div>
      )}
    </div>
  );
};

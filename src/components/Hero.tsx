import React from 'react';

export const Hero = () => {
  return (
    <div id="home" className="relative h-screen">
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1580618672591-eb180b1a973f?ixlib=rb-4.0.3"
          alt="Beautiful curly hair"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black opacity-40"></div>
      </div>
      <div className="relative max-w-7xl mx-auto pt-32 px-4 sm:px-6 lg:px-8 h-full flex items-center">
        <div className="text-white">
          <h1 className="text-5xl font-bold mb-4">Embrace Your Natural Beauty</h1>
          <p className="text-xl mb-8">Discover our premium collection of natural hair care products</p>
          <a
            href="#products"
            className="bg-rose-600 hover:bg-rose-700 text-white px-8 py-3 rounded-full font-medium inline-block"
          >
            Explore Products
          </a>
        </div>
      </div>
    </div>
  );
};


// https://www.freepik.com/free-vector/flat-spring-youtube-channel-art_23033967.htm#fromView=search&page=1&position=29&uuid=9fe5f6da-e2d9-440d-9871-b1f4e9c6f96a
import React from 'react';

export const About = () => {
  return (
    <div id="about" className="bg-rose-50 py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:grid lg:grid-cols-2 lg:gap-8 items-center">
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-4">About Kinky Curly</h2>
            <p className="text-gray-600 mb-6">
              At Kinky Curly, we believe in embracing and enhancing your natural beauty. Our products
              are specially formulated to nourish and define your curls while maintaining their natural
              texture and health.
            </p>
            <p className="text-gray-600 mb-6">
              We use only the finest natural ingredients, free from harsh chemicals, to ensure your hair
              receives the care it deserves. Our commitment to quality and effectiveness has made us a
              trusted name in natural hair care.
            </p>
          </div>
          <div className="mt-10 lg:mt-0">
            <img
              src="https://images.unsplash.com/photo-1605497788044-5a32c7078486?ixlib=rb-4.0.3"
              alt="Natural hair care products"
              className="rounded-lg shadow-lg"
            />
          </div>
        </div>
      </div>
    </div>
  );
};
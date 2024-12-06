import React from 'react';
import { Star } from 'lucide-react';
import { reviews } from '../data/testimonials';

export const Reviews = () => {
  const renderStars = (rating: number) => {
    return Array.from({ length: rating }).map((_, index) => (
      <Star key={index} className="w-5 h-5 text-yellow-400 fill-current" />
    ));
  };

  return (
    <div id="testimonials" className="bg-rose-50 py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900">Customer Reviews</h2>
          <p className="mt-4 text-gray-600">See what our customers are saying about our products</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {reviews.map((review) => (
            <div
              key={review.id}
              className="bg-white rounded-lg shadow-lg p-8 transform hover:scale-105 transition-transform duration-300"
            >
              <div className="flex items-center mb-6">
                <img
                  src={review.image}
                  alt={review.name}
                  className="w-16 h-16 rounded-full object-cover"
                />
                <div className="ml-4">
                  <h3 className="text-lg font-semibold text-gray-900">{review.name}</h3>
                  <p className="text-gray-600 text-sm">{review.location}</p>
                </div>
              </div>
              <div className="flex mb-4">
                {renderStars(review.rating)}
              </div>
              <p className="text-gray-600 italic">&ldquo;{review.review}&rdquo;</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
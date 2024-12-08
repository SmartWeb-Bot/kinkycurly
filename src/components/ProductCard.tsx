import React from 'react';
import { Product } from '../types/product';

interface ProductCardProps {
  product: Product;
  onLearnMore: (product: Product) => void;
}

export const ProductCard = ({ product, onLearnMore }: ProductCardProps) => {
  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden">
      <img
        src={product.image}
        alt={product.name}
        className="w-full h-64 object-cover"
      />
      <div className="p-6">
        <h3 className="text-xl font-semibold text-gray-900 mb-2">{product.name}</h3>
        <p className="text-gray-600 mb-4">{product.description}</p>
        <div className="flex justify-between items-center">
          <span className="text-rose-600 font-bold">${product.price}</span>
          <button 
            onClick={() => onLearnMore(product)}
            className="bg-rose-600 text-white px-4 py-2 rounded-full hover:bg-rose-700 transition-colors duration-300"
          >
            Learn More
          </button>
        </div>
      </div>
    </div>
  );
};
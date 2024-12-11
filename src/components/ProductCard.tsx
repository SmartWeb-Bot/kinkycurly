import React from 'react';
import { Product } from '../types/product';
import { Link } from 'react-router-dom';

interface ProductCardProps {
  product: Product;
  onLearnMore: (product: Product) => void; // Add this line
}

export const ProductCard = ({ product, onLearnMore }: ProductCardProps) => {
  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden">
      <Link to={`/product/${product.id}`}>
        <img
          src={product.images?.[0]}
          alt={product.name}
          className="w-full h-64 object-cover"
        />
        <div className="p-6">
          <h3 className="text-xl font-semibold text-gray-900 mb-2">{product.name}</h3>
          <p className="text-gray-600 mb-4">{product.tagline}</p>
          <div className="flex justify-center items-center">
            <button className="bg-rose-600 text-white px-4 py-2 rounded-full hover:bg-rose-700 transition-colors duration-300">
              View Details
            </button>
          </div>
        </div>
      </Link>
    </div>
  );
};
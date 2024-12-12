import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Product } from '../types/product';

interface ProductCardProps {
  product: Product;
  onLearnMore: (product: Product) => void; // Add this line
}

export const ProductCard = ({ product , onLearnMore }: ProductCardProps) => {
  const navigate = useNavigate();

  const handleViewDetails = (e: React.MouseEvent) => {
    e.preventDefault();
    // Store current scroll position
    sessionStorage.setItem('scrollPosition', window.scrollY.toString());
    navigate(`/product/${product.id}`);
  };

  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden">
      <Link to={`/product/${product.id}`} onClick={handleViewDetails}>
        <img
          src={product.images?.[0]}
          alt={product.name}
          className="w-full h-64 object-contain"
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
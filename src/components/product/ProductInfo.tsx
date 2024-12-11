import React from 'react';
import { Product } from '../../types/product';
import { ProductBenefits } from './ProductBenefits';

interface ProductInfoProps {
  product: Product;
}

export const ProductInfo = ({ product }: ProductInfoProps) => {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-gray-900">{product.name}</h1>
        <p className="mt-2 text-xl text-gray-500">{product.tagline}</p>
      </div>

      <div className="border-t border-b border-gray-200 py-4">
        <p className="text-xl font-semibold text-gray-900">${product.price.toFixed(2)}</p>
      </div>

      <div>
        <h2 className="text-lg font-semibold text-gray-900">Description</h2>
        <p className="mt-2 text-gray-600">{product.description}</p>
      </div>

      <ProductBenefits benefits={product.benefits} />

      <div className="space-y-4">
        <button className="w-full bg-rose-600 text-white px-6 py-3 rounded-full hover:bg-rose-700 transition-colors">
          Add to Cart
        </button>
        <button className="w-full border-2 border-rose-600 text-rose-600 px-6 py-3 rounded-full hover:bg-rose-50 transition-colors">
          Add to Wishlist
        </button>
      </div>
    </div>
  );
};
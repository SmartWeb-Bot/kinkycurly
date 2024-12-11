import React from 'react';
import { X } from 'lucide-react';
import { Product } from '../types/product';

interface ProductModalProps {
  product: Product;
  isOpen: boolean;
  onClose: () => void;
}

export const ProductModal = ({ product, isOpen, onClose }: ProductModalProps) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto" aria-labelledby="modal-title" role="dialog" aria-modal="true">
      <div className="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
        <div 
          className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" 
          aria-hidden="true"
          onClick={onClose}
        ></div>

        <span className="hidden sm:inline-block sm:align-middle sm:h-screen" aria-hidden="true">&#8203;</span>

        <div className="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full animate-modal">
          <div className="absolute top-0 right-0 pt-4 pr-4">
            <button
              onClick={onClose}
              className="bg-white rounded-md text-gray-400 hover:text-gray-500 focus:outline-none"
            >
              <X className="h-6 w-6" />
            </button>
          </div>

          <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
            <div className="sm:flex sm:items-start">
              <div className="mt-3 text-center sm:mt-0 sm:text-left w-full">
                <div className="mb-4">
                  <img
                    src={product.images?.[0]}
                    alt={product.name}
                    className="w-full h-64 object-cover rounded-lg"
                  />
                </div>
                <h3 className="text-2xl leading-6 font-semibold text-gray-900 mb-4" id="modal-title">
                  {product.name}
                </h3>
                <div className="mt-4">
                  <p className="text-lg text-gray-900 font-semibold mb-2">Description</p>
                  <p className="text-gray-600 mb-4">{product.description}</p>
                  
                  <p className="text-lg text-gray-900 font-semibold mb-2">Key Benefits</p>
                  <ul className="list-disc list-inside text-gray-600 mb-4">
                    {product.benefits?.map((benefit, index) => (
                      <li key={index}>{benefit}</li>
                    ))}
                  </ul>

                  <p className="text-lg text-gray-900 font-semibold mb-2">How to Use</p>
                  <p className="text-gray-600 mb-4">{product.usage}</p>

                  <p className="text-lg text-gray-900 font-semibold mb-2">Ingredients</p>
                  <p className="text-gray-600 mb-4">{product.ingredients}</p>

                  {/* <div className="mt-6">
                    <p className="text-2xl text-rose-600 font-bold">${product.price}</p>
                  </div> */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
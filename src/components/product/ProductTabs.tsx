import React, { useState } from 'react';
import { Product } from '../../types/product';

interface ProductTabsProps {
  product: Product;
}

export const ProductTabs = ({ product }: ProductTabsProps) => {
  const [activeTab, setActiveTab] = useState('how-to-use');

  const tabs = [
    { id: 'how-to-use', label: 'How to Use' },
    { id: 'ingredients', label: 'Ingredients' },
  ];

  return (
    <div className="my-16">
      <div className="border-b border-gray-200">
        <nav className="flex space-x-8">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`
                py-4 px-1 border-b-2 font-medium text-sm
                ${
                  activeTab === tab.id
                    ? 'border-rose-500 text-rose-600'
                    : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                }
              `}
            >
              {tab.label}
            </button>
          ))}
        </nav>
      </div>

      <div className="mt-8 prose max-w-none">
        {activeTab === 'how-to-use' && (
          <div>
            <h3 className="text-lg font-semibold text-gray-900">How to Use</h3>
            <p className="mt-4 text-gray-600">{product.usage}</p>
          </div>
        )}
        {activeTab === 'ingredients' && (
          <div>
            <h3 className="text-lg font-semibold text-gray-900">Ingredients</h3>
            <p className="mt-4 text-gray-600">{product.ingredients}</p>
          </div>
        )}
      </div>
    </div>
  );
};
import React from 'react';
import { useRelatedProducts } from '../../hooks/useRelatedProducts';
import { ProductCard } from '../ProductCard';
import { Product } from '../../types/product';

interface RelatedProductsProps {
  currentProductId: number;
}

export const RelatedProducts = ({ currentProductId }: RelatedProductsProps) => {
  const relatedProducts = useRelatedProducts(currentProductId);

  if (!relatedProducts.length) return null;

  return (
    <div className="my-16">
      <h2 className="text-2xl font-bold text-gray-900 mb-8">You May Also Like</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {relatedProducts.map((product:Product) => (
          <ProductCard key={product.id} product={product} onLearnMore={() => console.log('Learn more clicked')}/>
        ))}
      </div>
    </div>
  );
};
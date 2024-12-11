import { useState, useEffect } from 'react';
import { Product } from '../types/product';
import { products } from '../data/products';

export const useRelatedProducts = (currentProductId: number) => {
  const [relatedProducts, setRelatedProducts] = useState<Product[]>([]);

  useEffect(() => {
    // Simulate API call to get related products
    // In a real app, this would fetch products based on categories, tags, etc.
    const fetchRelatedProducts = () => {
      const filtered = products
        .filter((product) => product.id !== currentProductId)
        .slice(0, 3);
      setRelatedProducts(filtered);
    };

    fetchRelatedProducts();
  }, [currentProductId]);

  return relatedProducts;
};
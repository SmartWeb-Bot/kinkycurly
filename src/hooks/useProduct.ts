import { useState, useEffect } from 'react';
import { Product } from '../types/product';
import { products } from '../data/products';

export const useProduct = (id: string | undefined) => {
  const [product, setProduct] = useState<Product | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!id) {
      setError('Product ID is required');
      setIsLoading(false);
      return;
    }

    // Simulate API call
    const fetchProduct = () => {
      setIsLoading(true);
      setTimeout(() => {
        const foundProduct = products.find((p) => p.id === parseInt(id));
        if (foundProduct) {
          // Add multiple images for the product detail view
          const productWithImages = {
            ...foundProduct,
            images: [
              ...foundProduct.image, // flatten the array
              'https://images.unsplash.com/photo-1597354984706-fac992d9306f?ixlib=rb-4.0.3',
              'https://images.unsplash.com/photo-1608248543803-ba4f8c70ae0b?ixlib=rb-4.0.3',
              'https://images.unsplash.com/photo-1608248544139-90d8aa0a4335?ixlib=rb-4.0.3',
            ],
          };
          setProduct(productWithImages);
          setError(null);
        } else {
          setError('Product not found');
          setProduct(null);
        }
        setIsLoading(false);
      }, 500);
    };

    fetchProduct();
  }, [id]);

  return { product, isLoading, error };
};
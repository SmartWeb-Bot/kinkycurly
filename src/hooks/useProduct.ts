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
              ...foundProduct.images, // flatten the array
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
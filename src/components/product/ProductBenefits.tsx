import React from 'react';
import { Check } from 'lucide-react';

interface ProductBenefitsProps {
  benefits?: string[];
}

export const ProductBenefits = ({ benefits }: ProductBenefitsProps) => {
  if (!benefits?.length) return null;

  return (
    <div>
      <h2 className="text-lg font-semibold text-gray-900">Key Benefits</h2>
      <ul className="mt-4 space-y-2">
        {benefits.map((benefit, index) => (
          <li key={index} className="flex items-center gap-2">
            <Check className="h-5 w-5 text-green-500" />
            <span className="text-gray-600">{benefit}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};
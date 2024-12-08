export interface Product {
    id: number;
    name: string;
    description: string;
    price: number;
    image: string;
    benefits?: string[];
    usage?: string;
    ingredients?: string;
  }
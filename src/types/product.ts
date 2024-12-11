export interface Product {
    id: number;
    name: string;
    tagline: string;
    description: string;
    price: number;
    images?: string[]
    benefits?: string[];
    usage?: string;
    ingredients?: string;
    amazonProductUrl: string
  }
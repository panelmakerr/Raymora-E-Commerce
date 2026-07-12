export interface Product {
  id: string;
  name: string;
  slug: string;
  tagline: string;
  description: string;
  price: number;
  compareAtPrice?: number;
  color: "black" | "white";
  design: string;
  backDesign: string;
  sizes: SizeOption[];
  features: string[];
  rating: number;
  reviewCount: number;
  inStock: boolean;
  stockCount: number;
}

export interface SizeOption {
  label: string;
  value: string;
  available: boolean;
}

export interface CartItem {
  productId: string;
  product: Product;
  size: string;
  quantity: number;
}

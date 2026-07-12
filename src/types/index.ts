export interface Product {
  id: string;
  name: string;
  tagline: string;
  description: string;
  price: number;
  compareAtPrice?: number;
  color: "black" | "white";
  sizes: { label: string; value: string }[];
  features: string[];
  rating: number;
  reviewCount: number;
}

export interface CartItem {
  productId: string;
  product: Product;
  size: string;
  quantity: number;
}

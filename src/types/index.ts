export interface Product {
  id: string;
  name: string;
  slug: string;
  description: string;
  price: number;
  compareAtPrice?: number;
  images: string[];
  category: string;
  tags: string[];
  variants: ProductVariant[];
  features: string[];
  rating: number;
  reviewCount: number;
  inStock: boolean;
  stockCount: number;
  createdAt: string;
}

export interface ProductVariant {
  id: string;
  name: string;
  options: { label: string; value: string; available: boolean }[];
}

export interface CartItem {
  productId: string;
  product: Product;
  variantId: string;
  variant: ProductVariant | null;
  quantity: number;
}

export interface Order {
  id: string;
  items: CartItem[];
  total: number;
  status: "pending" | "processing" | "shipped" | "delivered";
  shippingAddress: Address;
  billingAddress: Address;
  paymentMethod: string;
  createdAt: string;
}

export interface Address {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  address1: string;
  address2?: string;
  city: string;
  state: string;
  postalCode: string;
  country: string;
}

export interface Category {
  id: string;
  name: string;
  slug: string;
  description: string;
  image: string;
  productCount: number;
}

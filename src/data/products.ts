import { Product } from "@/types";

export const products: Product[] = [
  {
    id: "black-windmill",
    name: "Windmill Heritage Tee",
    tagline: "Dutch roots, modern threads",
    description:
      "Premium heavyweight cotton tee featuring the iconic Dutch windmill in distressed artistic style. NL 062 heritage badge. Raymora branding. Online product — made fresh when you order, no middlemen, straight to you.",
    price: 99,
    color: "black",
    sizes: [
      { label: "S", value: "s" },
      { label: "M", value: "m" },
      { label: "L", value: "l" },
      { label: "XL", value: "xl" },
      { label: "XXL", value: "xxl" },
    ],
    features: [
      "260 GSM heavyweight combed cotton",
      "Distressed windmill print — front only",
      "NL 062 heritage badge",
      "Raymora screen-print branding",
      "Pre-shrunk retail fit",
      "Back is blank — clean look",
    ],
    rating: 4.9,
    reviewCount: 142,
  },
  {
    id: "white-distribution",
    name: "Sale & Distribution Tee",
    tagline: "Outing 2025 edition",
    description:
      "Clean white tee celebrating community and commerce. Bold blue typography, tropical island art, OUTING 2025 badge. Online product — printed on demand, shipped directly to you.",
    price: 89,
    compareAtPrice: 110,
    color: "white",
    sizes: [
      { label: "S", value: "s" },
      { label: "M", value: "m" },
      { label: "L", value: "l" },
      { label: "XL", value: "xl" },
      { label: "XXL", value: "xxl" },
    ],
    features: [
      "220 GSM premium cotton",
      "Multi-color screen print — front only",
      "Bold 'Sale and Distribution' text",
      "Tropical island illustration",
      "OUTING 2025 badge",
      "Back is blank — clean look",
    ],
    rating: 4.8,
    reviewCount: 98,
  },
];

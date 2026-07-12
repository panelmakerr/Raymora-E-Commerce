import { Product, Category } from "@/types";

export const categories: Category[] = [
  {
    id: "cat-1",
    name: "Artisan Leather",
    slug: "artisan-leather",
    description: "Hand-stitched leather goods crafted by master artisans",
    image: "/images/category-leather.jpg",
    productCount: 24,
  },
  {
    id: "cat-2",
    name: "Heritage Ceramics",
    slug: "heritage-ceramics",
    description: "Wheel-thrown pottery with centuries of tradition",
    image: "/images/category-ceramics.jpg",
    productCount: 18,
  },
  {
    id: "cat-3",
    name: "Woven Textiles",
    slug: "woven-textiles",
    description: "Hand-loomed fabrics from sustainable fibers",
    image: "/images/category-textiles.jpg",
    productCount: 15,
  },
  {
    id: "cat-4",
    name: "Botanicals",
    slug: "botanicals",
    description: "Dried arrangements and living plants for mindful spaces",
    image: "/images/category-botanicals.jpg",
    productCount: 21,
  },
];

export const products: Product[] = [
  {
    id: "prod-1",
    name: "The Saddle Weekender",
    slug: "saddle-weekender",
    description:
      "A full-grain vegetable-tanned leather weekender bag that develops a rich patina with every journey. Hand-cut and saddle-stitched by artisans in our Porto workshop, each piece tells a story of craft and character.",
    price: 385,
    compareAtPrice: 450,
    images: [
      "/images/product-weekender-1.jpg",
      "/images/product-weekender-2.jpg",
      "/images/product-weekender-3.jpg",
    ],
    category: "artisan-leather",
    tags: ["leather", "bags", "travel", "handmade"],
    variants: [
      {
        id: "var-1a",
        name: "Color",
        options: [
          { label: "Saddle Tan", value: "saddle-tan", available: true },
          { label: "Dark Espresso", value: "dark-espresso", available: true },
          { label: "Olive", value: "olive", available: true },
        ],
      },
    ],
    features: [
      "Full-grain vegetable-tanned leather",
      "Hand saddle-stitched with waxed linen thread",
      "Solid brass hardware",
      "Interior cotton canvas lining",
      "Dimensions: 20\" x 10\" x 11\"",
    ],
    rating: 4.9,
    reviewCount: 127,
    inStock: true,
    stockCount: 12,
    createdAt: "2024-01-15",
  },
  {
    id: "prod-2",
    name: "Wabi-Sabi Dinner Plate",
    slug: "wabi-sabi-dinner-plate",
    description:
      "Each plate embraces the beauty of imperfection. Fired at high temperatures in our wood-ash kiln, no two pieces share the same glaze pattern. A celebration of organic form and the Japanese aesthetic of wabi-sabi.",
    price: 68,
    images: [
      "/images/product-plate-1.jpg",
      "/images/product-plate-2.jpg",
    ],
    category: "heritage-ceramics",
    tags: ["ceramics", "tableware", "handmade", "japanese"],
    variants: [
      {
        id: "var-2a",
        name: "Glaze",
        options: [
          { label: "Ash White", value: "ash-white", available: true },
          { label: "Iron Black", value: "iron-black", available: true },
          { label: "Celadon", value: "celadon", available: false },
        ],
      },
    ],
    features: [
      "Wood-ash kiln fired at 1280°C",
      "Food-safe and dishwasher safe",
      "Diameter: 10.5 inches",
      "Lead-free glazes",
    ],
    rating: 4.8,
    reviewCount: 89,
    inStock: true,
    stockCount: 34,
    createdAt: "2024-02-10",
  },
  {
    id: "prod-3",
    name: "Alpaca Throw Blanket",
    slug: "alpaca-throw-blanket",
    description:
      "Woven on traditional floor looms in the Peruvian highlands, this baby alpaca throw is impossibly soft and warm. The natural fiber is hypoallergenic, sustainably sourced, and gets softer with every wash.",
    price: 295,
    compareAtPrice: 340,
    images: [
      "/images/product-throw-1.jpg",
      "/images/product-throw-2.jpg",
    ],
    category: "woven-textiles",
    tags: ["textiles", "blankets", "alpaca", "sustainable"],
    variants: [
      {
        id: "var-3a",
        name: "Color",
        options: [
          { label: "Oatmeal", value: "oatmeal", available: true },
          { label: "Charcoal", value: "charcoal", available: true },
          { label: "Terracotta", value: "terracotta", available: true },
          { label: "Sage", value: "sage", available: false },
        ],
      },
    ],
    features: [
      "100% baby alpaca fiber",
      "Handwoven on traditional floor looms",
      "Naturally hypoallergenic",
      "Dimensions: 50\" x 70\"",
    ],
    rating: 4.9,
    reviewCount: 203,
    inStock: true,
    stockCount: 8,
    createdAt: "2024-01-28",
  },
  {
    id: "prod-4",
    name: "Dried Eucalyptus Bundle",
    slug: "dried-eucalyptus-bundle",
    description:
      "Preserved silver dollar eucalyptus in a hand-tied bundle. Adds an organic, sculptural element to any room. The subtle fragrance evokes quiet mornings and coastal forests.",
    price: 42,
    images: [
      "/images/product-eucalyptus-1.jpg",
      "/images/product-eucalyptus-2.jpg",
    ],
    category: "botanicals",
    tags: ["botanicals", "dried-flowers", "home-decor"],
    variants: [
      {
        id: "var-4a",
        name: "Size",
        options: [
          { label: "Small (12 stems)", value: "small", available: true },
          { label: "Large (24 stems)", value: "large", available: true },
        ],
      },
    ],
    features: [
      "Naturally preserved",
      "Lasts 12+ months",
      "Subtle natural fragrance",
      "Hand-tied with cotton twine",
    ],
    rating: 4.7,
    reviewCount: 156,
    inStock: true,
    stockCount: 45,
    createdAt: "2024-03-01",
  },
  {
    id: "prod-5",
    name: "Hand-Forged Chef's Knife",
    slug: "hand-forged-chefs-knife",
    description:
      "Forged from high-carbon 1095 steel by a third-generation bladesmith in Seki, Japan. The octagonal cherry wood handle fits naturally in the hand, while the hammered finish prevents food from sticking.",
    price: 245,
    images: [
      "/images/product-knife-1.jpg",
      "/images/product-knife-2.jpg",
    ],
    category: "artisan-leather",
    tags: ["kitchen", "knives", "handmade", "japanese"],
    variants: [
      {
        id: "var-5a",
        name: "Blade Size",
        options: [
          { label: "6 inch (Gyuto)", value: "6-gyuto", available: true },
          { label: "8 inch (Gyuto)", value: "8-gyuto", available: true },
          { label: "7 inch (Nakiri)", value: "7-nakiri", available: true },
        ],
      },
    ],
    features: [
      "1095 high-carbon steel blade",
      "Hand-hammered tsuchime finish",
      "Octagonal cherry wood handle",
      "Comes with cotton blade cover",
    ],
    rating: 5.0,
    reviewCount: 64,
    inStock: true,
    stockCount: 5,
    createdAt: "2024-02-20",
  },
  {
    id: "prod-6",
    name: "Stoneware Bud Vase",
    slug: "stoneware-bud-vase",
    description:
      "A minimalist bud vase with a raw, unglazed exterior and glazed interior for easy cleaning. The perfect vessel for a single stem or dried wildflower.",
    price: 38,
    images: [
      "/images/product-vase-1.jpg",
      "/images/product-vase-2.jpg",
    ],
    category: "heritage-ceramics",
    tags: ["ceramics", "vases", "minimal", "handmade"],
    variants: [
      {
        id: "var-6a",
        name: "Finish",
        options: [
          { label: "Natural", value: "natural", available: true },
          { label: "Charcoal", value: "charcoal", available: true },
        ],
      },
    ],
    features: [
      "High-fired stoneware",
      "Raw exterior, glazed interior",
      "Height: 8 inches",
      "Watertight",
    ],
    rating: 4.6,
    reviewCount: 72,
    inStock: true,
    stockCount: 28,
    createdAt: "2024-03-10",
  },
];

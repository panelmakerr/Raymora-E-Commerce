"use client";

import { use } from "react";
import Link from "next/link";
import { ChevronRight, Truck, Shield, RotateCcw } from "lucide-react";
import { products } from "@/data/products";
import AddToCart from "@/components/product/AddToCart";

export default function ProductDetailPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = use(params);
  const product = products.find((p) => p.id === id);

  if (!product) {
    return (
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">
        <h1 className="font-serif text-3xl text-espresso-800">
          Product not found
        </h1>
        <Link
          href="/products"
          className="mt-4 inline-block text-sm text-gold-600 tracking-editorial"
        >
          Back to shop
        </Link>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      {/* Breadcrumb */}
      <nav className="flex items-center gap-2 text-xs text-espresso-400 tracking-editorial mb-8">
        <Link href="/" className="hover:text-espresso-700">
          Home
        </Link>
        <ChevronRight size={12} />
        <Link href="/products" className="hover:text-espresso-700">
          Shop
        </Link>
        <ChevronRight size={12} />
        <span className="text-espresso-600">{product.name}</span>
      </nav>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16">
        {/* Gallery */}
        <div className="space-y-3">
          <div className="aspect-[4/5] bg-parchment-100 rounded-sm card-organic overflow-hidden">
            <div className="w-full h-full bg-gradient-to-br from-parchment-200 via-parchment-100 to-parchment-300 flex items-center justify-center">
              <span className="font-serif text-parchment-300 text-8xl font-semibold opacity-30">
                {product.name.charAt(0)}
              </span>
            </div>
            <div className="raymora-watermark">
              <span>Raymora</span>
            </div>
          </div>
          {/* Thumbnails */}
          <div className="flex gap-3">
            {product.images.map((_, i) => (
              <div
                key={i}
                className={`w-20 h-20 bg-parchment-100 rounded-sm border-organic cursor-pointer ${
                  i === 0 ? "border-gold-500" : ""
                }`}
              >
                <div className="w-full h-full bg-gradient-to-br from-parchment-200 to-parchment-300 flex items-center justify-center">
                  <span className="font-serif text-parchment-400 text-xs">
                    {i + 1}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Product Info */}
        <div>
          <p className="text-xs font-medium text-gold-600 tracking-boutique uppercase mb-2">
            {product.category.replace("-", " ")}
          </p>
          <h1 className="font-serif text-3xl lg:text-4xl font-semibold text-espresso-800 heading-imperfect">
            {product.name}
          </h1>

          {/* Rating */}
          <div className="flex items-center gap-2 mt-3">
            <div className="flex">
              {[1, 2, 3, 4, 5].map((star) => (
                <svg
                  key={star}
                  className={`w-4 h-4 ${
                    star <= Math.round(product.rating)
                      ? "text-gold-500"
                      : "text-parchment-300"
                  }`}
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              ))}
            </div>
            <span className="text-xs text-espresso-400">
              {product.rating} ({product.reviewCount} reviews)
            </span>
          </div>

          <p className="mt-6 text-espresso-500 leading-relaxed">
            {product.description}
          </p>

          {/* Add to Cart */}
          <div className="mt-8">
            <AddToCart product={product} />
          </div>

          {/* Features */}
          <div className="mt-8 pt-8 border-t border-parchment-200">
            <h3 className="text-xs font-semibold text-espresso-600 tracking-boutique uppercase mb-4">
              Details
            </h3>
            <ul className="space-y-2">
              {product.features.map((feature, i) => (
                <li
                  key={i}
                  className="flex items-start gap-2 text-sm text-espresso-500"
                >
                  <span className="w-1 h-1 rounded-full bg-gold-500 mt-2 flex-shrink-0" />
                  {feature}
                </li>
              ))}
            </ul>
          </div>

          {/* Trust */}
          <div className="mt-8 pt-8 border-t border-parchment-200 grid grid-cols-3 gap-4">
            {[
              { icon: Truck, label: "Free shipping" },
              { icon: Shield, label: "2-year warranty" },
              { icon: RotateCcw, label: "30-day returns" },
            ].map((item, i) => (
              <div key={i} className="flex flex-col items-center text-center">
                <item.icon size={18} className="text-gold-600 mb-1" />
                <span className="text-[10px] text-espresso-400 tracking-editorial">
                  {item.label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

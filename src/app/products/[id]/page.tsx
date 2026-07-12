"use client";

import { use } from "react";
import Link from "next/link";
import { ChevronRight } from "lucide-react";
import { products } from "@/data/products";
import TShirtViewer from "@/components/product/TShirtViewer";
import AddToCart from "@/components/product/AddToCart";
import Text3D from "@/components/ui/Text3D";
import ParallaxLayer from "@/components/ui/ParallaxLayer";

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
        <h1 className="font-display text-3xl text-white">Product not found</h1>
        <Link href="/products" className="mt-4 inline-block text-sm text-forest-400">
          Back to shop
        </Link>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      {/* Breadcrumb */}
      <nav className="flex items-center gap-2 text-xs text-dark-500 mb-8">
        <Link href="/" className="hover:text-forest-400 transition-colors">
          Home
        </Link>
        <ChevronRight size={12} />
        <Link href="/products" className="hover:text-forest-400 transition-colors">
          Shop
        </Link>
        <ChevronRight size={12} />
        <span className="text-dark-300">{product.name}</span>
      </nav>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16">
        {/* 3D Viewer */}
        <ParallaxLayer speed={0.1}>
          <TShirtViewer color={product.color} design={product.design} />
        </ParallaxLayer>

        {/* Product Info */}
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-forest-500/10 border border-forest-500/20 rounded-full mb-4">
            <span
              className={`w-2 h-2 rounded-full ${
                product.color === "black" ? "bg-dark-900 border border-dark-600" : "bg-white"
              }`}
            />
            <span className="text-xs font-semibold text-forest-300 uppercase tracking-wider">
              {product.color} edition
            </span>
          </div>

          <h1 className="font-display text-3xl lg:text-4xl font-bold text-white">
            <Text3D text={product.name} depth={3} color="#84CC16" />
          </h1>

          <p className="mt-2 text-sm text-dark-400">{product.tagline}</p>

          {/* Rating */}
          <div className="flex items-center gap-2 mt-4">
            <div className="flex">
              {[1, 2, 3, 4, 5].map((star) => (
                <svg
                  key={star}
                  className={`w-4 h-4 ${
                    star <= Math.round(product.rating)
                      ? "text-lime-400"
                      : "text-dark-700"
                  }`}
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              ))}
            </div>
            <span className="text-xs text-dark-400">
              {product.rating} ({product.reviewCount} reviews)
            </span>
          </div>

          <p className="mt-6 text-dark-300 leading-relaxed">
            {product.description}
          </p>

          {/* Add to Cart */}
          <div className="mt-8">
            <AddToCart product={product} />
          </div>

          {/* Features */}
          <div className="mt-8 pt-8 border-t border-dark-800">
            <h3 className="text-xs font-bold text-forest-400 uppercase tracking-widest mb-4">
              Details
            </h3>
            <ul className="space-y-2">
              {product.features.map((feature, i) => (
                <li
                  key={i}
                  className="flex items-start gap-2 text-sm text-dark-300"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-forest-500 mt-1.5 flex-shrink-0" />
                  {feature}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

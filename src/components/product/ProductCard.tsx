"use client";

import Link from "next/link";
import { Product } from "@/types";
import { formatPrice, getDiscountPercent } from "@/lib/utils";

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
  const discount =
    product.compareAtPrice &&
    getDiscountPercent(product.price, product.compareAtPrice) > 0
      ? getDiscountPercent(product.price, product.compareAtPrice)
      : null;

  return (
    <Link href={`/products/${product.id}`}>
      <div className="card-3d group relative bg-dark-950 border border-forest-900/40 rounded-xl overflow-hidden cursor-pointer">
        {/* Product Visual */}
        <div className="aspect-[4/5] relative overflow-hidden">
          <div
            className={`w-full h-full ${
              product.color === "black"
                ? "bg-gradient-to-br from-dark-900 via-dark-950 to-dark-900"
                : "bg-gradient-to-br from-dark-100 via-white to-dark-50"
            }`}
          >
            {/* T-shirt silhouette */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div
                className={`relative w-48 h-56 ${
                  product.color === "black" ? "text-dark-900" : "text-white"
                }`}
              >
                {/* Shirt shape */}
                <svg viewBox="0 0 200 240" className="w-full h-full drop-shadow-2xl">
                  <path
                    d="M60 0 L0 40 L20 80 L40 65 L40 230 L160 230 L160 65 L180 80 L200 40 L140 0 Q100 30 60 0Z"
                    fill={product.color === "black" ? "#111" : "#f8f8f8"}
                    stroke={product.color === "black" ? "#333" : "#e0e0e0"}
                    strokeWidth="1"
                  />
                </svg>

                {/* Design overlay */}
                {product.design === "windmill" && (
                  <div className="absolute inset-0 flex flex-col items-center justify-center pt-4">
                    <div className="w-16 h-16 mb-1 relative">
                      <div className="absolute inset-0 border-2 border-white/80 rotate-45 rounded-sm" />
                      <div className="absolute inset-0 border-2 border-white/80 -rotate-45 rounded-sm" />
                      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-3 h-6 bg-white/80" />
                    </div>
                    <div className="bg-orange-500 text-[6px] text-white font-bold px-1.5 py-0.5 rounded-sm mb-1">
                      NL 062
                    </div>
                    <div className="w-6 h-0.5 bg-red-500 rounded-full" />
                    <div className="w-6 h-0.5 bg-white rounded-full mt-0.5" />
                    <div className="w-6 h-0.5 bg-blue-600 rounded-full mt-0.5" />
                    <span className="text-white text-lg font-bold mt-1 tracking-wider">
                      Raymora
                    </span>
                  </div>
                )}

                {product.design === "distribution" && (
                  <div className="absolute inset-0 flex flex-col items-center justify-center text-blue-700 pt-2 px-4">
                    <div className="flex items-baseline gap-1">
                      <span className="text-sm font-bold">Sale</span>
                      <span className="text-sm italic text-green-600">and</span>
                    </div>
                    <div className="w-8 h-8 rounded-full border-2 border-blue-700 flex items-center justify-center my-1">
                      <span className="text-[6px]">🌴</span>
                    </div>
                    <span className="text-sm font-black">Distribution</span>
                    <span className="text-[5px] border border-blue-700 rounded px-1 mt-0.5">
                      OUTING 2025
                    </span>
                    <span className="text-xs font-bold mt-0.5">only</span>
                    <span className="text-xs font-bold">with</span>
                    <span className="text-[6px] font-medium">raymora</span>
                    <span className="text-sm font-bold text-blue-800">Raymora</span>
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* Watermark */}
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
            <span className="font-display text-2xl font-bold text-white/[0.04] -rotate-25 tracking-widest">
              RAYMORA
            </span>
          </div>

          {/* Discount badge */}
          {discount && (
            <div className="absolute top-3 left-3 bg-lime-500 text-dark-950 text-[10px] font-bold px-2 py-1 rounded-full uppercase tracking-wider">
              -{discount}%
            </div>
          )}

          {/* 3D Layer indicator */}
          <div className="absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition-all duration-500">
            <div className="w-8 h-8 rounded-full bg-forest-500/20 backdrop-blur-sm border border-forest-400/30 flex items-center justify-center">
              <svg className="w-4 h-4 text-forest-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
              </svg>
            </div>
          </div>
        </div>

        {/* Info */}
        <div className="p-4 space-y-2">
          <div className="flex items-start justify-between">
            <div>
              <h3 className="font-display text-base font-semibold text-white group-hover:text-forest-400 transition-colors">
                {product.name}
              </h3>
              <p className="text-xs text-dark-400 mt-0.5">{product.tagline}</p>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-lg font-bold text-forest-400">
              {formatPrice(product.price)}
            </span>
            {product.compareAtPrice && (
              <span className="text-sm text-dark-500 line-through">
                {formatPrice(product.compareAtPrice)}
              </span>
            )}
          </div>
          {/* Rating */}
          <div className="flex items-center gap-2">
            <div className="flex">
              {[1, 2, 3, 4, 5].map((star) => (
                <svg
                  key={star}
                  className={`w-3 h-3 ${
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
            <span className="text-[10px] text-dark-500">
              {product.rating} ({product.reviewCount})
            </span>
          </div>
        </div>
      </div>
    </Link>
  );
}

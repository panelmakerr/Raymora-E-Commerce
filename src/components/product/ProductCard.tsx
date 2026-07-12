"use client";

import Link from "next/link";
import { Heart } from "lucide-react";
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
    <div className="card-organic rounded-sm bg-parchment-50 group">
      {/* Image */}
      <Link href={`/products/${product.id}`} className="block">
        <div className="product-image-wrap aspect-[4/5] bg-parchment-100 rounded-t-sm overflow-hidden">
          {/* Placeholder gradient */}
          <div className="w-full h-full bg-gradient-to-br from-parchment-200 via-parchment-100 to-parchment-300 flex items-center justify-center">
            <span className="font-serif text-parchment-400 text-lg tracking-boutique">
              {product.name.charAt(0)}
            </span>
          </div>

          {/* Watermark */}
          <div className="raymora-watermark">
            <span>Raymora</span>
          </div>

          {/* Discount badge */}
          {discount && (
            <div className="absolute top-3 left-3 bg-clay-500 text-white text-[10px] font-semibold px-2 py-1 tracking-boutique uppercase">
              Save {discount}%
            </div>
          )}

          {/* Wishlist */}
          <button className="absolute top-3 right-3 p-2 rounded-full bg-parchment-50/80 text-espresso-500 hover:text-clay-500 opacity-0 group-hover:opacity-100 transition-all duration-300">
            <Heart size={16} />
          </button>
        </div>
      </Link>

      {/* Info */}
      <div className="p-4">
        <Link href={`/products/${product.id}`}>
          <h3 className="font-serif text-base font-medium text-espresso-800 group-hover:text-gold-600 transition-colors heading-imperfect">
            {product.name}
          </h3>
        </Link>
        <p className="mt-1 text-xs text-espresso-400 tracking-editorial capitalize">
          {product.category.replace("-", " ")}
        </p>
        <div className="mt-2 flex items-center gap-2">
          <span className="text-sm font-semibold text-espresso-700">
            {formatPrice(product.price)}
          </span>
          {product.compareAtPrice && (
            <span className="text-xs text-espresso-400 line-through">
              {formatPrice(product.compareAtPrice)}
            </span>
          )}
        </div>

        {/* Rating */}
        <div className="mt-2 flex items-center gap-1">
          <div className="flex">
            {[1, 2, 3, 4, 5].map((star) => (
              <svg
                key={star}
                className={`w-3 h-3 ${
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
          <span className="text-[10px] text-espresso-400">
            ({product.reviewCount})
          </span>
        </div>
      </div>
    </div>
  );
}

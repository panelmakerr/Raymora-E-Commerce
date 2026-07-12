"use client";

import Link from "next/link";
import { Product } from "@/types";
import { BlackTeeMockup, WhiteTeeMockup } from "./TeeMockups";
import { formatPrice } from "@/lib/utils";

export default function ProductCard({ product }: { product: Product }) {
  return (
    <Link href={`/products/${product.id}`}>
      <div className="card-hover bg-dark-950 border border-dark-800 rounded-2xl overflow-hidden cursor-pointer group">
        {/* Image */}
        <div className={`aspect-[4/5] flex items-center justify-center p-6 ${
          product.color === "black"
            ? "bg-gradient-to-b from-dark-900 to-dark-950"
            : "bg-gradient-to-b from-dark-100 to-white"
        }`}>
          {product.color === "black" ? (
            <BlackTeeMockup className="w-48 h-auto group-hover:scale-105 transition-transform duration-500" />
          ) : (
            <WhiteTeeMockup className="w-48 h-auto group-hover:scale-105 transition-transform duration-500" />
          )}
        </div>

        {/* Info */}
        <div className="p-5">
          <p className="text-[10px] font-bold text-forest-400 uppercase tracking-widest mb-1">{product.color} edition</p>
          <h3 className="font-display text-lg font-bold text-white group-hover:text-forest-400 transition-colors">{product.name}</h3>
          <p className="text-xs text-dark-400 mt-1">{product.tagline}</p>
          <div className="flex items-center gap-2 mt-3">
            <span className="text-xl font-bold text-white">{formatPrice(product.price)}</span>
            {product.compareAtPrice && <span className="text-sm text-dark-500 line-through">{formatPrice(product.compareAtPrice)}</span>}
          </div>
          <div className="flex items-center gap-1 mt-2">
            {[1,2,3,4,5].map(s => (
              <svg key={s} className={`w-3 h-3 ${s <= Math.round(product.rating) ? "text-forest-400" : "text-dark-700"}`} fill="currentColor" viewBox="0 0 20 20">
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
              </svg>
            ))}
            <span className="text-[10px] text-dark-500 ml-1">({product.reviewCount})</span>
          </div>
        </div>
      </div>
    </Link>
  );
}

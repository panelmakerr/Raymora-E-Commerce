"use client";

import { useState } from "react";
import Link from "next/link";
import { use } from "react";
import { ChevronRight, ShoppingBag, Check } from "lucide-react";
import { products } from "@/data/products";
import { useCart } from "@/store/cart";
import { formatPrice } from "@/lib/utils";
import { BlackTeeMockup, WhiteTeeMockup } from "@/components/product/TeeMockups";

export default function ProductDetailPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = use(params);
  const product = products.find((p) => p.id === id);
  const addItem = useCart((s) => s.addItem);
  const [selectedSize, setSelectedSize] = useState("");
  const [added, setAdded] = useState(false);
  const [showBack, setShowBack] = useState(false);

  if (!product) {
    return (
      <div className="max-w-7xl mx-auto px-4 py-20 text-center">
        <h1 className="font-display text-3xl text-white">Product not found</h1>
        <Link href="/products" className="mt-4 inline-block text-forest-400 text-sm">Back to shop</Link>
      </div>
    );
  }

  const handleAdd = () => {
    if (!selectedSize) return;
    addItem(product, selectedSize);
    setAdded(true);
    setTimeout(() => setAdded(false), 2000);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      {/* Breadcrumb */}
      <nav className="flex items-center gap-2 text-xs text-dark-500 mb-8">
        <Link href="/" className="hover:text-forest-400">Home</Link>
        <ChevronRight size={12} />
        <Link href="/products" className="hover:text-forest-400">Shop</Link>
        <ChevronRight size={12} />
        <span className="text-dark-300">{product.name}</span>
      </nav>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        {/* Product Image */}
        <div>
          <div className={`rounded-2xl flex items-center justify-center p-10 aspect-[4/5] ${
            product.color === "black"
              ? "bg-gradient-to-b from-dark-900 to-dark-950"
              : "bg-gradient-to-b from-dark-100 to-white"
          }`}>
            {product.color === "black" ? (
              <BlackTeeMockup className="w-64 sm:w-80 h-auto" />
            ) : (
              <WhiteTeeMockup className="w-64 sm:w-80 h-auto" />
            )}
          </div>

          {/* Front/Back toggle */}
          <div className="mt-4 flex gap-3">
            <button
              onClick={() => setShowBack(false)}
              className={`flex-1 py-2.5 text-xs font-bold uppercase tracking-widest rounded-xl border transition-all ${
                !showBack
                  ? "bg-forest-600 text-white border-forest-600"
                  : "bg-transparent text-dark-400 border-dark-700 hover:border-forest-700"
              }`}
            >
              Front
            </button>
            <button
              onClick={() => setShowBack(true)}
              className={`flex-1 py-2.5 text-xs font-bold uppercase tracking-widest rounded-xl border transition-all ${
                showBack
                  ? "bg-forest-600 text-white border-forest-600"
                  : "bg-transparent text-dark-400 border-dark-700 hover:border-forest-700"
              }`}
            >
              Back
            </button>
          </div>
          {showBack && (
            <div className={`mt-3 rounded-2xl flex items-center justify-center p-10 aspect-[4/5] ${
              product.color === "black"
                ? "bg-gradient-to-b from-dark-900 to-dark-950"
                : "bg-gradient-to-b from-dark-100 to-white"
            }`}>
              <p className={`text-sm font-medium ${product.color === "black" ? "text-dark-600" : "text-dark-300"}`}>
                Blank back — clean design
              </p>
            </div>
          )}
        </div>

        {/* Details + Add to Cart */}
        <div>
          <span className="inline-block px-3 py-1 bg-forest-500/10 border border-forest-500/20 rounded-full text-[10px] font-bold text-forest-400 uppercase tracking-widest mb-4">
            {product.color} edition
          </span>

          <h1 className="font-display text-3xl lg:text-4xl font-bold text-white">{product.name}</h1>
          <p className="text-sm text-dark-400 mt-1">{product.tagline}</p>

          {/* Rating */}
          <div className="flex items-center gap-2 mt-3">
            <div className="flex">
              {[1,2,3,4,5].map(s => (
                <svg key={s} className={`w-4 h-4 ${s <= Math.round(product.rating) ? "text-forest-400" : "text-dark-700"}`} fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
                </svg>
              ))}
            </div>
            <span className="text-xs text-dark-400">{product.rating} ({product.reviewCount} reviews)</span>
          </div>

          <p className="mt-5 text-dark-300 leading-relaxed text-sm">{product.description}</p>

          {/* Price */}
          <div className="flex items-baseline gap-3 mt-6">
            <span className="text-3xl font-bold text-white">{formatPrice(product.price)}</span>
            {product.compareAtPrice && <span className="text-lg text-dark-500 line-through">{formatPrice(product.compareAtPrice)}</span>}
          </div>

          {/* Size */}
          <div className="mt-6">
            <p className="text-xs font-bold text-forest-400 uppercase tracking-widest mb-3">
              Size {selectedSize && `— ${selectedSize.toUpperCase()}`}
            </p>
            <div className="flex flex-wrap gap-2">
              {product.sizes.map((s) => (
                <button
                  key={s.value}
                  onClick={() => setSelectedSize(s.value)}
                  className={`w-12 h-12 text-sm font-bold border rounded-xl transition-all ${
                    selectedSize === s.value
                      ? "border-forest-500 bg-forest-500/10 text-forest-400 shadow-glow"
                      : "border-dark-700 text-dark-300 hover:border-dark-500"
                  }`}
                >
                  {s.label}
                </button>
              ))}
            </div>
          </div>

          {/* Add to Cart */}
          <button
            onClick={handleAdd}
            disabled={!selectedSize}
            className={`mt-6 w-full py-4 flex items-center justify-center gap-3 text-sm font-bold tracking-widest uppercase rounded-xl transition-all ${
              added
                ? "bg-forest-600 text-white shadow-glow"
                : selectedSize
                ? "bg-forest-600 text-white hover:bg-forest-500 shadow-lg hover:shadow-glow"
                : "bg-dark-800 text-dark-500 cursor-not-allowed"
            }`}
          >
            {added ? <><Check size={18} /> Added to Bag</> : <><ShoppingBag size={18} /> Add to Bag</>}
          </button>

          {!selectedSize && <p className="text-xs text-dark-500 text-center mt-2">Select a size to continue</p>}

          {/* Details */}
          <div className="mt-8 pt-6 border-t border-dark-800">
            <h3 className="text-xs font-bold text-forest-400 uppercase tracking-widest mb-3">Details</h3>
            <ul className="space-y-2">
              {product.features.map((f, i) => (
                <li key={i} className="flex items-start gap-2 text-sm text-dark-300">
                  <span className="w-1.5 h-1.5 rounded-full bg-forest-500 mt-1.5 flex-shrink-0" />
                  {f}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

"use client";

import { useState } from "react";
import { ShoppingBag, Check } from "lucide-react";
import { Product } from "@/types";
import { useCartStore } from "@/store/cart";
import { formatPrice } from "@/lib/utils";

interface AddToCartProps {
  product: Product;
}

export default function AddToCart({ product }: AddToCartProps) {
  const [selectedSize, setSelectedSize] = useState(
    product.sizes.find((s) => s.available)?.value || ""
  );
  const [quantity, setQuantity] = useState(1);
  const [added, setAdded] = useState(false);
  const addItem = useCartStore((s) => s.addItem);

  const handleAdd = () => {
    if (!selectedSize) return;
    addItem(product, selectedSize, quantity);
    setAdded(true);
    setTimeout(() => setAdded(false), 2000);
  };

  return (
    <div className="space-y-6">
      {/* Size Selection */}
      <div>
        <label className="text-xs font-semibold text-forest-400 uppercase tracking-widest block mb-3">
          Size
        </label>
        <div className="flex flex-wrap gap-2">
          {product.sizes.map((size) => (
            <button
              key={size.value}
              onClick={() => setSelectedSize(size.value)}
              disabled={!size.available}
              className={`w-12 h-12 text-sm font-semibold border transition-all duration-300 rounded-lg ${
                selectedSize === size.value
                  ? "border-forest-500 bg-forest-500/10 text-forest-400 shadow-glow-green"
                  : size.available
                  ? "border-dark-700 text-dark-300 hover:border-forest-700 hover:text-white"
                  : "border-dark-800 text-dark-600 cursor-not-allowed line-through"
              }`}
            >
              {size.label}
            </button>
          ))}
        </div>
      </div>

      {/* Quantity */}
      <div>
        <label className="text-xs font-semibold text-forest-400 uppercase tracking-widest block mb-3">
          Quantity
        </label>
        <div className="flex items-center gap-0 border border-dark-700 rounded-lg w-fit overflow-hidden">
          <button
            onClick={() => setQuantity(Math.max(1, quantity - 1))}
            className="px-4 py-3 text-dark-400 hover:text-white hover:bg-dark-800 transition-colors text-lg"
          >
            -
          </button>
          <span className="px-5 py-3 text-sm font-bold text-white min-w-[3rem] text-center border-x border-dark-700 bg-dark-900/50">
            {quantity}
          </span>
          <button
            onClick={() => setQuantity(quantity + 1)}
            className="px-4 py-3 text-dark-400 hover:text-white hover:bg-dark-800 transition-colors text-lg"
          >
            +
          </button>
        </div>
      </div>

      {/* Price */}
      <div className="flex items-baseline gap-3">
        <span className="text-3xl font-display font-bold text-white">
          {formatPrice(product.price)}
        </span>
        {product.compareAtPrice && (
          <span className="text-lg text-dark-500 line-through">
            {formatPrice(product.compareAtPrice)}
          </span>
        )}
      </div>

      {/* Add to Cart */}
      <button
        onClick={handleAdd}
        disabled={!product.inStock || !selectedSize}
        className={`w-full py-4 flex items-center justify-center gap-3 text-sm font-bold tracking-widest uppercase transition-all duration-300 rounded-xl ${
          added
            ? "bg-forest-500 text-white shadow-glow-green"
            : product.inStock
            ? "bg-gradient-to-r from-forest-600 to-lime-600 text-white hover:from-forest-500 hover:to-lime-500 shadow-lg hover:shadow-glow-green"
            : "bg-dark-800 text-dark-500 cursor-not-allowed"
        }`}
      >
        {added ? (
          <>
            <Check size={18} />
            Added to Bag
          </>
        ) : (
          <>
            <ShoppingBag size={18} />
            {product.inStock ? "Add to Bag" : "Out of Stock"}
          </>
        )}
      </button>

      {product.stockCount <= 20 && product.inStock && (
        <p className="text-xs text-lime-500 text-center font-mono">
          Only {product.stockCount} left — selling fast
        </p>
      )}
    </div>
  );
}

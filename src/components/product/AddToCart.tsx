"use client";

import { useState } from "react";
import { Minus, Plus, ShoppingBag } from "lucide-react";
import { Product, ProductVariant } from "@/types";
import { useCartStore } from "@/store/cart";
import { formatPrice } from "@/lib/utils";

interface AddToCartProps {
  product: Product;
}

export default function AddToCart({ product }: AddToCartProps) {
  const [quantity, setQuantity] = useState(1);
  const [selectedVariant, setSelectedVariant] = useState<ProductVariant | null>(
    product.variants[0] || null
  );
  const [selectedOption, setSelectedOption] = useState<string>(
    product.variants[0]?.options[0]?.value || ""
  );
  const [added, setAdded] = useState(false);
  const addItem = useCartStore((s) => s.addItem);

  const handleAdd = () => {
    addItem(product, selectedVariant, quantity);
    setAdded(true);
    setTimeout(() => setAdded(false), 2000);
  };

  return (
    <div className="space-y-6">
      {/* Variant Options */}
      {product.variants.map((variant) => (
        <div key={variant.id}>
          <label className="text-xs font-medium text-espresso-600 tracking-boutique uppercase block mb-3">
            {variant.name}:{" "}
            <span className="text-espresso-800 normal-case tracking-normal">
              {variant.options.find((o) => o.value === selectedOption)?.label}
            </span>
          </label>
          <div className="flex flex-wrap gap-2">
            {variant.options.map((option) => (
              <button
                key={option.value}
                onClick={() => {
                  setSelectedOption(option.value);
                  setSelectedVariant(variant);
                }}
                disabled={!option.available}
                className={`px-4 py-2 text-sm border transition-all ${
                  selectedOption === option.value
                    ? "border-gold-500 bg-gold-50 text-gold-700"
                    : "border-parchment-300 text-espresso-600 hover:border-parchment-400"
                } ${
                  !option.available
                    ? "opacity-30 cursor-not-allowed line-through"
                    : "cursor-pointer"
                }`}
              >
                {option.label}
              </button>
            ))}
          </div>
        </div>
      ))}

      {/* Quantity */}
      <div>
        <label className="text-xs font-medium text-espresso-600 tracking-boutique uppercase block mb-3">
          Quantity
        </label>
        <div className="flex items-center gap-0 border border-parchment-300 w-fit">
          <button
            onClick={() => setQuantity(Math.max(1, quantity - 1))}
            className="p-3 text-espresso-500 hover:text-espresso-800 transition-colors"
          >
            <Minus size={16} />
          </button>
          <span className="px-5 py-3 text-sm font-medium text-espresso-800 min-w-[3rem] text-center border-x border-parchment-300">
            {quantity}
          </span>
          <button
            onClick={() => setQuantity(quantity + 1)}
            className="p-3 text-espresso-500 hover:text-espresso-800 transition-colors"
          >
            <Plus size={16} />
          </button>
        </div>
      </div>

      {/* Price */}
      <div className="flex items-baseline gap-3">
        <span className="text-2xl font-serif font-semibold text-espresso-800">
          {formatPrice(product.price)}
        </span>
        {product.compareAtPrice && (
          <span className="text-base text-espresso-400 line-through">
            {formatPrice(product.compareAtPrice)}
          </span>
        )}
      </div>

      {/* Add to Cart Button */}
      <button
        onClick={handleAdd}
        disabled={!product.inStock}
        className={`w-full py-4 flex items-center justify-center gap-3 text-sm font-medium tracking-boutique uppercase transition-all duration-300 ${
          added
            ? "bg-sage-500 text-white"
            : product.inStock
            ? "bg-espresso-800 text-parchment-100 hover:bg-espresso-700"
            : "bg-parchment-200 text-parchment-400 cursor-not-allowed"
        }`}
      >
        <ShoppingBag size={18} />
        {added
          ? "Added to Bag"
          : product.inStock
          ? "Add to Bag"
          : "Out of Stock"}
      </button>

      {product.stockCount <= 10 && product.inStock && (
        <p className="text-xs text-clay-500 text-center tracking-editorial">
          Only {product.stockCount} left in stock
        </p>
      )}
    </div>
  );
}

"use client";

import Link from "next/link";
import { Trash2, Plus, Minus, ArrowRight, ShoppingBag } from "lucide-react";
import { useCartStore } from "@/store/cart";
import { formatPrice } from "@/lib/utils";

export default function CartPage() {
  const items = useCartStore((s) => s.items);
  const updateQuantity = useCartStore((s) => s.updateQuantity);
  const removeItem = useCartStore((s) => s.removeItem);
  const getTotal = useCartStore((s) => s.getTotal);

  const total = getTotal();
  const shipping = total >= 150 ? 0 : 12;

  if (items.length === 0) {
    return (
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">
        <ShoppingBag size={48} className="mx-auto text-parchment-300 mb-4" />
        <h1 className="font-serif text-3xl text-espresso-800 heading-imperfect">
          Your bag is empty
        </h1>
        <p className="mt-2 text-sm text-espresso-400 tracking-editorial">
          Discover something you love.
        </p>
        <Link
          href="/products"
          className="mt-8 inline-flex items-center gap-2 bg-espresso-800 text-parchment-100 px-8 py-3.5 text-sm font-medium tracking-boutique uppercase hover:bg-espresso-700 transition-colors"
        >
          Start Shopping
          <ArrowRight size={16} />
        </Link>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
      <h1 className="font-serif text-3xl lg:text-4xl font-semibold text-espresso-800 heading-imperfect mb-8">
        Your Bag
      </h1>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
        {/* Cart Items */}
        <div className="lg:col-span-2 space-y-4">
          {items.map((item) => (
            <div
              key={`${item.productId}-${item.variantId}`}
              className="card-organic flex gap-4 p-4 bg-parchment-50"
            >
              <div className="w-24 h-28 bg-parchment-100 rounded-sm flex-shrink-0 flex items-center justify-center">
                <span className="font-serif text-parchment-300 text-2xl">
                  {item.product.name.charAt(0)}
                </span>
              </div>
              <div className="flex-1 min-w-0">
                <Link
                  href={`/products/${item.product.id}`}
                  className="font-serif text-base font-medium text-espresso-800 hover:text-gold-600 transition-colors heading-imperfect"
                >
                  {item.product.name}
                </Link>
                {item.variant && (
                  <p className="text-xs text-espresso-400 mt-0.5">
                    {item.variant.options[0]?.label}
                  </p>
                )}
                <p className="text-sm font-medium text-espresso-700 mt-2">
                  {formatPrice(item.product.price)}
                </p>
                <div className="flex items-center gap-3 mt-3">
                  <div className="flex items-center border border-parchment-300">
                    <button
                      onClick={() =>
                        updateQuantity(
                          item.productId,
                          item.variantId,
                          item.quantity - 1
                        )
                      }
                      className="p-1.5 text-espresso-500 hover:text-espresso-800"
                    >
                      <Minus size={14} />
                    </button>
                    <span className="px-3 text-sm text-espresso-800 border-x border-parchment-300 min-w-[2rem] text-center">
                      {item.quantity}
                    </span>
                    <button
                      onClick={() =>
                        updateQuantity(
                          item.productId,
                          item.variantId,
                          item.quantity + 1
                        )
                      }
                      className="p-1.5 text-espresso-500 hover:text-espresso-800"
                    >
                      <Plus size={14} />
                    </button>
                  </div>
                  <button
                    onClick={() => removeItem(item.productId, item.variantId)}
                    className="p-1.5 text-espresso-400 hover:text-clay-500 transition-colors"
                  >
                    <Trash2 size={14} />
                  </button>
                </div>
              </div>
              <div className="text-right">
                <p className="text-sm font-semibold text-espresso-800">
                  {formatPrice(item.product.price * item.quantity)}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Order Summary */}
        <div className="lg:col-span-1">
          <div className="card-organic bg-parchment-50 p-6 sticky top-24">
            <h2 className="font-serif text-xl font-semibold text-espresso-800 heading-imperfect mb-6">
              Order Summary
            </h2>
            <div className="space-y-3 text-sm">
              <div className="flex justify-between text-espresso-500">
                <span>Subtotal</span>
                <span className="text-espresso-700">{formatPrice(total)}</span>
              </div>
              <div className="flex justify-between text-espresso-500">
                <span>Shipping</span>
                <span className="text-espresso-700">
                  {shipping === 0 ? "Free" : formatPrice(shipping)}
                </span>
              </div>
              {shipping === 0 && (
                <p className="text-[10px] text-sage-600 tracking-editorial">
                  Free shipping on orders over $150
                </p>
              )}
              <div className="divider-organic" />
              <div className="flex justify-between font-semibold text-espresso-800">
                <span>Total</span>
                <span>{formatPrice(total + shipping)}</span>
              </div>
            </div>
            <Link
              href="/checkout"
              className="mt-6 block w-full py-3.5 bg-espresso-800 text-parchment-100 text-sm font-medium tracking-boutique uppercase text-center hover:bg-espresso-700 transition-colors"
            >
              Proceed to Checkout
            </Link>
            <Link
              href="/products"
              className="mt-3 block text-center text-xs text-gold-600 hover:text-gold-700 tracking-editorial transition-colors"
            >
              Continue Shopping
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

"use client";

import Link from "next/link";
import { Trash2, Plus, Minus, ArrowRight, ShoppingBag } from "lucide-react";
import { useCart } from "@/store/cart";
import { formatPrice } from "@/lib/utils";
import { BlackTeeMockup, WhiteTeeMockup } from "@/components/product/TeeMockups";

export default function CartPage() {
  const items = useCart((s) => s.items);
  const updateQuantity = useCart((s) => s.updateQuantity);
  const removeItem = useCart((s) => s.removeItem);
  const getTotal = useCart((s) => s.getTotal);
  const total = getTotal();
  const shipping = total >= 150 ? 0 : 12;

  if (items.length === 0) {
    return (
      <div className="max-w-7xl mx-auto px-4 py-20 text-center">
        <ShoppingBag size={48} className="mx-auto text-dark-700 mb-4" />
        <h1 className="font-display text-3xl font-bold text-white">Your bag is empty</h1>
        <p className="mt-2 text-sm text-dark-400">Time to grab something legendary.</p>
        <Link href="/products" className="mt-8 inline-flex items-center gap-2 bg-forest-600 text-white px-8 py-3.5 text-sm font-bold tracking-widest uppercase rounded-xl hover:bg-forest-500 transition-all">
          Start Shopping <ArrowRight size={16} />
        </Link>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
      <h1 className="font-display text-3xl lg:text-4xl font-bold text-white mb-8">Your Bag</h1>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
        {/* Items */}
        <div className="lg:col-span-2 space-y-4">
          {items.map((item) => (
            <div key={`${item.productId}-${item.size}`} className="flex gap-4 p-4 bg-dark-950 border border-dark-800 rounded-2xl">
              {/* Product image */}
              <div className={`w-24 h-28 rounded-xl flex-shrink-0 flex items-center justify-center overflow-hidden ${
                item.product.color === "black" ? "bg-dark-900" : "bg-dark-100"
              }`}>
                {item.product.color === "black" ? (
                  <BlackTeeMockup className="w-16 h-auto" />
                ) : (
                  <WhiteTeeMockup className="w-16 h-auto" />
                )}
              </div>

              <div className="flex-1 min-w-0">
                <Link href={`/products/${item.product.id}`} className="font-display text-base font-bold text-white hover:text-forest-400 transition-colors">
                  {item.product.name}
                </Link>
                <p className="text-xs text-dark-400 mt-0.5 uppercase">Size: {item.size}</p>
                <p className="text-sm font-bold text-forest-400 mt-1">{formatPrice(item.product.price)}</p>

                {/* Quantity controls */}
                <div className="flex items-center gap-3 mt-3">
                  <div className="flex items-center border border-dark-700 rounded-xl overflow-hidden">
                    <button onClick={() => updateQuantity(item.productId, item.size, item.quantity - 1)} className="p-2 text-dark-400 hover:text-white hover:bg-dark-800 transition-colors">
                      <Minus size={14} />
                    </button>
                    <span className="px-3 text-sm font-bold text-white min-w-[2rem] text-center border-x border-dark-700">{item.quantity}</span>
                    <button onClick={() => updateQuantity(item.productId, item.size, item.quantity + 1)} className="p-2 text-dark-400 hover:text-white hover:bg-dark-800 transition-colors">
                      <Plus size={14} />
                    </button>
                  </div>
                  <button onClick={() => removeItem(item.productId, item.size)} className="p-2 text-dark-500 hover:text-red-400 transition-colors">
                    <Trash2 size={14} />
                  </button>
                </div>
              </div>

              <div className="text-right">
                <p className="text-sm font-bold text-white">{formatPrice(item.product.price * item.quantity)}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Summary */}
        <div className="lg:col-span-1">
          <div className="bg-dark-950 border border-dark-800 p-6 rounded-2xl sticky top-24">
            <h2 className="font-display text-xl font-bold text-white mb-6">Order Summary</h2>
            <div className="space-y-3 text-sm">
              <div className="flex justify-between text-dark-400">
                <span>Subtotal</span>
                <span className="text-white font-semibold">{formatPrice(total)}</span>
              </div>
              <div className="flex justify-between text-dark-400">
                <span>Shipping</span>
                <span className="text-white font-semibold">{shipping === 0 ? "Free" : formatPrice(shipping)}</span>
              </div>
              {shipping === 0 && <p className="text-[10px] text-forest-400">Free shipping on orders over $150</p>}
              <div className="border-t border-dark-700 pt-3" />
              <div className="flex justify-between font-bold text-white text-base">
                <span>Total</span>
                <span className="text-forest-400">{formatPrice(total + shipping)}</span>
              </div>
            </div>
            <Link href="/checkout" className="mt-6 block w-full py-3.5 bg-forest-600 text-white text-sm font-bold tracking-widest uppercase text-center rounded-xl hover:bg-forest-500 transition-all">
              Checkout
            </Link>
            <Link href="/products" className="mt-3 block text-center text-xs text-dark-400 hover:text-forest-400 transition-colors">
              Continue Shopping
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

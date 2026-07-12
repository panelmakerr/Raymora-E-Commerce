"use client";

import { useState } from "react";
import { useCart } from "@/store/cart";
import { formatPrice } from "@/lib/utils";
import { Lock, CreditCard, Check } from "lucide-react";
import Link from "next/link";

export default function CheckoutPage() {
  const items = useCart((s) => s.items);
  const getTotal = useCart((s) => s.getTotal);
  const clearCart = useCart((s) => s.clearCart);
  const [step, setStep] = useState(1);
  const [done, setDone] = useState(false);
  const total = getTotal();
  const shipping = total >= 150 ? 0 : 12;

  if (items.length === 0 && !done) {
    return (
      <div className="max-w-7xl mx-auto px-4 py-20 text-center">
        <h1 className="font-display text-3xl font-bold text-white">Nothing to checkout</h1>
        <Link href="/products" className="mt-4 inline-block text-forest-400 text-sm">Go shopping</Link>
      </div>
    );
  }

  if (done) {
    return (
      <div className="max-w-7xl mx-auto px-4 py-20 text-center">
        <div className="w-20 h-20 bg-forest-500/20 rounded-full flex items-center justify-center mx-auto mb-6"><Check size={32} className="text-forest-400" /></div>
        <h1 className="font-display text-3xl font-bold text-white mb-3">Order Placed!</h1>
        <p className="text-dark-400 max-w-md mx-auto">Thank you. You&apos;ll receive a confirmation email with tracking details.</p>
        <Link href="/products" className="mt-8 inline-block bg-forest-600 text-white px-8 py-3 rounded-xl text-sm font-bold hover:bg-forest-500">Continue Shopping</Link>
      </div>
    );
  }

  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
      <div className="flex items-center justify-center gap-2 text-xs text-dark-500 mb-8"><Lock size={12} /> Secure checkout</div>

      {/* Steps */}
      <div className="flex items-center justify-center gap-6 mb-10">
        {["Info", "Shipping", "Pay"].map((label, i) => (
          <div key={label} className="flex items-center gap-2">
            <span className={`w-7 h-7 rounded-full flex items-center justify-center text-xs font-bold ${step > i+1 ? "bg-forest-500 text-white" : step === i+1 ? "bg-forest-600 text-white" : "bg-dark-800 text-dark-500"}`}>
              {step > i+1 ? "✓" : i+1}
            </span>
            <span className={`text-sm hidden sm:inline ${step === i+1 ? "text-white font-semibold" : "text-dark-500"}`}>{label}</span>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-5 gap-10">
        <div className="lg:col-span-3">
          {step === 1 && (
            <div className="space-y-4">
              <h2 className="font-display text-xl font-bold text-white">Contact & Shipping</h2>
              <input type="email" placeholder="Email" className="w-full px-4 py-3 text-sm bg-dark-900 border border-dark-700 text-white placeholder:text-dark-500 rounded-xl" />
              <div className="grid grid-cols-2 gap-4">
                <input type="text" placeholder="First name" className="w-full px-4 py-3 text-sm bg-dark-900 border border-dark-700 text-white placeholder:text-dark-500 rounded-xl" />
                <input type="text" placeholder="Last name" className="w-full px-4 py-3 text-sm bg-dark-900 border border-dark-700 text-white placeholder:text-dark-500 rounded-xl" />
              </div>
              <input type="text" placeholder="Address" className="w-full px-4 py-3 text-sm bg-dark-900 border border-dark-700 text-white placeholder:text-dark-500 rounded-xl" />
              <div className="grid grid-cols-3 gap-4">
                <input type="text" placeholder="City" className="w-full px-4 py-3 text-sm bg-dark-900 border border-dark-700 text-white placeholder:text-dark-500 rounded-xl" />
                <input type="text" placeholder="State" className="w-full px-4 py-3 text-sm bg-dark-900 border border-dark-700 text-white placeholder:text-dark-500 rounded-xl" />
                <input type="text" placeholder="ZIP" className="w-full px-4 py-3 text-sm bg-dark-900 border border-dark-700 text-white placeholder:text-dark-500 rounded-xl" />
              </div>
              <button onClick={() => setStep(2)} className="w-full py-3.5 bg-forest-600 text-white text-sm font-bold tracking-widest uppercase rounded-xl hover:bg-forest-500 transition-all">Continue to Shipping</button>
            </div>
          )}
          {step === 2 && (
            <div className="space-y-4">
              <h2 className="font-display text-xl font-bold text-white">Shipping Method</h2>
              <label className="flex items-center gap-4 p-4 bg-dark-900 border border-forest-500/30 rounded-xl cursor-pointer">
                <input type="radio" name="ship" defaultChecked className="accent-forest-500" />
                <div className="flex-1"><p className="text-sm font-semibold text-white">Standard</p><p className="text-xs text-dark-400">5-7 business days</p></div>
                <span className="text-sm font-bold text-forest-400">{shipping === 0 ? "Free" : formatPrice(shipping)}</span>
              </label>
              <label className="flex items-center gap-4 p-4 bg-dark-900 border border-dark-700 rounded-xl cursor-pointer">
                <input type="radio" name="ship" className="accent-forest-500" />
                <div className="flex-1"><p className="text-sm font-semibold text-white">Express</p><p className="text-xs text-dark-400">2-3 business days</p></div>
                <span className="text-sm font-bold text-white">$24</span>
              </label>
              <div className="flex gap-3">
                <button onClick={() => setStep(1)} className="px-6 py-3 border border-dark-700 text-sm text-dark-300 rounded-xl hover:bg-dark-800">Back</button>
                <button onClick={() => setStep(3)} className="flex-1 py-3 bg-forest-600 text-white text-sm font-bold tracking-widest uppercase rounded-xl hover:bg-forest-500">Continue to Payment</button>
              </div>
            </div>
          )}
          {step === 3 && (
            <div className="space-y-4">
              <h2 className="font-display text-xl font-bold text-white">Payment</h2>
              <div className="p-5 bg-dark-900 border border-dark-700 rounded-xl">
                <div className="flex items-center gap-2 mb-4"><CreditCard size={18} className="text-forest-400" /><span className="text-sm font-semibold text-white">Credit Card</span></div>
                <div className="space-y-3">
                  <input type="text" placeholder="Card number" className="w-full px-4 py-3 text-sm bg-dark-950 border border-dark-700 text-white placeholder:text-dark-500 rounded-xl" />
                  <div className="grid grid-cols-2 gap-3">
                    <input type="text" placeholder="MM / YY" className="w-full px-4 py-3 text-sm bg-dark-950 border border-dark-700 text-white placeholder:text-dark-500 rounded-xl" />
                    <input type="text" placeholder="CVC" className="w-full px-4 py-3 text-sm bg-dark-950 border border-dark-700 text-white placeholder:text-dark-500 rounded-xl" />
                  </div>
                  <input type="text" placeholder="Name on card" className="w-full px-4 py-3 text-sm bg-dark-950 border border-dark-700 text-white placeholder:text-dark-500 rounded-xl" />
                </div>
              </div>
              <div className="flex gap-3">
                <button onClick={() => setStep(2)} className="px-6 py-3 border border-dark-700 text-sm text-dark-300 rounded-xl hover:bg-dark-800">Back</button>
                <button onClick={() => { clearCart(); setDone(true); }} className="flex-1 py-3 bg-forest-500 text-white text-sm font-bold tracking-widest uppercase rounded-xl hover:bg-forest-400 flex items-center justify-center gap-2">
                  <Lock size={14} /> Pay {formatPrice(total + shipping)}
                </button>
              </div>
            </div>
          )}
        </div>

        {/* Summary */}
        <div className="lg:col-span-2">
          <div className="bg-dark-950 border border-dark-800 p-6 rounded-2xl sticky top-24">
            <h3 className="font-display text-lg font-bold text-white mb-4">Your Order</h3>
            <div className="space-y-3 mb-4">
              {items.map((item) => (
                <div key={`${item.productId}-${item.size}`} className="flex gap-3">
                  <div className={`w-12 h-14 rounded-lg flex-shrink-0 flex items-center justify-center ${item.product.color === "black" ? "bg-dark-900" : "bg-dark-100"}`}>
                    <span className={`text-xs font-bold ${item.product.color === "black" ? "text-dark-600" : "text-dark-400"}`}>{item.product.name.charAt(0)}</span>
                    <span className="absolute -top-1 -right-1 bg-forest-500 text-white text-[9px] w-3.5 h-3.5 flex items-center justify-center rounded-full font-bold">{item.quantity}</span>
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-xs font-semibold text-white truncate">{item.product.name}</p>
                    <p className="text-[10px] text-dark-400 uppercase">Size: {item.size}</p>
                  </div>
                  <p className="text-xs font-bold text-white">{formatPrice(item.product.price * item.quantity)}</p>
                </div>
              ))}
            </div>
            <div className="border-t border-dark-700 pt-4 space-y-2 text-sm">
              <div className="flex justify-between text-dark-400"><span>Subtotal</span><span>{formatPrice(total)}</span></div>
              <div className="flex justify-between text-dark-400"><span>Shipping</span><span>{shipping === 0 ? "Free" : formatPrice(shipping)}</span></div>
              <div className="border-t border-dark-700 pt-2" />
              <div className="flex justify-between font-bold text-white"><span>Total</span><span className="text-forest-400">{formatPrice(total + shipping)}</span></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

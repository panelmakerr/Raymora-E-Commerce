"use client";

import { useState } from "react";
import { useCartStore } from "@/store/cart";
import { formatPrice } from "@/lib/utils";
import { Lock, Truck, CreditCard } from "lucide-react";

export default function CheckoutPage() {
  const items = useCartStore((s) => s.items);
  const getTotal = useCartStore((s) => s.getTotal);
  const [step, setStep] = useState(1);
  const total = getTotal();
  const shipping = total >= 150 ? 0 : 12;

  if (items.length === 0) {
    return (
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">
        <h1 className="font-serif text-3xl text-espresso-800">
          Nothing to checkout
        </h1>
      </div>
    );
  }

  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
      {/* Security Bar */}
      <div className="flex items-center justify-center gap-2 text-xs text-espresso-400 tracking-editorial mb-8">
        <Lock size={12} />
        <span>Secure checkout powered by Stripe</span>
      </div>

      {/* Progress Steps */}
      <div className="flex items-center justify-center gap-8 mb-10">
        {["Information", "Shipping", "Payment"].map((label, i) => (
          <div key={label} className="flex items-center gap-2">
            <span
              className={`w-7 h-7 rounded-full flex items-center justify-center text-xs font-semibold ${
                step > i + 1
                  ? "bg-sage-500 text-white"
                  : step === i + 1
                  ? "bg-gold-500 text-white"
                  : "bg-parchment-200 text-espresso-400"
              }`}
            >
              {step > i + 1 ? "✓" : i + 1}
            </span>
            <span
              className={`text-sm hidden sm:inline ${
                step === i + 1 ? "text-espresso-800 font-medium" : "text-espresso-400"
              }`}
            >
              {label}
            </span>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-5 gap-10">
        {/* Form */}
        <div className="lg:col-span-3">
          {step === 1 && (
            <div className="space-y-6 animate-fade-in">
              <h2 className="font-serif text-xl font-semibold text-espresso-800 heading-imperfect">
                Contact & Shipping
              </h2>
              <div className="space-y-4">
                <input
                  type="email"
                  placeholder="Email address"
                  className="w-full px-4 py-3 text-sm bg-parchment-50 border border-parchment-300 text-espresso-800 placeholder:text-espresso-400"
                />
                <div className="grid grid-cols-2 gap-4">
                  <input
                    type="text"
                    placeholder="First name"
                    className="w-full px-4 py-3 text-sm bg-parchment-50 border border-parchment-300 text-espresso-800 placeholder:text-espresso-400"
                  />
                  <input
                    type="text"
                    placeholder="Last name"
                    className="w-full px-4 py-3 text-sm bg-parchment-50 border border-parchment-300 text-espresso-800 placeholder:text-espresso-400"
                  />
                </div>
                <input
                  type="text"
                  placeholder="Address"
                  className="w-full px-4 py-3 text-sm bg-parchment-50 border border-parchment-300 text-espresso-800 placeholder:text-espresso-400"
                />
                <input
                  type="text"
                  placeholder="Apartment, suite, etc. (optional)"
                  className="w-full px-4 py-3 text-sm bg-parchment-50 border border-parchment-300 text-espresso-800 placeholder:text-espresso-400"
                />
                <div className="grid grid-cols-3 gap-4">
                  <input
                    type="text"
                    placeholder="City"
                    className="w-full px-4 py-3 text-sm bg-parchment-50 border border-parchment-300 text-espresso-800 placeholder:text-espresso-400"
                  />
                  <input
                    type="text"
                    placeholder="State"
                    className="w-full px-4 py-3 text-sm bg-parchment-50 border border-parchment-300 text-espresso-800 placeholder:text-espresso-400"
                  />
                  <input
                    type="text"
                    placeholder="ZIP"
                    className="w-full px-4 py-3 text-sm bg-parchment-50 border border-parchment-300 text-espresso-800 placeholder:text-espresso-400"
                  />
                </div>
                <input
                  type="tel"
                  placeholder="Phone"
                  className="w-full px-4 py-3 text-sm bg-parchment-50 border border-parchment-300 text-espresso-800 placeholder:text-espresso-400"
                />
              </div>
              <button
                onClick={() => setStep(2)}
                className="w-full py-3.5 bg-espresso-800 text-parchment-100 text-sm font-medium tracking-boutique uppercase hover:bg-espresso-700 transition-colors"
              >
                Continue to Shipping
              </button>
            </div>
          )}

          {step === 2 && (
            <div className="space-y-6 animate-fade-in">
              <h2 className="font-serif text-xl font-semibold text-espresso-800 heading-imperfect">
                Shipping Method
              </h2>
              <div className="space-y-3">
                <label className="card-organic flex items-center gap-4 p-4 bg-parchment-50 cursor-pointer border-gold-500">
                  <input
                    type="radio"
                    name="shipping"
                    defaultChecked
                    className="accent-gold-500"
                  />
                  <Truck size={18} className="text-gold-600" />
                  <div className="flex-1">
                    <p className="text-sm font-medium text-espresso-800">
                      Standard Shipping
                    </p>
                    <p className="text-xs text-espresso-400">
                      5-7 business days
                    </p>
                  </div>
                  <span className="text-sm font-medium text-espresso-700">
                    {shipping === 0 ? "Free" : formatPrice(shipping)}
                  </span>
                </label>
                <label className="card-organic flex items-center gap-4 p-4 bg-parchment-50 cursor-pointer">
                  <input type="radio" name="shipping" className="accent-gold-500" />
                  <Truck size={18} className="text-espresso-400" />
                  <div className="flex-1">
                    <p className="text-sm font-medium text-espresso-800">
                      Express Shipping
                    </p>
                    <p className="text-xs text-espresso-400">
                      2-3 business days
                    </p>
                  </div>
                  <span className="text-sm font-medium text-espresso-700">
                    $24.00
                  </span>
                </label>
              </div>
              <div className="flex gap-3">
                <button
                  onClick={() => setStep(1)}
                  className="px-6 py-3 border border-parchment-300 text-sm text-espresso-600 tracking-editorial hover:bg-parchment-100 transition-colors"
                >
                  Back
                </button>
                <button
                  onClick={() => setStep(3)}
                  className="flex-1 py-3 bg-espresso-800 text-parchment-100 text-sm font-medium tracking-boutique uppercase hover:bg-espresso-700 transition-colors"
                >
                  Continue to Payment
                </button>
              </div>
            </div>
          )}

          {step === 3 && (
            <div className="space-y-6 animate-fade-in">
              <h2 className="font-serif text-xl font-semibold text-espresso-800 heading-imperfect">
                Payment
              </h2>
              <div className="space-y-4">
                <div className="card-organic p-4 bg-parchment-50">
                  <div className="flex items-center gap-3 mb-4">
                    <CreditCard size={18} className="text-gold-600" />
                    <span className="text-sm font-medium text-espresso-800">
                      Credit Card
                    </span>
                  </div>
                  <div className="space-y-3">
                    <input
                      type="text"
                      placeholder="Card number"
                      className="w-full px-4 py-3 text-sm bg-parchment-50 border border-parchment-300 text-espresso-800 placeholder:text-espresso-400"
                    />
                    <div className="grid grid-cols-2 gap-3">
                      <input
                        type="text"
                        placeholder="MM / YY"
                        className="w-full px-4 py-3 text-sm bg-parchment-50 border border-parchment-300 text-espresso-800 placeholder:text-espresso-400"
                      />
                      <input
                        type="text"
                        placeholder="CVC"
                        className="w-full px-4 py-3 text-sm bg-parchment-50 border border-parchment-300 text-espresso-800 placeholder:text-espresso-400"
                      />
                    </div>
                    <input
                      type="text"
                      placeholder="Name on card"
                      className="w-full px-4 py-3 text-sm bg-parchment-50 border border-parchment-300 text-espresso-800 placeholder:text-espresso-400"
                    />
                  </div>
                </div>
              </div>
              <div className="flex gap-3">
                <button
                  onClick={() => setStep(2)}
                  className="px-6 py-3 border border-parchment-300 text-sm text-espresso-600 tracking-editorial hover:bg-parchment-100 transition-colors"
                >
                  Back
                </button>
                <button className="flex-1 py-3 bg-gold-500 text-white text-sm font-medium tracking-boutique uppercase hover:bg-gold-600 transition-colors flex items-center justify-center gap-2">
                  <Lock size={14} />
                  Pay {formatPrice(total + shipping)}
                </button>
              </div>
            </div>
          )}
        </div>

        {/* Order Summary */}
        <div className="lg:col-span-2">
          <div className="card-organic bg-parchment-50 p-6 sticky top-24">
            <h3 className="font-serif text-lg font-semibold text-espresso-800 heading-imperfect mb-4">
              Your Order
            </h3>
            <div className="space-y-3 mb-4">
              {items.map((item) => (
                <div
                  key={`${item.productId}-${item.variantId}`}
                  className="flex gap-3"
                >
                  <div className="w-14 h-16 bg-parchment-100 rounded-sm flex-shrink-0 flex items-center justify-center relative">
                    <span className="font-serif text-parchment-300 text-sm">
                      {item.product.name.charAt(0)}
                    </span>
                    <span className="absolute -top-1.5 -right-1.5 bg-espresso-600 text-white text-[10px] w-4 h-4 flex items-center justify-center rounded-full">
                      {item.quantity}
                    </span>
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-xs font-medium text-espresso-800 truncate">
                      {item.product.name}
                    </p>
                    {item.variant && (
                      <p className="text-[10px] text-espresso-400">
                        {item.variant.options[0]?.label}
                      </p>
                    )}
                  </div>
                  <p className="text-xs font-medium text-espresso-700">
                    {formatPrice(item.product.price * item.quantity)}
                  </p>
                </div>
              ))}
            </div>
            <div className="divider-organic mb-4" />
            <div className="space-y-2 text-sm">
              <div className="flex justify-between text-espresso-500">
                <span>Subtotal</span>
                <span>{formatPrice(total)}</span>
              </div>
              <div className="flex justify-between text-espresso-500">
                <span>Shipping</span>
                <span>{shipping === 0 ? "Free" : formatPrice(shipping)}</span>
              </div>
              <div className="divider-organic" />
              <div className="flex justify-between font-semibold text-espresso-800 text-base">
                <span>Total</span>
                <span>{formatPrice(total + shipping)}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

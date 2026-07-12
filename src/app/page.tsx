"use client";

import Link from "next/link";
import { ArrowRight, Zap, Shield, RotateCcw, Truck } from "lucide-react";
import ProductCard from "@/components/product/ProductCard";
import { products } from "@/data/products";

export default function HomePage() {
  return (
    <>
      {/* Hero */}
      <section className="relative min-h-[90vh] flex items-center overflow-hidden">
        <div className="absolute inset-0 bg-hero-gradient" />
        <div className="absolute inset-0 grid-pattern" />
        <div className="absolute top-20 left-10 w-72 h-72 bg-forest-500/10 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-forest-600/5 rounded-full blur-3xl" />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-forest-500/10 border border-forest-500/20 rounded-full mb-6">
            <Zap size={14} className="text-forest-400" />
            <span className="text-xs font-bold text-forest-300 tracking-widest uppercase">Limited Drop — 2025</span>
          </div>

          <h1 className="font-display text-5xl sm:text-7xl lg:text-8xl font-bold text-white leading-[0.95] mb-6">
            Wear<br/>
            <span className="text-3d">Heritage</span>
          </h1>

          <p className="text-lg text-dark-300 max-w-lg mb-8 leading-relaxed">
            Two exclusive tees. Dutch windmill heritage meets distribution culture.
            Premium cotton, online exclusive — printed fresh when you order.
          </p>

          <div className="flex flex-wrap gap-4">
            <Link href="/products" className="inline-flex items-center gap-2 bg-forest-600 text-white px-8 py-4 text-sm font-bold tracking-widest uppercase rounded-xl hover:bg-forest-500 transition-all shadow-glow">
              Shop Now <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      {/* Trust */}
      <section className="border-y border-dark-800 bg-[#0a0a0a]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { icon: Truck, text: "Free shipping $150+" },
              { icon: Shield, text: "Premium quality" },
              { icon: RotateCcw, text: "30-day returns" },
              { icon: Zap, text: "Made on demand" },
            ].map((item, i) => (
              <div key={i} className="flex items-center gap-2">
                <item.icon size={14} className="text-forest-400" />
                <span className="text-xs text-dark-400">{item.text}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Products */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <h2 className="font-display text-3xl lg:text-5xl font-bold text-white text-center mb-3">
          The <span className="text-3d">Collection</span>
        </h2>
        <p className="text-center text-sm text-dark-400 mb-12">Two tees. Zero compromise.</p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 max-w-3xl mx-auto">
          {products.map((p) => <ProductCard key={p.id} product={p} />)}
        </div>
      </section>

      {/* Features */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-20">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            { title: "Premium Cotton", desc: "260 GSM heavyweight for black, 220 GSM for white. Built to last.", icon: "🧵" },
            { title: "Heritage Designs", desc: "Dutch windmill art and distribution culture graphics.", icon: "🎨" },
            { title: "Print on Demand", desc: "Made fresh when you order. No waste, no stock — just yours.", icon: "⚡" },
          ].map((f, i) => (
            <div key={i} className="p-6 bg-dark-950 border border-dark-800 rounded-2xl card-hover">
              <span className="text-3xl">{f.icon}</span>
              <h3 className="font-display text-lg font-bold text-white mt-3">{f.title}</h3>
              <p className="text-sm text-dark-400 mt-2">{f.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Newsletter */}
      <section className="border-t border-dark-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 text-center">
          <h2 className="font-display text-2xl font-bold text-white mb-3">Join the <span className="text-forest-400">Drop List</span></h2>
          <p className="text-sm text-dark-400 mb-6 max-w-md mx-auto">First access to new drops and exclusive colors.</p>
          <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
            <input type="email" placeholder="your@email.com" className="flex-1 px-5 py-3 bg-dark-900 border border-dark-700 text-white text-sm placeholder:text-dark-500 rounded-xl" />
            <button className="px-8 py-3 bg-forest-600 text-white text-sm font-bold tracking-widest uppercase rounded-xl hover:bg-forest-500 transition-all">Subscribe</button>
          </div>
        </div>
      </section>
    </>
  );
}

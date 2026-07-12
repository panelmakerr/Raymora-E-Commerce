"use client";

import Link from "next/link";
import { ArrowRight, Truck, Shield, RotateCcw, Zap } from "lucide-react";
import ProductCard from "@/components/product/ProductCard";
import Text3D from "@/components/ui/Text3D";
import ParallaxLayer from "@/components/ui/ParallaxLayer";
import { products } from "@/data/products";

export default function HomePage() {
  return (
    <>
      {/* Hero */}
      <section className="relative min-h-[90vh] flex items-center overflow-hidden grid-pattern scanline">
        {/* Background layers */}
        <div className="absolute inset-0 bg-hero-gradient" />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-dark-950" />

        {/* Floating orbs */}
        <div className="absolute top-20 left-10 w-72 h-72 bg-forest-500/10 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-lime-500/5 rounded-full blur-3xl animate-float-delayed" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-forest-600/5 rounded-full blur-[100px]" />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="max-w-3xl">
            <ParallaxLayer speed={0.3}>
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-forest-500/10 border border-forest-500/20 rounded-full mb-6">
                <Zap size={14} className="text-lime-400" />
                <span className="text-xs font-semibold text-forest-300 tracking-widest uppercase">
                  Limited Drop — 2025
                </span>
              </div>
            </ParallaxLayer>

            <ParallaxLayer speed={0.2}>
              <h1 className="font-display text-5xl sm:text-7xl lg:text-8xl font-bold text-white leading-[0.95] mb-6">
                <Text3D text="Wear" className="text-5xl sm:text-7xl lg:text-8xl" depth={4} color="#22C55E" />
                <br />
                <span className="text-3d-emboss">
                  <span className="text-3d-lime">Her</span>
                  <span className="text-white">itage</span>
                </span>
              </h1>
            </ParallaxLayer>

            <ParallaxLayer speed={0.15}>
              <p className="text-lg sm:text-xl text-dark-300 max-w-lg leading-relaxed mb-8">
                Two exclusive tees. Dutch windmill heritage meets distribution culture.
                Premium cotton, limited runs, designed to stand out.
              </p>
            </ParallaxLayer>

            <ParallaxLayer speed={0.1}>
              <div className="flex flex-wrap gap-4">
                <Link
                  href="/products"
                  className="group inline-flex items-center gap-2 bg-gradient-to-r from-forest-600 to-lime-600 text-white px-8 py-4 text-sm font-bold tracking-widest uppercase rounded-xl hover:from-forest-500 hover:to-lime-500 transition-all duration-300 shadow-lg hover:shadow-glow-green"
                >
                  Shop Now
                  <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                </Link>
                <Link
                  href="/products"
                  className="inline-flex items-center gap-2 border border-dark-600 text-dark-200 px-8 py-4 text-sm font-bold tracking-widest uppercase rounded-xl hover:border-forest-600 hover:text-forest-400 transition-all duration-300"
                >
                  View Collections
                </Link>
              </div>
            </ParallaxLayer>
          </div>
        </div>
      </section>

      {/* Trust Bar */}
      <section className="border-y border-dark-800 bg-dark-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { icon: Truck, text: "Free shipping over $150" },
              { icon: Shield, text: "Premium quality guaranteed" },
              { icon: RotateCcw, text: "30-day easy returns" },
              { icon: Zap, text: "Limited edition drops" },
            ].map((item, i) => (
              <div key={i} className="flex items-center gap-3">
                <div className="p-2 bg-forest-500/10 rounded-lg">
                  <item.icon size={16} className="text-forest-400" />
                </div>
                <span className="text-xs text-dark-400 font-medium tracking-wide">
                  {item.text}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center mb-14">
          <ParallaxLayer speed={0.2}>
            <h2 className="font-display text-3xl lg:text-5xl font-bold text-white mb-3">
              The{" "}
              <span className="text-3d-green">Collection</span>
            </h2>
            <p className="text-sm text-dark-400 tracking-widest uppercase">
              Two tees. Zero compromise.
            </p>
          </ParallaxLayer>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 max-w-3xl mx-auto">
          {products.map((product, i) => (
            <ParallaxLayer key={product.id} speed={0.1 * (i + 1)}>
              <ProductCard product={product} />
            </ParallaxLayer>
          ))}
        </div>
      </section>

      {/* 3D Typography Section */}
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-dark-950 via-forest-950/20 to-dark-950" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <ParallaxLayer speed={0.3}>
            <div className="mb-6">
              <span className="font-display text-6xl sm:text-8xl lg:text-[10rem] font-bold text-dark-900/50 leading-none select-none">
                RM
              </span>
            </div>
            <h2 className="font-display text-3xl lg:text-5xl font-bold text-white -mt-8 sm:-mt-12 lg:-mt-16 relative z-10">
              Heritage in Every{" "}
              <span className="text-3d-lime">Thread</span>
            </h2>
          </ParallaxLayer>
          <ParallaxLayer speed={0.15}>
            <p className="mt-6 text-dark-400 max-w-xl mx-auto leading-relaxed">
              From Dutch windmills to distribution culture, each design tells a
              story rooted in community and craft.
            </p>
          </ParallaxLayer>
        </div>
      </section>

      {/* Features Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            {
              title: "Premium Cotton",
              desc: "260 GSM heavyweight combed cotton for the black tee, 220 GSM for white. Built to last.",
              icon: "🧵",
            },
            {
              title: "Heritage Designs",
              desc: "Dutch windmill art and tropical distribution graphics screen-printed with precision.",
              icon: "🎨",
            },
            {
              title: "Limited Runs",
              desc: "Small batch production. When they're gone, they're gone.",
              icon: "⚡",
            },
          ].map((feature, i) => (
            <ParallaxLayer key={i} speed={0.1 * (i + 1)}>
              <div className="card-3d p-6 bg-dark-900/50 border border-dark-800 rounded-xl group">
                <span className="text-3xl mb-4 block">{feature.icon}</span>
                <h3 className="font-display text-lg font-bold text-white mb-2 group-hover:text-forest-400 transition-colors">
                  {feature.title}
                </h3>
                <p className="text-sm text-dark-400 leading-relaxed">
                  {feature.desc}
                </p>
              </div>
            </ParallaxLayer>
          ))}
        </div>
      </section>

      {/* Newsletter */}
      <section className="border-t border-dark-800 bg-dark-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 text-center">
          <h2 className="font-display text-2xl lg:text-3xl font-bold text-white mb-3">
            Join the <span className="text-forest-400">Drop List</span>
          </h2>
          <p className="text-sm text-dark-400 tracking-wide max-w-md mx-auto mb-8">
            Be first to know about new releases, exclusive colors, and early access.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 max-w-md mx-auto">
            <input
              type="email"
              placeholder="your@email.com"
              className="w-full sm:flex-1 px-5 py-3 bg-dark-900 border border-dark-700 text-white text-sm placeholder:text-dark-500 rounded-xl focus:border-forest-500 transition-colors"
            />
            <button className="w-full sm:w-auto px-8 py-3 bg-gradient-to-r from-forest-600 to-lime-600 text-white text-sm font-bold tracking-widest uppercase rounded-xl hover:from-forest-500 hover:to-lime-500 transition-all">
              Subscribe
            </button>
          </div>
        </div>
      </section>
    </>
  );
}

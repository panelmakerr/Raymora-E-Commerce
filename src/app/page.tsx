"use client";

import Link from "next/link";
import { ArrowRight, Truck, Shield, Leaf, RotateCcw } from "lucide-react";
import ProductCard from "@/components/product/ProductCard";
import { products, categories } from "@/data/products";

export default function HomePage() {
  const featured = products.slice(0, 4);

  return (
    <>
      {/* Hero */}
      <section className="relative min-h-[85vh] flex items-center texture-overlay overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-parchment-50 via-parchment-100 to-parchment-200" />
        <div className="absolute inset-0 bg-grain opacity-30" />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="max-w-2xl">
            <p className="text-sm font-medium text-gold-600 tracking-boutique uppercase mb-4 animate-fade-in">
              Crafted with intention
            </p>
            <h1 className="font-serif text-5xl sm:text-6xl lg:text-7xl font-semibold text-espresso-800 leading-[1.1] heading-imperfect animate-fade-in">
              Objects that
              <br />
              <span className="italic text-gold-600">carry stories</span>
            </h1>
            <p className="mt-6 text-lg text-espresso-500 max-w-lg leading-relaxed animate-fade-in animation-delay-200">
              Every piece in our collection is made by hand, shaped by tradition,
              and designed to age beautifully alongside you.
            </p>
            <div className="mt-8 flex flex-wrap gap-4 animate-fade-in animation-delay-300">
              <Link
                href="/products"
                className="inline-flex items-center gap-2 bg-espresso-800 text-parchment-100 px-8 py-3.5 text-sm font-medium tracking-boutique uppercase hover:bg-espresso-700 transition-colors"
              >
                Shop Collection
                <ArrowRight size={16} />
              </Link>
              <Link
                href="#"
                className="inline-flex items-center gap-2 border border-espresso-300 text-espresso-700 px-8 py-3.5 text-sm font-medium tracking-boutique uppercase hover:bg-parchment-100 transition-colors"
              >
                Our Story
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Bar */}
      <section className="bg-parchment-100 border-y border-parchment-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { icon: Truck, text: "Free shipping over $150" },
              { icon: Shield, text: "2-year warranty" },
              { icon: Leaf, text: "Sustainably sourced" },
              { icon: RotateCcw, text: "30-day returns" },
            ].map((item, i) => (
              <div key={i} className="flex items-center gap-3">
                <item.icon size={18} className="text-gold-600 flex-shrink-0" />
                <span className="text-xs text-espresso-600 tracking-editorial">
                  {item.text}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center mb-12">
          <h2 className="font-serif text-3xl lg:text-4xl font-semibold text-espresso-800 heading-imperfect">
            Explore by Craft
          </h2>
          <p className="mt-3 text-sm text-espresso-400 tracking-editorial">
            Four traditions, infinite possibilities
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {categories.map((cat) => (
            <Link
              key={cat.id}
              href={`/products?category=${cat.slug}`}
              className="card-organic group relative aspect-[3/4] bg-parchment-100 rounded-sm overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-t from-espresso-800/60 via-espresso-800/20 to-transparent z-10" />
              <div className="absolute inset-0 bg-gradient-to-br from-parchment-200 to-parchment-300" />
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="font-serif text-parchment-300 text-6xl font-semibold opacity-30">
                  {cat.name.charAt(0)}
                </span>
              </div>
              <div className="absolute bottom-0 left-0 right-0 p-5 z-20">
                <h3 className="font-serif text-xl font-medium text-parchment-100 heading-imperfect">
                  {cat.name}
                </h3>
                <p className="mt-1 text-xs text-parchment-300 tracking-editorial">
                  {cat.productCount} pieces
                </p>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Featured Products */}
      <section className="bg-parchment-100/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="flex items-end justify-between mb-10">
            <div>
              <h2 className="font-serif text-3xl lg:text-4xl font-semibold text-espresso-800 heading-imperfect">
                Recently Curated
              </h2>
              <p className="mt-3 text-sm text-espresso-400 tracking-editorial">
                New arrivals from our artisan network
              </p>
            </div>
            <Link
              href="/products"
              className="hidden sm:flex items-center gap-1 text-sm font-medium text-gold-600 hover:text-gold-700 tracking-editorial transition-colors"
            >
              View all
              <ArrowRight size={14} />
            </Link>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {featured.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
          <div className="mt-8 text-center sm:hidden">
            <Link
              href="/products"
              className="inline-flex items-center gap-1 text-sm font-medium text-gold-600 tracking-editorial"
            >
              View all products
              <ArrowRight size={14} />
            </Link>
          </div>
        </div>
      </section>

      {/* Brand Story */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="aspect-[4/3] bg-parchment-100 rounded-sm card-organic overflow-hidden">
            <div className="w-full h-full bg-gradient-to-br from-parchment-200 via-parchment-100 to-clay-100 flex items-center justify-center">
              <div className="text-center">
                <span className="font-serif text-5xl text-parchment-300 opacity-40">
                  R
                </span>
              </div>
            </div>
          </div>
          <div>
            <p className="text-sm font-medium text-gold-600 tracking-boutique uppercase mb-3">
              Our Philosophy
            </p>
            <h2 className="font-serif text-3xl lg:text-4xl font-semibold text-espresso-800 heading-imperfect leading-tight">
              Slow craft in a
              <br />
              fast-moving world
            </h2>
            <p className="mt-6 text-espresso-500 leading-relaxed">
              We partner with 40+ independent artisans across 12 countries,
              honoring techniques passed down through generations. Every purchase
              supports a maker, their family, and their craft.
            </p>
            <p className="mt-4 text-espresso-500 leading-relaxed">
              We believe in fewer, better things. Objects made with integrity,
              designed to be lived with, and crafted to develop character over
              time.
            </p>
            <Link
              href="#"
              className="inline-flex items-center gap-2 mt-8 text-sm font-medium text-gold-600 hover:text-gold-700 tracking-boutique uppercase transition-colors"
            >
              Meet our artisans
              <ArrowRight size={14} />
            </Link>
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="bg-espresso-800 texture-overlay">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 text-center">
          <h2 className="font-serif text-2xl lg:text-3xl font-semibold text-parchment-100 heading-imperfect">
            Join the slow living movement
          </h2>
          <p className="mt-3 text-sm text-parchment-400 tracking-editorial max-w-md mx-auto">
            First access to new collections, artisan stories, and a 10% welcome
            gift.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-3 max-w-md mx-auto">
            <input
              type="email"
              placeholder="your@email.com"
              className="w-full sm:flex-1 px-5 py-3 bg-espresso-700 border border-espresso-600 text-parchment-200 text-sm placeholder:text-parchment-500 focus:border-gold-500 transition-colors"
            />
            <button className="w-full sm:w-auto px-8 py-3 bg-gold-500 text-white text-sm font-medium tracking-boutique uppercase hover:bg-gold-600 transition-colors">
              Subscribe
            </button>
          </div>
        </div>
      </section>
    </>
  );
}

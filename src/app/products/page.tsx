"use client";

import { useState } from "react";
import { Grid3X3, LayoutList } from "lucide-react";
import ProductCard from "@/components/product/ProductCard";
import { products, categories } from "@/data/products";

export default function ProductsPage() {
  const [view, setView] = useState<"grid" | "list">("grid");
  const [selectedCategory, setSelectedCategory] = useState<string>("all");
  const [sortBy, setSortBy] = useState("newest");

  const filtered =
    selectedCategory === "all"
      ? products
      : products.filter((p) => p.category === selectedCategory);

  const sorted = [...filtered].sort((a, b) => {
    switch (sortBy) {
      case "price-low":
        return a.price - b.price;
      case "price-high":
        return b.price - a.price;
      case "rating":
        return b.rating - a.rating;
      default:
        return 0;
    }
  });

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
      {/* Page Header */}
      <div className="mb-8">
        <h1 className="font-serif text-3xl lg:text-4xl font-semibold text-espresso-800 heading-imperfect">
          Shop All
        </h1>
        <p className="mt-2 text-sm text-espresso-400 tracking-editorial">
          {sorted.length} handcrafted {sorted.length === 1 ? "piece" : "pieces"}
        </p>
      </div>

      <div className="flex flex-col lg:flex-row gap-8">
        {/* Sidebar Filters */}
        <aside className="lg:w-56 flex-shrink-0">
          <div className="lg:sticky lg:top-24 space-y-8">
            {/* Categories */}
            <div>
              <h3 className="text-xs font-semibold text-espresso-600 tracking-boutique uppercase mb-3">
                Category
              </h3>
              <div className="space-y-1">
                <button
                  onClick={() => setSelectedCategory("all")}
                  className={`block w-full text-left text-sm py-1.5 transition-colors ${
                    selectedCategory === "all"
                      ? "text-gold-600 font-medium"
                      : "text-espresso-500 hover:text-espresso-800"
                  }`}
                >
                  All Products
                </button>
                {categories.map((cat) => (
                  <button
                    key={cat.id}
                    onClick={() => setSelectedCategory(cat.slug)}
                    className={`block w-full text-left text-sm py-1.5 transition-colors ${
                      selectedCategory === cat.slug
                        ? "text-gold-600 font-medium"
                        : "text-espresso-500 hover:text-espresso-800"
                    }`}
                  >
                    {cat.name}
                  </button>
                ))}
              </div>
            </div>

            {/* Sort */}
            <div>
              <h3 className="text-xs font-semibold text-espresso-600 tracking-boutique uppercase mb-3">
                Sort By
              </h3>
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="w-full px-3 py-2 text-sm text-espresso-700 bg-parchment-50 border border-parchment-300"
              >
                <option value="newest">Newest</option>
                <option value="price-low">Price: Low to High</option>
                <option value="price-high">Price: High to Low</option>
                <option value="rating">Top Rated</option>
              </select>
            </div>
          </div>
        </aside>

        {/* Product Grid */}
        <div className="flex-1">
          {/* Toolbar */}
          <div className="flex items-center justify-between mb-6 pb-4 border-b border-parchment-200">
            <p className="text-xs text-espresso-400 tracking-editorial">
              Showing {sorted.length} results
            </p>
            <div className="flex items-center gap-2">
              <button
                onClick={() => setView("grid")}
                className={`p-2 transition-colors ${
                  view === "grid"
                    ? "text-espresso-800"
                    : "text-espresso-400 hover:text-espresso-600"
                }`}
              >
                <Grid3X3 size={18} />
              </button>
              <button
                onClick={() => setView("list")}
                className={`p-2 transition-colors ${
                  view === "list"
                    ? "text-espresso-800"
                    : "text-espresso-400 hover:text-espresso-600"
                }`}
              >
                <LayoutList size={18} />
              </button>
            </div>
          </div>

          {sorted.length === 0 ? (
            <div className="text-center py-20">
              <p className="font-serif text-xl text-espresso-400">
                No products found
              </p>
              <p className="mt-2 text-sm text-espresso-400 tracking-editorial">
                Try selecting a different category
              </p>
            </div>
          ) : (
            <div
              className={
                view === "grid"
                  ? "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5"
                  : "space-y-4"
              }
            >
              {sorted.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

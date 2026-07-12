"use client";

import { useState } from "react";
import { Grid3X3, LayoutList } from "lucide-react";
import ProductCard from "@/components/product/ProductCard";
import Text3D from "@/components/ui/Text3D";
import { products } from "@/data/products";

export default function ProductsPage() {
  const [view, setView] = useState<"grid" | "list">("grid");
  const [selectedColor, setSelectedColor] = useState<string>("all");

  const filtered =
    selectedColor === "all"
      ? products
      : products.filter((p) => p.color === selectedColor);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
      <div className="mb-10">
        <h1 className="font-display text-3xl lg:text-5xl font-bold text-white">
          <Text3D text="Shop All" depth={3} color="#22C55E" />
        </h1>
        <p className="mt-3 text-sm text-dark-400 tracking-widest uppercase">
          {filtered.length} {filtered.length === 1 ? "piece" : "pieces"} available
        </p>
      </div>

      <div className="flex flex-col lg:flex-row gap-8">
        {/* Sidebar */}
        <aside className="lg:w-56 flex-shrink-0">
          <div className="lg:sticky lg:top-24 space-y-8">
            <div>
              <h3 className="text-xs font-bold text-forest-400 uppercase tracking-widest mb-3">
                Color
              </h3>
              <div className="space-y-1">
                {[
                  { value: "all", label: "All Colors" },
                  { value: "black", label: "Black" },
                  { value: "white", label: "White" },
                ].map((opt) => (
                  <button
                    key={opt.value}
                    onClick={() => setSelectedColor(opt.value)}
                    className={`flex items-center gap-2 w-full text-left text-sm py-2 px-3 rounded-lg transition-all ${
                      selectedColor === opt.value
                        ? "text-forest-400 bg-forest-500/10 font-semibold"
                        : "text-dark-400 hover:text-white hover:bg-dark-800"
                    }`}
                  >
                    {opt.value !== "all" && (
                      <span
                        className={`w-3 h-3 rounded-full border ${
                          opt.value === "black"
                            ? "bg-dark-900 border-dark-600"
                            : "bg-white border-dark-300"
                        }`}
                      />
                    )}
                    {opt.label}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </aside>

        {/* Products */}
        <div className="flex-1">
          <div className="flex items-center justify-between mb-6 pb-4 border-b border-dark-800">
            <p className="text-xs text-dark-500 font-mono">
              {filtered.length} results
            </p>
            <div className="flex items-center gap-2">
              <button
                onClick={() => setView("grid")}
                className={`p-2 rounded-lg transition-colors ${
                  view === "grid"
                    ? "text-forest-400 bg-forest-500/10"
                    : "text-dark-500 hover:text-white"
                }`}
              >
                <Grid3X3 size={18} />
              </button>
              <button
                onClick={() => setView("list")}
                className={`p-2 rounded-lg transition-colors ${
                  view === "list"
                    ? "text-forest-400 bg-forest-500/10"
                    : "text-dark-500 hover:text-white"
                }`}
              >
                <LayoutList size={18} />
              </button>
            </div>
          </div>

          <div
            className={
              view === "grid"
                ? "grid grid-cols-1 sm:grid-cols-2 gap-6"
                : "space-y-4"
            }
          >
            {filtered.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

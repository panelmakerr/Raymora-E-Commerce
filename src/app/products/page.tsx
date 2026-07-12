"use client";

import { useSearchParams } from "next/navigation";
import { Suspense } from "react";
import ProductCard from "@/components/product/ProductCard";
import { products } from "@/data/products";

function ProductsContent() {
  const sp = useSearchParams();
  const c = sp.get("c");
  const filtered = c ? products.filter((p) => p.color === c) : products;

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
      <h1 className="font-display text-3xl lg:text-5xl font-bold text-white mb-2">
        {c === "black" ? "Black Collection" : c === "white" ? "White Collection" : "Shop All"}
      </h1>
      <p className="text-sm text-dark-400 mb-10">{filtered.length} products</p>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 max-w-3xl mx-auto">
        {filtered.map((p) => <ProductCard key={p.id} product={p} />)}
      </div>
    </div>
  );
}

export default function ProductsPage() {
  return (
    <Suspense fallback={<div className="max-w-7xl mx-auto px-4 py-20 text-center text-dark-400">Loading...</div>}>
      <ProductsContent />
    </Suspense>
  );
}

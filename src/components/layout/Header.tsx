"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { ShoppingBag, Menu, X } from "lucide-react";
import { useCart } from "@/store/cart";

export default function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const count = useCart((s) => s.getCount());

  useEffect(() => {
    const h = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", h);
    return () => window.removeEventListener("scroll", h);
  }, []);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-[#0a0a0a]/95 backdrop-blur-md border-b border-forest-900/30" : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-16 lg:h-20">
        <button onClick={() => setOpen(!open)} className="lg:hidden p-2 text-dark-300 hover:text-forest-400">
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>

        <Link href="/" className="font-display text-2xl lg:text-3xl font-bold text-white tracking-tight">
          Ray<span className="text-forest-400">mora</span>
        </Link>

        <nav className="hidden lg:flex items-center gap-8">
          <Link href="/products" className="text-sm font-medium text-dark-300 hover:text-forest-400 transition-colors">Shop</Link>
          <Link href="/products?c=black" className="text-sm font-medium text-dark-300 hover:text-forest-400 transition-colors">Black</Link>
          <Link href="/products?c=white" className="text-sm font-medium text-dark-300 hover:text-forest-400 transition-colors">White</Link>
        </nav>

        <Link href="/cart" className="relative p-2 text-dark-300 hover:text-forest-400 transition-colors">
          <ShoppingBag size={20} />
          {count > 0 && (
            <span className="absolute -top-0.5 -right-0.5 bg-forest-500 text-white text-[10px] font-bold w-4 h-4 flex items-center justify-center rounded-full">
              {count}
            </span>
          )}
        </Link>
      </div>

      {open && (
        <div className="lg:hidden bg-[#0a0a0a] border-t border-forest-900/30 px-4 py-4 flex flex-col gap-3">
          <Link href="/products" onClick={() => setOpen(false)} className="text-sm text-dark-300 hover:text-forest-400 py-2">Shop All</Link>
          <Link href="/products?c=black" onClick={() => setOpen(false)} className="text-sm text-dark-300 hover:text-forest-400 py-2">Black Collection</Link>
          <Link href="/products?c=white" onClick={() => setOpen(false)} className="text-sm text-dark-300 hover:text-forest-400 py-2">White Collection</Link>
        </div>
      )}
    </header>
  );
}

"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Search, ShoppingBag, Menu, X, User } from "lucide-react";
import { useCartStore } from "@/store/cart";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const itemCount = useCartStore((s) => s.getItemCount());

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-dark-950/90 backdrop-blur-xl border-b border-forest-900/30"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden p-2 text-dark-300 hover:text-forest-400 transition-colors"
          >
            {isOpen ? <X size={20} /> : <Menu size={20} />}
          </button>

          <Link href="/" className="flex items-center gap-1">
            <span className="font-display text-2xl lg:text-3xl font-bold text-white tracking-tight">
              Ray<span className="text-forest-400">mora</span>
            </span>
          </Link>

          <nav className="hidden lg:flex items-center gap-8">
            {[
              { href: "/products", label: "Shop" },
              { href: "/products?color=black", label: "Black Collection" },
              { href: "/products?color=white", label: "White Collection" },
            ].map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm font-medium text-dark-300 hover:text-forest-400 tracking-wide transition-colors relative group"
              >
                {link.label}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-forest-500 to-lime-500 transition-all duration-300 group-hover:w-full" />
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-3">
            <button className="hidden sm:flex p-2 text-dark-300 hover:text-forest-400 transition-colors">
              <Search size={20} />
            </button>
            <button className="hidden sm:flex p-2 text-dark-300 hover:text-forest-400 transition-colors">
              <User size={20} />
            </button>
            <Link
              href="/cart"
              className="relative p-2 text-dark-300 hover:text-forest-400 transition-colors"
            >
              <ShoppingBag size={20} />
              {itemCount > 0 && (
                <span className="absolute -top-1 -right-1 bg-gradient-to-r from-forest-500 to-lime-500 text-dark-950 text-[10px] font-bold w-4 h-4 flex items-center justify-center rounded-full">
                  {itemCount}
                </span>
              )}
            </Link>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="lg:hidden bg-dark-950/95 backdrop-blur-xl border-t border-forest-900/30">
          <nav className="max-w-7xl mx-auto px-4 py-4 flex flex-col gap-3">
            {[
              { href: "/products", label: "Shop All" },
              { href: "/products?color=black", label: "Black Collection" },
              { href: "/products?color=white", label: "White Collection" },
            ].map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="text-sm font-medium text-dark-300 hover:text-forest-400 py-2 tracking-wide"
              >
                {link.label}
              </Link>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
}

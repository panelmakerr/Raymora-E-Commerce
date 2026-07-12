import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-[#0a0a0a] border-t border-dark-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <span className="font-display text-xl font-bold text-white">Ray<span className="text-forest-400">mora</span></span>
            <p className="mt-3 text-sm text-dark-400">Heritage streetwear. Print-on-demand, made fresh for you.</p>
          </div>
          <div>
            <h4 className="text-xs font-bold text-forest-400 uppercase tracking-widest mb-3">Shop</h4>
            <ul className="space-y-2">
              <li><Link href="/products" className="text-sm text-dark-400 hover:text-forest-400">All Products</Link></li>
              <li><Link href="/products?c=black" className="text-sm text-dark-400 hover:text-forest-400">Black Collection</Link></li>
              <li><Link href="/products?c=white" className="text-sm text-dark-400 hover:text-forest-400">White Collection</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="text-xs font-bold text-forest-400 uppercase tracking-widest mb-3">Help</h4>
            <ul className="space-y-2">
              <li><span className="text-sm text-dark-400">Size Guide</span></li>
              <li><span className="text-sm text-dark-400">Shipping Info</span></li>
              <li><span className="text-sm text-dark-400">Returns</span></li>
              <li><span className="text-sm text-dark-400">Contact</span></li>
            </ul>
          </div>
        </div>
        <div className="mt-10 pt-6 border-t border-dark-800 text-center">
          <p className="text-xs text-dark-500">&copy; {new Date().getFullYear()} Raymora. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

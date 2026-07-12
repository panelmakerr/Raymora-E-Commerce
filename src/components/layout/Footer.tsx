import Link from "next/link";

const footerLinks = {
  Shop: [
    { href: "/products", label: "All Products" },
    { href: "/products?color=black", label: "Black Collection" },
    { href: "/products?color=white", label: "White Collection" },
  ],
  Company: [
    { href: "#", label: "Our Story" },
    { href: "#", label: "Heritage" },
    { href: "#", label: "Sustainability" },
  ],
  Support: [
    { href: "#", label: "Size Guide" },
    { href: "#", label: "Shipping" },
    { href: "#", label: "Returns" },
    { href: "#", label: "Contact" },
  ],
};

export default function Footer() {
  return (
    <footer className="bg-dark-950 border-t border-forest-900/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          <div className="md:col-span-1">
            <span className="font-display text-2xl font-bold text-white">
              Ray<span className="text-forest-400">mora</span>
            </span>
            <p className="mt-4 text-sm text-dark-400 leading-relaxed">
              Premium streetwear for the culture. Each piece carries heritage,
              craft, and a story worth wearing.
            </p>
          </div>

          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title}>
              <h3 className="text-xs font-bold text-forest-400 uppercase tracking-widest mb-4">
                {title}
              </h3>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-sm text-dark-400 hover:text-forest-400 transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-12 border-t border-dark-800 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-dark-500">
            &copy; {new Date().getFullYear()} Raymora. All rights reserved.
          </p>
          <div className="flex items-center gap-4 text-dark-500">
            <span className="text-xs">Built with heritage.</span>
          </div>
        </div>
      </div>
    </footer>
  );
}

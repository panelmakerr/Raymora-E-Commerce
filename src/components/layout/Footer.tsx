import Link from "next/link";

export default function Footer() {
  const footerLinks = {
    Shop: [
      { href: "/products", label: "All Products" },
      { href: "/products?category=artisan-leather", label: "Leather" },
      { href: "/products?category=heritage-ceramics", label: "Ceramics" },
      { href: "/products?category=woven-textiles", label: "Textiles" },
      { href: "/products?category=botanicals", label: "Botanicals" },
    ],
    Company: [
      { href: "#", label: "Our Story" },
      { href: "#", label: "Artisans" },
      { href: "#", label: "Sustainability" },
      { href: "#", label: "Press" },
    ],
    Support: [
      { href: "#", label: "Shipping & Returns" },
      { href: "#", label: "Care Guide" },
      { href: "#", label: "FAQ" },
      { href: "#", label: "Contact" },
    ],
  };

  return (
    <footer className="bg-espresso-800 text-parchment-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="md:col-span-1">
            <span className="font-serif text-2xl font-semibold text-parchment-100 tracking-boutique">
              Raymora
            </span>
            <p className="mt-4 text-sm text-parchment-400 leading-relaxed">
              Curated goods from independent artisans. Each piece carries the
              warmth of human hands and the quiet beauty of considered craft.
            </p>
          </div>

          {/* Links */}
          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title}>
              <h3 className="text-sm font-semibold text-parchment-100 tracking-boutique uppercase mb-4">
                {title}
              </h3>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-sm text-parchment-400 hover:text-parchment-100 transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="divider-organic my-10 opacity-20" />

        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-parchment-500">
            &copy; {new Date().getFullYear()} Raymora. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <Link href="#" className="text-xs text-parchment-500 hover:text-parchment-300">
              Privacy Policy
            </Link>
            <Link href="#" className="text-xs text-parchment-500 hover:text-parchment-300">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

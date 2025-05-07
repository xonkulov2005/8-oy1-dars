import Link from "next/link";

export default function Navbar() {
  return (
    <header className="bg-gray-900 text-white sticky top-0 z-50 shadow-sm">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <div className="text-xl font-bold text-yellow-400">XM Store</div>
        <nav className="md:flex items-center gap-6 text-sm">
          <Link href="/" className="hover:text-blue-400 transition">
            Home
          </Link>
          <Link href="/about" className="hover:text-blue-400 transition">
            About
          </Link>
          <Link href="/contact" className="hover:text-blue-400 transition">
            Contact
          </Link>
        </nav>
      </div>
    </header>
  );
}

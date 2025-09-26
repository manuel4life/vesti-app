import { Search, ShoppingCart, Menu, X, UserPlus, LogIn } from "lucide-react";
import { useState } from "react";
import Link from "next/link";
import { useCart } from "@/context/CartContext";

function CartButton({ count }: { count: number }) {
  return (
    <Link
      href="/cart"
      aria-label="View shopping cart"
      className="relative p-2 hover:bg-gray-200 rounded-full transition"
    >
      <ShoppingCart className="w-6 h-6 text-gray-700" />
      {count > 0 && (
        <span className="absolute -top-1.5 -right-1.5 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
          {count}
        </span>
      )}
    </Link>
  );
}

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { cartCount } = useCart();

  return (
    <nav className="bg-white border-b border-gray-200 fixed top-0 left-0 w-full z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link href="/" className="text-2xl font-bold text-stone-800">
            Vesti
          </Link>

          <div className="hidden md:block relative text-black">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 w-4 h-4" />
            <input
              type="text"
              placeholder="Search for clothing..."
              className="pl-10 w-80 bg-gray-50 border border-gray-200 rounded-md focus:border-accent focus:ring-accent text-sm py-2"
            />
          </div>

          <div className="flex items-center space-x-4">
            <CartButton count={cartCount} />

            <Link
              href="/login"
              className="flex items-center space-x-1 text-2xl font-extrabold hover:text-accent transition text-[#04d9bd]"
            >
              <LogIn className="w-5 h-5" />
              <span className="text-sm font-medium">Login</span>
            </Link>

            <Link
              href="/signup"
              className="flex items-center space-x-1 text-gray-700 hover:text-accent transition"
            >
              <UserPlus className="w-5 h-5" />
              <span className="text-sm font-medium">Signup</span>
            </Link>

            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="Toggle menu"
              className="p-2 rounded-full hover:bg-gray-100 transition md:hidden"
            >
              {isMenuOpen ? (
                <X className="w-5 h-5 text-gray-700" />
              ) : (
                <Menu className="w-5 h-5 text-gray-700" />
              )}
            </button>
          </div>
        </div>
        {/* mobile dropdown */}
        {isMenuOpen && (
          <div className="md:hidden mt-2 pb-3 space-y-2">
            <Link
              href="/"
              className="block px-3 py-2 text-gray-700 hover:bg-gray-100 rounded"
            >
              Home
            </Link>
            <Link
              href="/products"
              className="block px-3 py-2 text-gray-700 hover:bg-gray-100 rounded"
            >
              Products
            </Link>
            <Link
              href="/cart"
              className="block px-3 py-2 text-gray-700 hover:bg-gray-100 rounded"
            >
              Cart
            </Link>
            <Link
              href="/login"
              className="block px-3 py-2 text-gray-700 hover:bg-gray-100 rounded"
            >
              <div className="flex items-center space-x-1">
                <LogIn className="w-5 h-5" />
                <span>Login</span>
              </div>
            </Link>
            <Link
              href="/signup"
              className="block px-3 py-2 text-gray-700 hover:bg-gray-100 rounded"
            >
              <div className="flex items-center space-x-1">
                <UserPlus className="w-5 h-5" />
                <span>Signup</span>
              </div>
            </Link>
          </div>
        )}
      </div>
    </nav>
  );
}

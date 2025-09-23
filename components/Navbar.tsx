import { Search, ShoppingCart, Menu, X } from "lucide-react";
import { useState } from "react";
import { NavbarProps } from "@/interfaces";
import Link from "next/link";

function CartButton({
  count,
  onClick,
}: {
  count: number;
  onClick: () => void;
}) {
  return (
    <button
      onClick={onClick}
      aria-label="View shopping cart"
      className="relative p-2 hover:bg-gray-100 rounded-full transition"
    >
      <ShoppingCart className="w-5 h-5 text-gray-700" />
      {count > 0 && (
        <span className="absolute -top-1.5 -right-1.5 bg-accent text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
          {count}
        </span>
      )}
    </button>
  );
}

const Navbar: React.FC<NavbarProps> = ({ cartItemCount, onCartClick }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="bg-white border-b border-gray-200 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex-shrink-0">
            <Link
              href="/"
              className="text-2xl font-bold text-primary font-poppins text-stone-800"
            >
              Vesti
            </Link>
          </div>

          <div className="hidden md:block relative text-black">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 w-4 h-4" />
            <input
              type="text"
              placeholder="Search for clothing..."
              className="pl-10 w-80 bg-gray-50 border border-gray-200 rounded-md focus:border-accent focus:ring-accent text-sm py-2"
            />
          </div>

          <div className="flex items-center space-x-3">
            <CartButton count={cartItemCount} onClick={onCartClick} />
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
      </div>
    </nav>
  );
};

export default Navbar;

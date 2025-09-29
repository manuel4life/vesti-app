import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 p-10">
      <div className="max-w-7xl mx-auto px-4 py-10 grid grid-cols-1 md:grid-cols-3 gap-8">
        <div>
          <h2 className="text-2xl font-bold text-white mb-3">Vesti</h2>
          <p className="text-sm">
            Your trusted shop for the best clothing at affordable prices.
          </p>
        </div>

        <div>
          <h3 className="text-lg font-semibold text-white mb-3">Quick Links</h3>
          <ul className="space-y-2">
            <li>
              <Link href="/" className="hover:text-white">
                Home
              </Link>
            </li>
            <li>
              <Link href="/products" className="hover:text-white">
                Products
              </Link>
            </li>
            <li>
              <Link href="/cart" className="hover:text-white">
                Cart
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="text-lg font-semibold text-white mb-3">Account</h3>
          <ul className="space-y-2">
            <li>
              <Link href="/login" className="hover:text-white">
                Login
              </Link>
            </li>
            <li>
              <Link href="/signup" className="hover:text-white">
                Signup
              </Link>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-gray-700 mt-6 py-4 text-center text-sm text-gray-400">
        © {new Date().getFullYear()} Vesti. All rights reserved.
      </div>
    </footer>
  );
}

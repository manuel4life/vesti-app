import Link from "next/link";
import React from "react";

const CartPage: React.FC = () => {
  const cartItems: any[] = [];

  if (cartItems.length === 0) {
    return (
      <div className="max-w-2xl mx-auto py-16 text-center">
        <h1 className="text-3xl font-bold mb-4">Your Cart is Empty 🛒</h1>
        <p className="text-gray-600 mb-6">
          Looks like you haven't added anything to your cart yet.
        </p>
        <Link
          href="/"
          className="inline-block bg-[#01bfa5] hover:bg-[#01bfa5]/90 text-white px-6 py-3 rounded font-semibold"
        >
          Back to Home
        </Link>
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto py-10">
      <h1 className="text-3xl font-bold mb-6">Your Cart</h1>
    </div>
  );
};

export default CartPage;

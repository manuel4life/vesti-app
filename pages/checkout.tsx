// pages/checkout.tsx
import React, { useState } from "react";
import { useCart } from "@/context/CartContext";
import Image from "next/image";
import Link from "next/link";

export default function CheckoutPage() {
  const { cartItems, updateQuantity, removeFromCart, clearCart } = useCart();
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
  });

  const subtotal = cartItems.reduce((sum, i) => sum + i.price * i.quantity, 0);
  const shipping = cartItems.length > 0 ? 20 : 0; // flat shipping fee example
  const total = subtotal + shipping;

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (cartItems.length === 0) {
      alert("Your cart is empty.");
      return;
    }
    // TODO: connect to backend payment/fulfillment
    alert(`Thank you ${form.name}, your order has been placed!`);
    clearCart();
    setForm({ name: "", email: "", phone: "", address: "" });
  };

  return (
    <div className="max-w-6xl mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold mb-6 text-gray-700">Checkout</h1>
      {cartItems.length === 0 ? (
        <div className="max-w-3xl mx-auto py-16 text-center">
          <p className="text-2xl font-extrabold text-gray-700">
            Your cart is empty.
          </p>
          <Link
            href="/"
            className="inline-block mt-4 bg-[#01bfa5] text-white px-6 py-3 rounded font-bold hover:bg-[#01bfa5]/90"
          >
            Go back to shop
          </Link>
        </div>
      ) : (
        <div className="grid md:grid-cols-3 gap-8">
          {/* Cart items */}
          <div className="md:col-span-2 space-y-4">
            {cartItems.map((item) => (
              <div
                key={item.id}
                className="flex items-center gap-4 border rounded p-3"
              >
                <div className="relative w-20 h-20">
                  <Image
                    src={item.image}
                    alt={item.name}
                    fill
                    className="object-contain"
                  />
                </div>
                <div className="flex-1 text-gray-700">
                  <h3 className=" text-2xl font-extrabold">{item.name}</h3>
                  <p className="text-sm text-gray-500">₵{item.price}</p>
                  <div className="flex items-center gap-2 mt-1">
                    <label className="text-sm">Qty:</label>
                    <label htmlFor={`quantity-${item.id}`} className="sr-only">
                      Quantity
                    </label>
                    <input
                      id={`quantity-${item.id}`}
                      type="number"
                      min={1}
                      value={item.quantity}
                      onChange={(e) =>
                        updateQuantity(
                          item.id,
                          parseInt(e.target.value, 10) || 1
                        )
                      }
                      className="w-16 border rounded px-2 py-1 text-sm text-gray-700"
                    />

                    <button
                      onClick={() => removeFromCart(item.id)}
                      className="text-sm text-red-500"
                    >
                      Remove
                    </button>
                  </div>
                </div>
                <div className="font-medium text-gray-500">
                  ₵{(item.price * item.quantity).toFixed(2)}
                </div>
              </div>
            ))}
          </div>

          {/* Summary + Form */}
          <div className=" border border-gray-200 rounded p-4 text-gray-700">
            <h2 className="text-lg font-semibold mb-4">Order Summary</h2>
            <div className="flex justify-between mb-2 text-sm">
              <span>Subtotal</span>
              <span>₵{subtotal.toFixed(2)}</span>
            </div>
            <div className="flex justify-between mb-2 text-sm">
              <span>Shipping</span>
              <span>₵{shipping.toFixed(2)}</span>
            </div>
            <div className="flex justify-between font-semibold border-t pt-2">
              <span>Total</span>
              <span>₵{total.toFixed(2)}</span>
            </div>

            <form onSubmit={handleSubmit} className="mt-4 space-y-3">
              <input
                name="name"
                value={form.name}
                onChange={handleChange}
                placeholder="Full Name"
                className="w-full border border-gray-200 px-3 py-2 rounded"
                required
              />
              <input
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                placeholder="Email"
                className="w-full border px-3 py-2 border-gray-200 rounded"
                required
              />
              <input
                name="phone"
                value={form.phone}
                onChange={handleChange}
                placeholder="Phone"
                className="w-full border px-3 py-2 border-gray-200 rounded"
                required
              />
              <textarea
                name="address"
                value={form.address}
                onChange={handleChange}
                placeholder="Shipping Address"
                className="w-full border px-3 py-2 border-gray-200 rounded"
                rows={3}
                required
              />
              <button
                type="submit"
                className="w-full bg-[#01bfa5] text-white py-2 rounded font-medium"
              >
                Place Order
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}

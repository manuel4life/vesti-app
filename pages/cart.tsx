import { useCart } from "@/context/CartContext";
import Image from "next/image";
import Link from "next/link";

export default function CartPage() {
  const { cartItems, increaseQuantity, decreaseQuantity, removeFromCart } =
    useCart();

  if (cartItems.length === 0) {
    return (
      <div className="max-w-3xl mx-auto py-16 text-center">
        <h1 className="text-2xl font-extrabold text-gray-700">
          Your cart is empty
        </h1>
        <Link
          href="/"
          className="inline-block mt-4 bg-[#01bfa5] text-white px-6 py-3 rounded font-bold hover:bg-[#01bfa5]/90"
        >
          Go back to Home
        </Link>
      </div>
    );
  }

  const subtotal = cartItems.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );
  const total = subtotal;

  return (
    <div className="max-w-6xl mx-auto py-16 px-4 grid grid-cols-1 md:grid-cols-3 gap-8">
      <div className="md:col-span-2">
        <h1 className="text-2xl font-extrabold text-gray-700 mb-6">
          Your Cart
        </h1>
        <ul className="divide-y divide-gray-200">
          {cartItems.map((item) => (
            <li key={item.id} className="py-6 flex items-center space-x-4">
              <div className="w-24 h-24 flex-shrink-0 overflow-hidden rounded-md border border-gray-200">
                <Image
                  src={item.image}
                  alt={item.name}
                  width={96}
                  height={96}
                  className="w-full h-full object-cover"
                />
              </div>

              <div className="flex-1">
                <h2 className="text-lg font-medium text-gray-900">
                  {item.name}
                </h2>
                <p className="text-sm text-gray-500">₵{item.price}</p>

                <div className="flex items-center space-x-2 mt-2">
                  <button
                    onClick={() => decreaseQuantity(Number(item.id))}
                    className="px-2 py-1 bg-gray-200 rounded font-bold text-1xl text-[#01bfa5] cursor-pointer"
                  >
                    -
                  </button>
                  <span>{item.quantity}</span>
                  <button
                    onClick={() => increaseQuantity(Number(item.id))}
                    className="px-2 py-1 bg-gray-200 rounded font-bold text-1xl text-[#01bfa5] cursor-pointer"
                  >
                    +
                  </button>
                </div>

                <button
                  onClick={() => removeFromCart(Number(item.id))}
                  className="mt-2 text-red-500 font-bold hover:underline text-sm cursor-pointer"
                >
                  Remove
                </button>
              </div>

              <div className="text-right">
                <p className="text-gray-700 font-semibold">
                  ₵{(item.price * item.quantity).toFixed(2)}
                </p>
              </div>
            </li>
          ))}
        </ul>
      </div>

      <div className="border border-gray-200 rounded-md p-6 h-fit">
        <h2 className="text-2xl font-bold mb-4 text-gray-500">Order Summary</h2>
        <div className="flex justify-between mb-2 text-gray-500">
          <span>Subtotal</span>
          <span>₵{subtotal.toFixed(2)}</span>
        </div>
        <div className="flex justify-between mb-4 text-gray-500">
          <span>Total</span>
          <span className="font-bold">₵{total.toFixed(2)}</span>
        </div>
        <Link
          href="/checkout"
          className="block text-center bg-[#01bfa5] text-white px-6 py-3 rounded font-bold hover:bg-[#01bfa5]/90"
        >
          Proceed to Checkout
        </Link>
      </div>
    </div>
  );
}

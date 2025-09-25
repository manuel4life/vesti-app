import { GetServerSideProps } from "next";
import Link from "next/link";
import React, { useState } from "react";
import { ProductPageProps } from "@/interfaces";
import Image from "next/image";
import { useCart } from "@/context/CartContext";

const ProductPage: React.FC<ProductPageProps> = ({ product }) => {
  const { addToCart, cartItems } = useCart();

  const alreadyInCart = cartItems.some((item) => item.id === product?.id);

  const thumbnails = product
    ? [product.image, product.image, product.image]
    : [];
  const [mainImage, setMainImage] = useState(product?.image || "");

  if (!product) {
    return (
      <div className="max-w-4xl mx-auto py-16 text-center">
        <h1 className="text-2xl font-bold">Product not found</h1>
        <Link href="/" className="text-[#01bfa5] underline">
          Go back to home
        </Link>
      </div>
    );
  }

  return (
    <div className="max-w-6xl mx-auto px-4 py-10 grid grid-cols-1 md:grid-cols-2 gap-8">
      {/* LEFT SIDE: thumbnails + main image */}
      <div className="flex gap-4">
        <div className="flex flex-col gap-3">
          {thumbnails.map((thumb, index) => (
            <div
              key={index}
              onClick={() => setMainImage(thumb)}
              className={`relative w-24 h-32 border rounded cursor-pointer hover:opacity-80 gap-1 mb-2 ${
                thumb === mainImage ? "ring-2 ring-[#01bfa5]" : ""
              }`}
            >
              <Image
                src={thumb}
                alt={`${product.title} thumbnail ${index}`}
                width={96}
                height={96}
                className="object-contain p-1"
              />
            </div>
          ))}
        </div>

        <div className="relative flex-1 h-[550px] border rounded-lg">
          <Image
            src={mainImage}
            alt={product.title}
            width={600}
            height={400}
            className="object-contain p-4"
          />
        </div>
      </div>

      <div>
        <h1 className="text-3xl mb-4 text-black font-extrabold">
          {product.title}
        </h1>
        <p className="text-gray-900 mb-4 capitalize">{product.category}</p>
        <p className="text-lg mb-6 text-gray-700">{product.description}</p>
        <p className="text-2xl font-semibold text-[#01bfa5] mb-6">
          ${product.price}
        </p>

        <button
          onClick={() =>
            !alreadyInCart &&
            addToCart({
              id: product.id,
              name: product.title,
              price: product.price,
              image: product.image,
              quantity: 1,
            })
          }
          disabled={alreadyInCart}
          className={`px-6 py-3 rounded font-semibold text-white transition 
            ${
              alreadyInCart
                ? "bg-gray-400 cursor-not-allowed"
                : "bg-[#01bfa5] hover:bg-[#01bfa5]/90"
            }`}
        >
          {alreadyInCart ? "Already in Cart" : "Add to Cart"}
        </button>
      </div>
    </div>
  );
};

export default ProductPage;

export const getServerSideProps: GetServerSideProps = async (context) => {
  const { id } = context.params!;

  try {
    const res = await fetch(`https://fakestoreapi.com/products/${id}`);
    if (!res.ok) {
      return { props: { product: null } };
    }
    const product = await res.json();
    return { props: { product } };
  } catch {
    return { props: { product: null } };
  }
};

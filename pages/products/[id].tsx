import { GetServerSideProps } from "next";
import Link from "next/link";
import React, { useState } from "react";
import { ProductPageProps } from "@/interfaces";
import Image from "next/image";

const ProductPage: React.FC<ProductPageProps> = ({ product }) => {
  // ✅ Hooks always at the top (before any returns)
  const thumbnails = product
    ? [product.image, product.image, product.image]
    : [];
  const [mainImage, setMainImage] = useState(product?.image || "");

  // ✅ Early return after hooks
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
        {/* Thumbnails */}
        <div className="flex flex-col gap-3">
          {thumbnails.map((thumb, index) => (
            <div
              key={index}
              onClick={() => setMainImage(thumb)}
              className={`relative w-24 h-24 border rounded cursor-pointer hover:opacity-80 ${
                thumb === mainImage ? "ring-2 ring-[#01bfa5]" : ""
              }`}
            >
              <Image
                src={thumb}
                alt={`${product.title} thumbnail ${index}`}
                width={96} // px
                height={96} // px
                className="object-contain p-1"
              />
            </div>
          ))}
        </div>

        <div className="relative flex-1 h-[400px] border rounded-lg">
          <Image
            src={mainImage}
            alt={product.title}
            width={600} // px
            height={400} // px
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
        <button className="bg-[#01bfa5] hover:bg-[#01bfa5]/90 text-white px-6 py-3 rounded font-semibold">
          Add to Cart
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

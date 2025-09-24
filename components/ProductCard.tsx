import React from "react";
import Link from "next/link";
import { ProductCardProps } from "@/interfaces";
import Image from "next/image";

const ProductCard: React.FC<ProductCardProps> = ({
  id,
  image,
  name,
  price,
  description,
  onAddToCart,
}) => {
  return (
    <div className="bg-white rounded-lg shadow hover:shadow-lg transition p-4 flex flex-col">
      <Link href={`/products/${id}`} className="block w-full h-48">
        <div className="relative w-full h-48 flex items-center justify-center overflow-hidden">
          <Image
            src={image}
            alt={name}
            fill
            className="object-contain hover:scale-105 transition-transform duration-300"
          />
        </div>
      </Link>

      <div className="mt-4 flex flex-col flex-grow">
        <h3 className="text-lg font-semibold font-poppins line-clamp-2 text-gray-600">
          {name}
        </h3>
        <p className="text-[#01bfa5] font-bold mt-1">{price}</p>

        <p className="text-sm text-gray-600 mt-2 flex-grow line-clamp-3">
          {description}
        </p>
      </div>

      <button
        onClick={onAddToCart}
        className="mt-4 w-full bg-[#01bfa5] hover:bg-[#01bfa5]/90 text-white px-4 py-2 rounded font-poppins transition"
      >
        Add to Cart
      </button>
    </div>
  );
};

export default ProductCard;

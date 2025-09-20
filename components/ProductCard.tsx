import React from "react";
import { ProductCardProps } from "@/interfaces";

const ProductCard: React.FC<ProductCardProps> = ({
  image,
  name,
  price,
  description,
  onAddToCart,
}) => {
  return (
    <div className="bg-white rounded-lg shadow hover:shadow-lg transition p-4 flex flex-col">
      <div className="w-full h-48 flex items-center justify-center overflow-hidden">
        <img src={image} alt={name} className="h-full object-contain" />
      </div>

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

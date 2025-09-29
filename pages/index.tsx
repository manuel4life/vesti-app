import React, { useEffect, useState } from "react";
import HeroComponent from "@/components/HeroComponent";
import { useCart } from "@/context/CartContext";

import ProductCard from "@/components/ProductCard";

import { Product } from "@/interfaces";

export default function HomePage() {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);

  const { addToCart } = useCart();

  // pagiation
  const [currentPage, setCurrentPage] = useState(1);
  const productsPerPage = 8;

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const res = await fetch("https://fakestoreapi.com/products");
        const data = await res.json();
        setProducts(data);
      } catch (err) {
        console.error("Error fetching products:", err);
      } finally {
        setLoading(false);
      }
    };
    fetchProducts();
  }, []);

  const indexOfLast = currentPage * productsPerPage;
  const indexOfFirst = indexOfLast - productsPerPage;
  const currentProducts = products.slice(indexOfFirst, indexOfLast);
  const totalPages = Math.ceil(products.length / productsPerPage);

  return (
    <>
      <HeroComponent />

      <section
        id="products-section"
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12"
      >
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl mb-4 font-extrabold text-black font-weight-600">
            Featured Collection
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto font-extrabold">
            Discover our handpicked selection of premium clothing designed for
            comfort, style, and <br />
            quality.
          </p>
        </div>

        {loading ? (
          <p className="text-center text-gray-400 text-lg">Loading products…</p>
        ) : (
          <>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {currentProducts.map((product) => (
                <ProductCard
                  key={product.id}
                  id={product.id}
                  image={product.image}
                  name={product.title}
                  price={`₵${(product.price * 15).toFixed(2)}`}
                  description={product.description.substring(0, 60) + "..."}
                  onAddToCart={() =>
                    addToCart({
                      id: product.id,
                      name: product.title,
                      price: product.price,
                      image: product.image,
                      quantity: 1,
                    })
                  }
                />
              ))}
            </div>

            <div className="flex justify-center mt-8 space-x-2">
              {Array.from({ length: totalPages }, (_, i) => i + 1).map(
                (page) => (
                  <button
                    key={page}
                    onClick={() => setCurrentPage(page)}
                    className={`px-4 py-2 rounded ${
                      currentPage === page
                        ? "bg-[#01bfa5] text-white"
                        : "bg-gray-300 text-gray-400 hover:bg-gray-300"
                    }`}
                  >
                    {page}
                  </button>
                )
              )}
            </div>
          </>
        )}
      </section>
    </>
  );
}

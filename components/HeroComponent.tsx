import { HERO, FEMALE, MAIN, MALE } from "../constants";
import React, { useState, useEffect } from "react";
import { HeroProps } from "@/interfaces";

const heroImages = [HERO, MAIN, FEMALE, MALE];

const HeroComponent: React.FC<HeroProps> = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) =>
        prev === heroImages.length - 1 ? 0 : prev + 1
      );
    }, 5000);
    return () => clearInterval(interval);
  }, []);
  return (
    <section
      className="relative w-full h-[600px] bg-cover bg-center transition-all duration-700"
      style={{ backgroundImage: `url(${heroImages[currentIndex]})` }}
    >
      <div className="absolute inset-0 bg-black/40 backdrop-blur-sm pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-32 h-full flex items-center">
        <div className="max-w-2xl text-white">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl mb-6 leading-tight font-bold font-poppins">
            Elevate Your Style with
            <span className="block text-[#01bfa5] font-extrabold">
              Premium Fashion
            </span>
          </h1>

          <p className="text-lg sm:text-xl mb-8 text-white font-inter">
            Discover our curated collection of premium clothing designed for the
            modern lifestyle. Quality meets style in every piece.
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href="#products-section"
              className="bg-[#01bfa5] hover:bg-[#01bfa5]/90 text-white px-8 py-3 text-lg font-semibold rounded font-poppins transition cursor-pointer inline-block"
            >
              Shop Now
            </a>

            <button
              className="
            bg-white border border-white text-transparent 
            hover:text-black 
            px-8 py-3 text-lg rounded font-poppins font-semibold
            transition-colors duration-300 cursor-pointer
          "
            >
              View Collection
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
export default HeroComponent;

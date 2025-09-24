import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  images: {
    domains: [
      "fakestoreapi.com",       // for product images
      "images.unsplash.com"     // for Unsplash hero images
    ],
  },
};

export default nextConfig;

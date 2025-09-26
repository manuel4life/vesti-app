# Vesti 🛍️

A modern, user-friendly clothing shopping platform built with **Next.js (Pages Router)**, **React**, **TypeScript**, and **TailwindCSS**.  
Vesti allows customers to browse collections, view detailed product information, and make secure payments — with a fresh, unique shopping experience.

---

## ✨ Overview

Vesti is designed to be a **next-generation clothing shopping platform** for modern users.  
Our aim is to combine a clean, responsive UI with smooth interactions and reliable performance.  
We’re also planning to introduce **unique features** (like AI-powered outfit suggestions, style recommendations, and personal lookbooks) to differentiate Vesti from the typical e-commerce platforms out there.

---

## 🚀 Tech Stack

- **Next.js (Pages Router)** — Server-rendered React for fast and SEO-friendly pages
- **React 18** — Component-based UI
- **TypeScript** — Strong typing and safer code
- **TailwindCSS** — Utility-first CSS framework for rapid UI development
- **Fakestore API (or Custom API)** — Quick prototyping and product data
- **Stripe (planned)** — Secure payment integration

---

## 🔑 Core Features

- Browse clothing categories and products
- View detailed product descriptions and images
- Add items to cart and checkout securely
- Mobile-first responsive design
- (Upcoming) AI style recommendations
- (Upcoming) Personalized lookbook feature

---

## Challenges and Solutions

### 1. Background stretching under navbar

- **Challenge**: The hero background image was scrolling under the navbar.
- **Solution**: Consulted a senior developer. He showed me how to adjust the navbar width and positioning to fix the issue.

### 2. File naming convention

- **Challenge**: Constants and interfaces were originally `.tsx` which caused confusion.
- **Solution**: Renamed them to `.ts` files and updated imports accordingly.

### 3. Product images & Next.js Image component

- **Challenge**: Using `<img>` triggered warnings and missing `width`/`height` errors.
- **Solution**: Switched to `next/image` with explicit width and height.

- **Challenge**: Creating a Hero carousel
- **Solution**: Implemented a custom React state with useState and useEffect to auto-slide images. Added left/right arrows and dots for manual control. This improved the UI and made it more interactive.

- **Challenge**: ProductCard button alignment issues
- **Solution**: Used flexbox + fixed height container for each card to make all buttons line up regardless of product description length.

# 🛍️ Product Details Page

We implemented a dynamic product details page at `/products/[id]` which:

- Fetches product data from [FakeStore API](https://fakestoreapi.com)
- Displays the **main product image** plus selectable thumbnails
- Shows **product title, category, description and price**
- Includes an **Add to Cart** button

---

## 📝 Challenges i Faced

### 4. Next.js `<Image />` and Remote Images

Initially, i used plain `<img>` tags to display images from the API.  
Next.js recommended switching to `<Image />` from `next/image` for better performance.  
However, this introduced runtime errors such as:

- **Cart Page** where users can:

  - View items added to the cart
  - Increase or decrease item quantity
  - Remove items from the cart
  - See total price calculated dynamically

  ### Checkout Page

- Users can review their cart, adjust quantities, or remove items.
- Displays subtotal, shipping, and total.
- Simple checkout form (name, email, phone, address).
- “Place Order” button clears the cart and shows confirmation (placeholder for backend integration).
- Page: `/checkout`.

## 🛠️ Project Setup

1. **Clone the repository**

   ```bash
   git clone https://github.com/manuel4life/vesti.git
   cd vesti
   ```

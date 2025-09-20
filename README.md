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

- Document any other issues you fixed…

## 🛠️ Project Setup

1. **Clone the repository**

   ```bash
   git clone https://github.com/manuel4life/vesti.git
   cd vesti
   ```

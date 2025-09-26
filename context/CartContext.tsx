// context/CartContext.tsx
import React, { createContext, useContext, useState, ReactNode } from "react";
import { CartItem, CartContextType } from "@/interfaces";

const CartContext = createContext<CartContextType | undefined>(undefined);

export const CartProvider = ({ children }: { children: ReactNode }) => {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);

  const addToCart = (item: CartItem) => {
    setCartItems((prev) => {
      const existingItem = prev.find((i) => i.id === item.id);
      if (existingItem) {
        return prev;
      }
      return [...prev, { ...item, quantity: item.quantity || 1 }];
    });
  };

  const increaseQuantity = (id: number) => {
    setCartItems((prev) =>
      prev.map((i) => (i.id === id ? { ...i, quantity: i.quantity + 1 } : i))
    );
  };

  const decreaseQuantity = (id: number) => {
    setCartItems((prev) =>
      prev.map((i) =>
        i.id === id && i.quantity > 1 ? { ...i, quantity: i.quantity - 1 } : i
      )
    );
  };

  const removeFromCart = (id: number) => {
    setCartItems((prev) => prev.filter((i) => i.id !== id));
  };

  const updateQuantity = (id: number, quantity: number) => {
    setCartItems((prev) =>
      prev.map((i) =>
        i.id === id ? { ...i, quantity: quantity < 1 ? 1 : quantity } : i
      )
    );
  };
  const clearCart = () => setCartItems([]);
  const cartCount = cartItems.reduce((sum, i) => sum + i.quantity, 0);

  return (
    <CartContext.Provider
      value={{
        cartItems,
        addToCart,
        clearCart,
        cartCount,
        increaseQuantity,
        decreaseQuantity,
        removeFromCart,
        updateQuantity,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error("useCart must be used inside a CartProvider");
  }
  return context;
};

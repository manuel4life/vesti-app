import React from "react";
import Navbar from "@/components/Navbar";

const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <div className="min-h-screen bg-gray-50 ">
      <Navbar />
      <main className="flex-1 max-w-6xl mx-auto px-4 py-8 w-ful">
        {children}
      </main>
    </div>
  );
};

export default Layout;

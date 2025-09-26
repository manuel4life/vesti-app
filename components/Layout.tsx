import React from "react";
import Navbar from "@/components/Navbar";

const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col  ">
      <Navbar />
      <main className="max-w-6xls spx-4 spy-8">{children}</main>
    </div>
  );
};

export default Layout;

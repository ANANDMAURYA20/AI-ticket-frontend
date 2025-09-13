// src/components/Layout.jsx
import React from "react";
import Navbar from "../components/Navbar";  

export default function Layout({ children }) {
  return (
    <div >
      <Navbar />   {/* Always visible */}
      <main className="container mx-auto p-4">{children}</main>
    </div>
  );
}

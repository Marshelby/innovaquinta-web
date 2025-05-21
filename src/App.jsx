import React from "react";
import Header from "./components/Header";
import Servicios from "./components/Servicios";
import Testimonios from "./components/Testimonios";

export default function App() {
  return (
    <div className="min-h-screen font-inter scroll-smooth bg-white text-gray-800">
      <Header />
      <Servicios />
      <Testimonios />
    </div>
  );
}
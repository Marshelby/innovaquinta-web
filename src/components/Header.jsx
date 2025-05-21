import React from "react";

export default function Header() {
  return (
    <header className="flex flex-col items-center justify-center py-12 bg-gradient-to-br from-cyan-700 via-cyan-600 to-sky-500 text-white shadow-lg">
      <img src="/logo.png" alt="Logo" className="w-28 h-28 mb-4 rounded-full border-4 border-white shadow" />
      <h1 className="text-4xl font-poppins font-bold">InnovaQuinta Spa</h1>
      <p className="mt-2 text-lg font-inter">Soluciones técnicas de confianza para tu empresa o comercio</p>
    </header>
  );
}
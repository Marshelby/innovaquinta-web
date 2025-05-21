import React from "react";

export default function Navbar() {
  return (
    <nav className="sticky top-0 z-50 bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 py-3 flex justify-between items-center">
        <a href="#header" className="text-xl font-bold text-cyan-700 font-poppins">InnovaQuinta</a>
        <div className="space-x-4 hidden sm:block">
          <a href="#servicios" className="text-gray-600 hover:text-cyan-700 transition">Servicios</a>
          <a href="#testimonios" className="text-gray-600 hover:text-cyan-700 transition">Testimonios</a>
          <a href="#galeria" className="text-gray-600 hover:text-cyan-700 transition">Galería</a>
          <a href="#cobertura" className="text-gray-600 hover:text-cyan-700 transition">Cobertura</a>
          <a href="#contacto" className="text-gray-600 hover:text-cyan-700 transition">Contacto</a>
        </div>
      </div>
    </nav>
  );
}
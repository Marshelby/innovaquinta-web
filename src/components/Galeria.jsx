import React from "react";

export default function Galeria() {
  return (
    <section className="py-12 px-6 bg-white text-center">
      <h2 className="text-3xl font-poppins text-cyan-700 mb-6">Galería de Trabajos</h2>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-6xl mx-auto">
        {[1, 2, 3, 4].map((n) => (
          <div key={n} className="bg-gray-200 h-40 rounded-xl shadow-inner flex items-center justify-center text-gray-500">Imagen {n}</div>
        ))}
      </div>
    </section>
  );
}
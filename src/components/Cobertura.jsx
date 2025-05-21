import React from "react";

export default function Cobertura() {
  return (
    <section data-aos="fade-up" className="py-16 px-6 bg-gray-100 text-center">
      <h2 className="text-3xl font-poppins text-cyan-700 mb-6">Cobertura</h2>
      <p className="mb-4 text-gray-600">
        Atendemos todas las comunas de la V Región: Valparaíso, Viña del Mar, Quilpué,
        Villa Alemana, Quillota, San Felipe, Los Andes, San Antonio, y más.
      </p>
      <iframe
        className="w-full max-w-4xl mx-auto h-64 rounded-xl border"
        src="https://www.google.com/maps/d/u/0/embed?mid=1rQom8G_r4LDlmkxKk0hVW_-lZuA-MNE&ehbc=2E312F"
        loading="lazy"
      ></iframe>
    </section>
  );
}
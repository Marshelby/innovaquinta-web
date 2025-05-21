import React from "react";
import "./index.css";

export default function App() {
  return (
    <div className="min-h-screen bg-white text-gray-800 font-sans">
      <header className="flex flex-col items-center justify-center py-12 bg-gradient-to-b from-cyan-800 to-cyan-600 text-white shadow-lg">
        <img
          src="/logo.png"
          alt="Logo InnovaQuinta"
          className="w-32 h-32 mb-4 rounded-full border-4 border-white shadow"
        />
        <h1 className="text-4xl font-bold">InnovaQuinta Spa</h1>
        <p className="mt-2 text-lg">Soluciones técnicas de confianza para tu empresa o comercio</p>
      </header>

      <section className="py-12 px-4 bg-white">
        <h2 className="text-2xl font-semibold text-center text-cyan-700 mb-6">¿Por qué elegirnos?</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto text-center">
          <div className="p-4 rounded-xl bg-gray-50 shadow-sm hover:shadow-md transition">
            <p className="font-semibold text-cyan-600">+6 años de experiencia</p>
          </div>
          <div className="p-4 rounded-xl bg-gray-50 shadow-sm hover:shadow-md transition">
            <p className="font-semibold text-cyan-600">Técnicos certificados</p>
          </div>
          <div className="p-4 rounded-xl bg-gray-50 shadow-sm hover:shadow-md transition">
            <p className="font-semibold text-cyan-600">Respuesta rápida</p>
          </div>
          <div className="p-4 rounded-xl bg-gray-50 shadow-sm hover:shadow-md transition">
            <p className="font-semibold text-cyan-600">Garantía y postventa</p>
          </div>
        </div>
      </section>

      <section className="py-16 px-6 bg-gray-50">
        <h2 className="text-3xl font-semibold text-center text-cyan-700 mb-10">Nuestros Servicios</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
          <div className="p-6 bg-white rounded-xl shadow hover:shadow-lg transition">
            <h3 className="text-xl font-bold mb-2 text-cyan-600">Climatización</h3>
            <p>Instalación y mantención de aire acondicionado y calefacción.</p>
          </div>
          <div className="p-6 bg-white rounded-xl shadow hover:shadow-lg transition">
            <h3 className="text-xl font-bold mb-2 text-cyan-600">Refrigeración</h3>
            <p>Soluciones para equipos industriales y comerciales.</p>
          </div>
          <div className="p-6 bg-white rounded-xl shadow hover:shadow-lg transition">
            <h3 className="text-xl font-bold mb-2 text-cyan-600">Electricidad</h3>
            <p>Instalaciones eléctricas seguras y certificadas.</p>
          </div>
          <div className="p-6 bg-white rounded-xl shadow hover:shadow-lg transition">
            <h3 className="text-xl font-bold mb-2 text-cyan-600">Gasfitería</h3>
            <p>Reparaciones, mantención y proyectos de red de agua y gas.</p>
          </div>
        </div>
      </section>

      <section className="py-16 px-6 bg-white text-center">
        <h2 className="text-3xl font-semibold text-cyan-700 mb-4">Contáctanos</h2>
        <p className="mb-6 text-gray-600">¿Necesitas una cotización? Escríbenos directamente.</p>
        <a
          href="https://wa.me/56996519050"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block bg-cyan-600 text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-cyan-700 transition shadow-lg"
        >
          Hablar por WhatsApp
        </a>
      </section>

      <footer className="text-center py-6 text-gray-500 text-sm bg-gray-100">
        © 2025 InnovaQuinta Spa. Todos los derechos reservados.
      </footer>
    </div>
  );
}

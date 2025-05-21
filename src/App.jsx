import React from "react";
import "./index.css";

export default function App() {
  return (
    <div className="min-h-screen bg-white text-gray-800 font-sans">
      {/* Header con logo centrado */}
      <header className="flex flex-col items-center justify-center py-10 shadow-md bg-white">
        <img
          src="/logo.png"
          alt="Logo InnovaQuinta"
          className="w-28 h-28 mb-4"
        />
        <h1 className="text-4xl font-bold text-cyan-700">InnovaQuinta Spa</h1>
        <p className="mt-2 text-lg text-gray-600">
          Servicios integrales en climatización, refrigeración, electricidad y gasfitería
        </p>
      </header>

      {/* Sección Servicios */}
      <section className="py-16 px-6 bg-gray-50">
        <h2 className="text-3xl font-semibold text-center text-cyan-700 mb-10">
          Nuestros Servicios
        </h2>
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

      {/* Sección Contacto */}
      <section className="py-16 px-6 bg-white text-center">
        <h2 className="text-3xl font-semibold text-cyan-700 mb-4">Contáctanos</h2>
        <p className="mb-6">¿Necesitas una cotización? Escríbenos directamente.</p>
        <a
          href="https://wa.me/56996519050"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block bg-cyan-600 text-white px-6 py-3 rounded-full text-lg font-semibold hover:bg-cyan-700 transition"
        >
          Hablar por WhatsApp
        </a>
      </section>

      <footer className="text-center py-6 text-gray-500 text-sm">
        © {new Date().getFullYear()} InnovaQuinta Spa. Todos los derechos reservados.
      </footer>
    </div>
  );
}

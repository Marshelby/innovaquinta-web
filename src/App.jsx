import React from "react";
import "./index.css";

export default function App() {
  return (
    <div className="min-h-screen bg-white text-gray-800 font-sans relative">
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
          <div className="p-6 bg-white rounded-xl shadow hover:shadow-lg transition text-center">
            <div className="text-4xl mb-2">❄️</div>
            <h3 className="text-xl font-bold mb-2 text-cyan-600">Climatización</h3>
            <p>Instalación y mantención de aire acondicionado y calefacción.</p>
          </div>
          <div className="p-6 bg-white rounded-xl shadow hover:shadow-lg transition text-center">
            <div className="text-4xl mb-2">🧊</div>
            <h3 className="text-xl font-bold mb-2 text-cyan-600">Refrigeración</h3>
            <p>Soluciones para equipos industriales y comerciales.</p>
          </div>
          <div className="p-6 bg-white rounded-xl shadow hover:shadow-lg transition text-center">
            <div className="text-4xl mb-2">⚡</div>
            <h3 className="text-xl font-bold mb-2 text-cyan-600">Electricidad</h3>
            <p>Instalaciones eléctricas seguras y certificadas.</p>
          </div>
          <div className="p-6 bg-white rounded-xl shadow hover:shadow-lg transition text-center">
            <div className="text-4xl mb-2">🛠️</div>
            <h3 className="text-xl font-bold mb-2 text-cyan-600">Gasfitería</h3>
            <p>Reparaciones, mantención y proyectos de red de agua y gas.</p>
          </div>
        </div>
      </section>

      <section className="py-12 px-6 bg-white text-center">
        <h2 className="text-3xl font-semibold text-cyan-700 mb-4">Testimonio</h2>
        <blockquote className="italic text-gray-600 max-w-2xl mx-auto">“Contratamos a InnovaQuinta para la instalación completa del sistema de aire en nuestra oficina y el servicio fue impecable. Totalmente recomendados.”<br/><span className="not-italic font-semibold block mt-2">— Cliente satisfecho</span></blockquote>
      </section>

      <section className="py-16 px-6 bg-gray-50 text-center">
        <h2 className="text-3xl font-semibold text-cyan-700 mb-6">Cobertura</h2>
        <p className="mb-4 text-gray-600">Atendemos toda la V Región de Valparaíso</p>
        <div className="max-w-4xl mx-auto">
          <iframe
            className="w-full h-64 rounded-xl border"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d53212.04168156936!2d-71.47808911355624!3d-33.04624791065256!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9689de77a6b75a29%3A0x13a38991d60dc3b7!2sValpara%C3%ADso%2C%20Chile!5e0!3m2!1ses!2scl!4v1700000000000"
            allowFullScreen=""
            loading="lazy"
          ></iframe>
        </div>
      </section>

      <section className="py-16 px-6 bg-white text-center">
        <h2 className="text-3xl font-semibold text-cyan-700 mb-4">Contáctanos</h2>
        <form className="max-w-xl mx-auto space-y-4">
          <input type="text" placeholder="Nombre" className="w-full p-3 border rounded-lg"/>
          <input type="email" placeholder="Correo" className="w-full p-3 border rounded-lg"/>
          <textarea placeholder="Mensaje" className="w-full p-3 border rounded-lg" rows="4"></textarea>
          <button className="bg-cyan-600 text-white px-6 py-3 rounded-full hover:bg-cyan-700 transition shadow">
            Enviar mensaje
          </button>
        </form>
        <p className="mt-6 text-gray-600">O contáctanos directamente:</p>
        <a
          href="https://wa.me/56996519050"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block mt-2 bg-cyan-600 text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-cyan-700 transition shadow-lg"
        >
          Hablar por WhatsApp
        </a>
      </section>

      <footer className="text-center py-6 text-gray-500 text-sm bg-gray-100">
        <p>© 2025 InnovaQuinta Spa. Todos los derechos reservados.</p>
        <p>Correo: <a href="mailto:Sebastianjo28@gmail.com" className="underline">Sebastianjo28@gmail.com</a></p>
        <p>Instagram: <a href="https://instagram.com" className="underline">instagram.com/innovaquinta</a></p>
      </footer>

      <a
        href="https://wa.me/56996519050"
        className="fixed bottom-4 right-4 z-50 bg-green-500 hover:bg-green-600 text-white px-4 py-3 rounded-full shadow-lg transition block sm:hidden"
        target="_blank"
        rel="noopener noreferrer"
      >
        💬
      </a>
    </div>
  );
}

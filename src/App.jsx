import React from "react";
import "./index.css";

const testimonios = [
  {
    nombre: "Carla Ríos",
    comuna: "Viña del Mar",
    mensaje: "Solicité instalación de aire en mi local. Llegaron puntuales y dejaron todo impecable.",
    imagen: "/carla.jpg"
  },
  {
    nombre: "Juan López",
    comuna: "Quilpué",
    mensaje: "Quedé muy conforme con el arreglo eléctrico. Se nota que tienen experiencia.",
    imagen: "/juan.jpg"
  },
  {
    nombre: "Patricia Mella",
    comuna: "San Felipe",
    mensaje: "Recomiendo InnovaQuinta, resolvieron un problema de gas que nadie más supo arreglar.",
    imagen: "/patricia.jpg"
  }
];

export default function App() {
  return (
    <div className="min-h-screen text-gray-800 font-inter scroll-smooth bg-white">
      {/* Header */}
      <header className="flex flex-col items-center justify-center py-12 bg-gradient-to-br from-cyan-700 via-cyan-600 to-sky-500 text-white shadow-lg">
        <img src="/logo.png" alt="Logo" className="w-28 h-28 mb-4 rounded-full border-4 border-white shadow" />
        <h1 className="text-4xl font-poppins font-bold">InnovaQuinta Spa</h1>
        <p className="mt-2 text-lg font-inter">Soluciones técnicas de confianza para tu empresa o comercio</p>
      </header>

      {/* Por qué elegirnos */}
      <section className="py-12 px-4 bg-slate-50">
        <h2 className="text-2xl text-center font-poppins font-semibold text-cyan-700 mb-6">¿Por qué elegirnos?</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto text-center">
          {[
            ["🏅", "+6 años de experiencia"],
            ["🛡️", "Técnicos certificados"],
            ["⚡", "Respuesta rápida"],
            ["✅", "Garantía y postventa"]
          ].map(([icono, texto], i) => (
            <div key={i} className="p-4 rounded-xl bg-white shadow hover:shadow-md transition text-center">
              <div className="text-3xl mb-2">{icono}</div>
              <p className="font-semibold text-cyan-600">{texto}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Servicios */}
      <section className="py-16 px-6 bg-cyan-50">
        <h2 className="text-3xl text-center font-poppins text-cyan-700 mb-10">Nuestros Servicios</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
          {[
            ["❄️", "Climatización", "Instalación y mantención de aire acondicionado y calefacción."],
            ["🧊", "Refrigeración", "Soluciones para equipos industriales y comerciales."],
            ["⚡", "Electricidad", "Instalaciones eléctricas seguras y certificadas."],
            ["🛠️", "Gasfitería", "Reparaciones, mantención y proyectos de red de agua y gas."]
          ].map(([icon, title, desc], i) => (
            <div key={i} className="p-6 bg-white rounded-xl shadow hover:shadow-lg transition text-center">
              <div className="text-4xl mb-2">{icon}</div>
              <h3 className="text-xl font-bold mb-2 text-cyan-600">{title}</h3>
              <p>{desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Testimonios */}
      <section className="py-12 px-6 bg-amber-50 text-center">
        <h2 className="text-3xl font-poppins text-cyan-700 mb-6">Testimonios</h2>
        <div className="grid gap-6 md:grid-cols-3 max-w-6xl mx-auto">
          {testimonios.map((t, i) => (
            <div key={i} className="bg-white p-6 rounded-xl shadow-md">
              <img src={t.imagen} alt={t.nombre} className="w-16 h-16 mx-auto mb-4 rounded-full object-cover" />
              <blockquote className="italic text-gray-600">“{t.mensaje}”</blockquote>
              <p className="mt-2 font-semibold text-cyan-700">{t.nombre}</p>
              <p className="text-sm text-gray-500">{t.comuna}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Galería */}
      <section className="py-12 px-6 bg-white text-center">
        <h2 className="text-3xl font-poppins text-cyan-700 mb-6">Galería de Trabajos</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-6xl mx-auto">
          {[1, 2, 3, 4].map((n) => (
            <div key={n} className="bg-gray-200 h-40 rounded-xl shadow-inner flex items-center justify-center text-gray-500">Imagen {n}</div>
          ))}
        </div>
      </section>

      {/* Cobertura */}
      <section className="py-16 px-6 bg-gray-100 text-center">
        <h2 className="text-3xl font-poppins text-cyan-700 mb-6">Cobertura</h2>
        <p className="mb-4 text-gray-600">Atendemos todas las comunas de la V Región: Valparaíso, Viña del Mar, Quilpué, Villa Alemana, Quillota, San Felipe, Los Andes, San Antonio, y más.</p>
        <iframe className="w-full max-w-4xl mx-auto h-64 rounded-xl border" src="https://www.google.com/maps/d/u/0/embed?mid=1rQom8G_r4LDlmkxKk0hVW_-lZuA-MNE&ehbc=2E312F" loading="lazy"></iframe>
      </section>

      {/* Contacto */}
      <section className="py-16 px-6 bg-sky-50 text-center">
        <h2 className="text-3xl font-poppins text-cyan-700 mb-6">Contáctanos</h2>
        <div className="flex justify-center text-6xl mb-4">📩</div>
        <form className="max-w-xl mx-auto space-y-4 text-left">
          <input type="text" placeholder="Nombre" className="w-full p-3 border rounded-lg" />
          <input type="email" placeholder="Correo" className="w-full p-3 border rounded-lg" />
          <textarea placeholder="Mensaje" className="w-full p-3 border rounded-lg" rows="4"></textarea>
          <button className="w-full bg-cyan-600 text-white px-6 py-3 rounded-full hover:bg-cyan-700 transition shadow">
            Enviar mensaje
          </button>
        </form>
        <p className="mt-6 text-gray-600">O contáctanos directamente:</p>
        <a href="https://wa.me/56996519050" className="inline-block mt-2 bg-green-500 text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-green-600 transition shadow-lg">WhatsApp</a>
      </section>

      {/* Footer */}
      <footer className="text-center py-6 text-gray-500 text-sm bg-white space-y-1">
        <p>© 2025 InnovaQuinta Spa. Todos los derechos reservados.</p>
        <p>Correo: <a href="mailto:Sebastianjo28@gmail.com" className="underline">Sebastianjo28@gmail.com</a></p>
        <p>Instagram: <a href="https://instagram.com/innovaquinta" className="underline">instagram.com/innovaquinta</a></p>
      </footer>

      <a href="#" className="fixed bottom-20 right-4 z-50 bg-cyan-700 text-white px-3 py-2 rounded-full shadow hover:bg-cyan-800 transition block sm:hidden">↑</a>
      <a href="https://wa.me/56996519050" className="fixed bottom-4 right-4 z-50 bg-green-500 hover:bg-green-600 text-white px-4 py-3 rounded-full shadow-lg transition block sm:hidden" target="_blank" rel="noopener noreferrer">💬</a>
    </div>
  );
}
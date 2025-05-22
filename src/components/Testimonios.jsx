import React from "react";

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

export default function Testimonios() {
  return (
    <section className="py-12 px-6 bg-amber-50 text-center" data-aos="fade-up">
      <h2 className="text-3xl font-poppins text-cyan-700 mb-6">Testimonios</h2>
      <div className="grid gap-6 md:grid-cols-3 max-w-6xl mx-auto">
        {testimonios.map((t, i) => (
          <div
            key={i}
            className="bg-white p-6 rounded-xl shadow-md"
            data-aos="zoom-in"
            data-aos-delay={i * 100}
          >
            <img src={t.imagen} alt={t.nombre} className="w-16 h-16 mx-auto mb-4 rounded-full object-cover" />
            <blockquote className="italic text-gray-600">“{t.mensaje}”</blockquote>
            <p className="mt-2 font-semibold text-cyan-700">{t.nombre}</p>
            <p className="text-sm text-gray-500">{t.comuna}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

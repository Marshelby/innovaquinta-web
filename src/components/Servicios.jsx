import React from "react";

export default function Servicios() {
  const servicios = [
    ["❄️", "Climatización", "Instalación y mantención de aire acondicionado y calefacción."],
    ["🧊", "Refrigeración", "Soluciones para equipos industriales y comerciales."],
    ["⚡", "Electricidad", "Instalaciones eléctricas seguras y certificadas."],
    ["🛠️", "Gasfitería", "Reparaciones, mantención y proyectos de red de agua y gas."]
  ];

  return (
    <section className="py-16 px-6 bg-cyan-50">
      <h2 className="text-3xl text-center font-poppins text-cyan-700 mb-10">Nuestros Servicios</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
        {servicios.map(([icon, title, desc], i) => (
          <div key={i} className="p-6 bg-white rounded-xl shadow hover:shadow-lg transition text-center">
            <div className="text-4xl mb-2">{icon}</div>
            <h3 className="text-xl font-bold mb-2 text-cyan-600">{title}</h3>
            <p>{desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
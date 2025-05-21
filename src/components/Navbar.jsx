import React, { useEffect, useState } from "react";

export default function Navbar() {
  const [active, setActive] = useState("");

  useEffect(() => {
    const sections = document.querySelectorAll("section[id]");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActive(entry.target.id);
          }
        });
      },
      { threshold: 0.6 }
    );

    sections.forEach((section) => observer.observe(section));
    return () => sections.forEach((section) => observer.unobserve(section));
  }, []);

  const linkClass = (id) =>
    active === id
      ? "text-cyan-700 font-semibold border-b-2 border-cyan-700 pb-1"
      : "text-gray-600 hover:text-cyan-700 transition";

  return (
    <nav className="sticky top-0 z-50 bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 py-3 flex justify-between items-center">
        <a href="#header" className="text-xl font-bold text-cyan-700 font-poppins">
          InnovaQuinta
        </a>
        <div className="space-x-4 hidden sm:block">
          <a href="#servicios" className={linkClass("servicios")}>Servicios</a>
          <a href="#testimonios" className={linkClass("testimonios")}>Testimonios</a>
          <a href="#galeria" className={linkClass("galeria")}>Galería</a>
          <a href="#cobertura" className={linkClass("cobertura")}>Cobertura</a>
          <a href="#contacto" className={linkClass("contacto")}>Contacto</a>
        </div>
      </div>
    </nav>
  );
}
import { useState, useEffect } from "react";

const Navbar = () => {
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const sections = ["servicios", "testimonios", "galeria", "cobertura", "contacto"];

    const handleScroll = () => {
      const scrollPosition = window.scrollY + window.innerHeight / 2;

      let current = "";
      for (const id of sections) {
        const section = document.getElementById(id);
        if (section && section.offsetTop <= scrollPosition) {
          current = id;
        }
      }
      setActiveSection(current);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // inicializar

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  const linkClass = (sectionId) =>
    `cursor-pointer hover:underline ${
      activeSection === sectionId ? "text-blue-600 font-bold" : ""
    }`;

  return (
    <nav className="fixed top-0 left-0 right-0 bg-white shadow-md z-50">
      <div className="max-w-7xl mx-auto px-4 py-3 flex justify-between items-center">
        <div className="text-xl font-bold text-cyan-800">InnovaQuinta</div>
        <div className="space-x-6 text-sm md:text-base">
          <span className={linkClass("servicios")} onClick={() => scrollToSection("servicios")}>
            Servicios
          </span>
          <span className={linkClass("testimonios")} onClick={() => scrollToSection("testimonios")}>
            Testimonios
          </span>
          <span className={linkClass("galeria")} onClick={() => scrollToSection("galeria")}>
            Galería
          </span>
          <span className={linkClass("cobertura")} onClick={() => scrollToSection("cobertura")}>
            Cobertura
          </span>
          <span className={linkClass("contacto")} onClick={() => scrollToSection("contacto")}>
            Contacto
          </span>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

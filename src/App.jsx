import React from "react";
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import Servicios from "./components/Servicios";
import Testimonios from "./components/Testimonios";
import Galeria from "./components/Galeria";
import Cobertura from "./components/Cobertura";
import Contacto from "./components/Contacto";
import Footer from "./components/Footer";

export default function App() {
  return (
    <div className="h-screen snap-y snap-mandatory overflow-y-scroll scroll-smooth font-inter bg-white text-gray-800">
      <Navbar />
      <section id="header" className="snap-start"><Header /></section>
      <section id="servicios" className="snap-start"><Servicios /></section>
      <section id="testimonios" className="snap-start"><Testimonios /></section>
      <section id="galeria" className="snap-start"><Galeria /></section>
      <section id="cobertura" className="snap-start"><Cobertura /></section>
      <section id="contacto" className="snap-start"><Contacto /></section>
      <Footer />
      <a href="#" className="fixed bottom-20 right-4 z-50 bg-cyan-700 text-white px-3 py-2 rounded-full shadow hover:bg-cyan-800 transition block sm:hidden">↑</a>
      <a href="https://wa.me/56996519050" className="fixed bottom-4 right-4 z-50 bg-green-500 hover:bg-green-600 text-white px-4 py-3 rounded-full shadow-lg transition block sm:hidden" target="_blank" rel="noopener noreferrer">💬</a>
    </div>
  );
}

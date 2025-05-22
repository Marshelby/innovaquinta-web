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
    <div className="min-h-screen font-inter scroll-smooth bg-white text-gray-800">
      <Navbar />
      <section id="header"><Header /></section>
      <section id="servicios"><Servicios /></section>
      <section id="testimonios"><Testimonios /></section>
      <section id="galeria"><Galeria /></section>
      <section id="cobertura"><Cobertura /></section>
      <section id="contacto"><Contacto /></section>
      <Footer />
      <a href="#" className="fixed bottom-20 right-4 z-50 bg-cyan-700 text-white px-3 py-2 rounded-full shadow hover:bg-cyan-800 transition block sm:hidden">↑</a>
      <a href="https://wa.me/56996519050" className="fixed bottom-4 right-4 z-50 bg-green-500 hover:bg-green-600 text-white px-4 py-3 rounded-full shadow-lg transition block sm:hidden" target="_blank" rel="noopener noreferrer">💬</a>
    </div>
  );
}
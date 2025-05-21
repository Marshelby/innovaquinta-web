import React from "react";

export default function Contacto() {
  return (
    <section data-aos="fade-up" className="py-16 px-6 bg-sky-50 text-center">
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
  );
}
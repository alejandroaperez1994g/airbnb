import React from "react";

function Footer() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-4 gap-y-10 px-32 py-14 bg-gray-100 text-gray-600">
      <div className="space-y-4 text-gray-800">
        <h5 className="font-bold">ACERCA</h5>
        <p>Como trabaja Airbnb</p>
        <p>Sala de redacción</p>
        <p>Inversores</p>
        <p>Airbnb Plus</p>
        <p>Airbnb Deluxe</p>
      </div>

      <div className="space-y-4 text-gray-800">
        <h5 className="font-bold">COMUNIDAD</h5>
        <p>Accesibilidad</p>
        <p>No es un sitio real</p>
      </div>
      <div className="space-y-4 text-gray-800">
        <h5 className="font-bold">SOPORTE</h5>
        <p>Centro de Ayuda</p>
      </div>

      <div className="space-y-4 text-gray-800">
        <h5 className="font-bold">ANFITRION</h5>
        <p>Centro de Ayuda</p>
      </div>
    </div>
  );
}

export default Footer;

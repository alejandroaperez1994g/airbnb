import React from "react";

function Footer() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-4 gap-y-10 px-32 py-14 bg-gray-100 text-gray-600">
      <div className="space-y-4 text-gray-800">
        <h5 className="font-bold">ACERCA</h5>
        <p className="cursor-pointer">Como trabaja Airbnb</p>
        <p className="cursor-pointer">Sala de redacción</p>
        <p className="cursor-pointer">Inversores</p>
        <p className="cursor-pointer">Airbnb Plus</p>
        <p className="cursor-pointer">Airbnb Deluxe</p>
        <p className="cursor-pointer">Hotel Tonight</p>
        <p className="cursor-pointer">Airbnb for Work</p>
        <p className="cursor-pointer">
          Todo es posible gracias a los anfitriones
        </p>
      </div>

      <div className="space-y-4 text-gray-800">
        <h5 className="font-bold">COMUNIDAD</h5>
        <p className="cursor-pointer">Accesibilidad</p>
        <p className="cursor-pointer">No es un sitio real</p>
        <p className="cursor-pointer">Colaboradores de Airbnb</p>
        <p className="cursor-pointer">Acoge a refugiados afganos</p>
        <p className="cursor-pointer">Invitaciones para los huéspedes</p>
        <p className="cursor-pointer">Airbnb.org</p>
      </div>
      <div className="space-y-4 text-gray-800">
        <h5 className="font-bold">ANFITRIÓN</h5>
        <p className="cursor-pointer">Ofrece tu alojamiento</p>
        <p className="cursor-pointer">Ofrece una experiencia online</p>
        <p className="cursor-pointer">Ofrece una experiencia</p>
        <p className="cursor-pointer">Ser un anfitrión responsable</p>
        <p className="cursor-pointer">Invita a anfitriones</p>
        <p className="cursor-pointer">Centro de recursos</p>
        <p className="cursor-pointer">Centro de la comunidad</p>
      </div>
      <div className="space-y-4 text-gray-800">
        <h5 className="font-bold">ASISTENCIA</h5>
        <p className="cursor-pointer">Nuestra respuesta ante la COVID-19</p>
        <p className="cursor-pointer">Centro de ayuda</p>
        <p className="cursor-pointer">Opciones de cancelación</p>
        <p className="cursor-pointer">Servicio de asistencia para vecinos</p>
        <p className="cursor-pointer">Confianza y seguridad</p>
      </div>
    </div>
  );
}

export default Footer;

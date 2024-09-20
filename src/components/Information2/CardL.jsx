import React from 'react'
import img1 from '../../assets/e1.webp'
import img2 from '../../assets/e2.jpg'
import img3 from '../../assets/e3.jpg'

export const CardL = () => {
  return (
    <div  data-aos="fade-up" className="grid grid-cols-1 md:grid-cols-3 font-montserrat">
    {/* Card 1 */}
    <div className="relative bg-teal-500 text-white p-8 overflow-hidden">
      <div className="absolute inset-0 bg-cover bg-center opacity-30" style={{ backgroundImage: `url(${img1})` }}></div>
      <div className="relative z-10">
      <h2 className="text-2xl font-bold mb-4">Apoyo en Salud Mental</h2>
      <p className="mb-4">
        Contamos con un grupo de profesionales comprometidos al servicio de nuestros pacientes.
      </p>
      <a href="#" className="font-semibold hover:underline">
        Saber más&nbsp;&raquo;
      </a>
    </div>
    </div>
    

    {/* Card 2 */}
    <div className="relative bg-green-500 text-white p-8 overflow-hidden">
      <div className="absolute inset-0 bg-cover bg-center opacity-30" style={{ backgroundImage: `url(${img2})` }}></div>
      <div className="relative z-10">
      <h2 className="text-2xl font-bold mb-4">Servicio médico domiciliario</h2>
      <p className="mb-4">
        Ofrecemos atención en medicina general con profesionales altamente calificados.
      </p>
      <a href="#" className="font-semibold hover:underline">
        Saber más&nbsp;&raquo;
      </a>
    </div>
    </div>

    {/* Card 3 */}
    <div className="relative bg-blue-500 text-white p-8  overflow-hidden">
      <div className="absolute inset-0 bg-cover bg-center opacity-30" style={{ backgroundImage: `url(${img3})` }}></div>
      <div className="relative z-10">
      <h2 className="text-2xl font-bold mb-4">Enfermeras Profesionales y Auxiliares</h2>
      <p className="mb-4">
        Profesionales capacitados para prestar asistencia y cuidados en salud.
      </p>
      <a href="#" className="font-semibold hover:underline">
        Saber más&nbsp;&raquo;
      </a>
    </div>
    </div>
  </div>
  )
}

import React from 'react'

export const Info = () => {
  return (
    <div  data-aos="fade-up" className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20 font-montserrat">
  <div className="flex flex-col mb-6 lg:flex-row md:mb-10">
    <div className="lg:w-1/2">
      <h2 className="my-4 border-l-8 border-primary/50 py-2 pl-4 text-4xl font-bold font-anton text-gray-800 dark:text-white">
        ACERCA DE Apostol Salud
      </h2>
    </div>
    <div className="lg:w-1/2">
      <p className="text-base text-gray-700 md:text-lg">
        En Apostol Salud, nos dedicamos a proporcionar un enfoque integral y personalizado en el cuidado de la salud. Nuestro objetivo es ofrecer servicios de enfermería con el más alto nivel de profesionalismo y dedicación, adaptados a las necesidades individuales de cada paciente.
      </p>
    </div>
  </div>

  <div className="grid gap-8 row-gap-10 sm:grid-cols-2 lg:grid-cols-4">
    {/* Misión y Visión */}
    <div>
      <div className="flex items-center justify-center w-16 h-16 mb-4 rounded-full bg-indigo-50">
        <svg className="w-7 h-7 text-deep-purple-accent-400" viewBox="0 0 24 24" strokeLinecap="round">
          <path
            d="M12 2C6.48 2 2 6.48 2 12c0 5.52 4.48 10 10 10s10-4.48 10-10C22 6.48 17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z"
            fill="none"
            stroke="currentColor"
          />
        </svg>
      </div>
      <h6 className="mb-2 font-semibold leading-5">Nuestra Misión</h6>
      <p className="mb-3 text-sm text-gray-900">
        Proporcionar cuidados de salud de alta calidad con un enfoque personalizado, asegurando la satisfacción y el bienestar de nuestros pacientes.
      </p>
    </div>
    
    {/* Nuestro Equipo */}
    <div>
      <div className="flex items-center justify-center w-16 h-16 mb-4 rounded-full bg-indigo-50">
        <svg className="w-7 h-7 text-deep-purple-accent-400" viewBox="0 0 24 24" strokeLinecap="round">
          <path
            d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-3.33 0-10 1.67-10 5v3h20v-3c0-3.33-6.67-5-10-5z"
            fill="none"
            stroke="currentColor"
          />
        </svg>
      </div>
      <h6 className="mb-2 font-semibold leading-5">Nuestro Equipo</h6>
      <p className="mb-3 text-sm text-gray-900">
        Contamos con un equipo de profesionales altamente capacitados y comprometidos con el cuidado integral de la salud de nuestros pacientes.
      </p>
    </div>
    
    {/* Enfoque Personalizado */}
    <div>
      <div className="flex items-center justify-center w-16 h-16 mb-4 rounded-full bg-indigo-50">
        <svg className="w-7 h-7 text-deep-purple-accent-400" viewBox="0 0 24 24" strokeLinecap="round">
          <path
            d="M16 12V8h-1V4H9v4H8v4H4v4h16v-4h-4zm-6-6h4v2h-4V6zm6 10H8v-2h8v2z"
            fill="none"
            stroke="currentColor"
          />
        </svg>
      </div>
      <h6 className="mb-2 font-semibold leading-5">Enfoque Personalizado</h6>
      <p className="mb-3 text-sm text-gray-900">
        Nos especializamos en ofrecer un enfoque personalizado en el cuidado de la salud, adaptando nuestros servicios a las necesidades específicas de cada paciente.
      </p>
    </div>

    {/* Valores y Principios */}
    <div>
      <div className="flex items-center justify-center w-16 h-16 mb-4 rounded-full bg-indigo-50">
        <svg className="w-7 h-7 text-deep-purple-accent-400" viewBox="0 0 24 24" strokeLinecap="round">
          <path
            d="M3 3v18h18V3H3zm8 14v-4H7v4H5v-6H3V9h2V7h2v2h4V7h2v6h-2v6h-2z"
            fill="none"
            stroke="currentColor"
          />
        </svg>
      </div>
      <h6 className="mb-2 font-semibold leading-5">Valores y Principios</h6>
      <p className="mb-3 text-sm text-gray-900">
        Nos guiamos por principios de integridad, profesionalismo y empatía, asegurando la mejor atención para nuestros pacientes.
      </p>
    </div>
  </div>
</div>
  )
}

import React from 'react'

export const BannerNotice0 = () => {

    
  return (
       <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20 font-montserrat">
  <div className="flex flex-col lg:flex-row lg:items-center lg:space-x-8">
    <div className="flex flex-col justify-center bg-gradient-to-r from-blue-100 to-white p-6 rounded-lg shadow-lg lg:flex-1">
      <div className="max-w-xl mb-6">
        <h2 className="max-w-lg mb-6 font-anton text-3xl font-bold tracking-wider text-gray-900 sm:text-4xl sm:leading-none">
          INNOVACIONES QUE{' '}
          <span className="relative px-1">
            <div className="absolute inset-x-0 bottom-0 h-3 transform -skew-x-12" />
            <span className="relative inline-block text-primary">
              ESTAN REVOLUCIONANDO
            </span>
          </span>
          <br className="hidden md:block" />
          EN LA MEDICINA
        </h2>
        <p className="text-base text-gray-700 md:text-lg mb-6">
          La tecnología sigue transformando la forma en que brindamos atención médica. Descubre cómo los avances en telemedicina, monitoreo remoto de pacientes y dispositivos portátiles están mejorando la eficiencia y calidad del cuidado de enfermería.
        </p>
      </div>
      <div className="grid gap-5 row-gap-8 sm:grid-cols-2">
        <div className="bg-white border-l-4 shadow-lg border-dark rounded-lg">
          <div className="h-full p-6 border border-l-0 rounded-r-lg">
            <h6 className="mb-2 font-semibold text-primary leading-5">
              Telemedicina y Enfermería
            </h6>
            <p className="text-sm text-gray-900">
              Las consultas virtuales permiten a los enfermeros monitorear a los pacientes a distancia, ofreciendo atención rápida y efectiva sin la necesidad de visitas físicas.
            </p>
          </div>
        </div>
        <div className="bg-white border-l-4 shadow-lg border-dark rounded-lg">
          <div className="h-full p-6 border border-l-0 rounded-r-lg">
            <h6 className="mb-2 font-semibold text-primary leading-5">
              Dispositivos de Monitoreo Remoto
            </h6>
            <p className="text-sm text-gray-900">
              Los nuevos dispositivos portátiles permiten medir signos vitales y otras variables en tiempo real, lo que mejora el monitoreo continuo de pacientes crónicos.
            </p>
          </div>
        </div>
      </div>
    </div>
    <div className="lg:flex-1 lg:ml-8">
      <img
        className="object-cover w-full rounded-lg shadow-lg"
        src="https://images.pexels.com/photos/3844581/pexels-photo-3844581.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        alt="Innovaciones en enfermería"
      />
    </div>
  </div>
</div>
  )
}

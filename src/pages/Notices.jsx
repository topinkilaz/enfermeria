import React, { useEffect } from 'react'

import { BannerHeader } from '../components/Bannerheader/BannerHeader'
import img from'../assets/banner.png'
import { BlogsComp } from '../components/Blogs/BlogsComp'


export const Notices = () => {
  useEffect(() => {
    window.scrollTo(0, 0); 
  }, [])
  

  
  return (
    
    <>
    <BannerHeader img={img}>
    <div className="relative z-10 flex flex-col items-center justify-center h-full bg-opacity-50">
    <h1 className="text-black text-xl sm:text-2xl font-poppins font-bold text-shadow">Centro de Salud</h1>
    <h2 className="text-black text-3xl sm:text-5xl font-anton mt-4 text-shadow">NOTICIAS <span className='font-montserrat font-bold text-3xl sm:text-5xl'> Eventos</span></h2>
  </div>
    </BannerHeader>
    <div  data-aos="fade-up" className='container'>

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


<div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
  <div className="p-8 bg-gradient-to-r from-blue-300 via-teal-50 to-white rounded-lg shadow-lg sm:p-16">
    <div className="flex flex-col lg:flex-row items-center lg:items-start">
      <div className="mb-6 lg:mb-0 lg:w-1/2 lg:pr-5">
        <h2 className="font-sans text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl sm:leading-none mb-4">
          Cuida tu salud diariamente
          <br className="hidden md:block" />
          con pequeños cambios{' '}
          <span className="inline-block text-primary">
            que hacen la diferencia
          </span>
        </h2>
        <p className="text-base text-gray-700 mb-6">
          Mantener una rutina de sueño saludable, beber suficiente agua, y hacer actividad física regularmente son claves para mejorar tu bienestar. Pequeños cambios como caminar 30 minutos al día o incluir más frutas y verduras en tu dieta pueden tener un gran impacto en tu salud a largo plazo.
        </p>
      </div>
      <div className="lg:w-1/2 lg:pl-5 flex items-center justify-center">
        <img
          className="object-cover w-full h-auto max-h-80 rounded-lg shadow-md"
          src="https://images.pexels.com/photos/4045734/pexels-photo-4045734.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
          alt="Salud y bienestar"
        />
      </div>
    </div>
  </div>
</div>



    <h1 className="  font-anton my-8 border-l-8 border-primary/50  pl-2 text-3xl   py-2 ">
            NOTICIAS ACTUALES ( MEDICINA / SALUD ) 
          </h1>
          <p className="mb-4 font-montserrat text-base text-gray-700">
            Mantente informado sobre los últimos avances y desarrollos en el campo de la medicina y la salud. En esta sección, te ofrecemos una selección de noticias actuales, innovaciones tecnológicas, y estudios recientes que están dando forma al cuidado de la salud.
        </p>
    </div>
    
    <BlogsComp limit={9}  />
  
    </>
  )
}

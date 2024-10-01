import React from 'react'
import BannerImg from '../../assets/comp.png'
import { Link } from 'react-router-dom'


export const Information = () => {
  return (
    <>
    
    
      
      <div data-aos="fade-up" className="min-h-[550px] bg-gray-100 ">
        <div className="min-h-[550px] flex justify-center items-center backdrop-blur-xl py-12 sm:py-0 ">
          <div className="container">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 items-center">
             
              {/* text content section */}
              <div className="flex flex-col justify-center gap-6 sm:pt-0 lg:px-16">
              <h1 className="text-5xl lg:text-3xl font-bold font-anton text-gray-800 mt-32 text-shadow">
            Bienvenidos a <br /><span className="text-blue-700 font-anton text-shadow text-7xl lg:text-6xl">ENFERMERIA SANTIAGO SALUD</span> <br />
            
          </h1>
          <span className="text-secondary font-montserrat">“Cuidado integral, para tu bienestar total”</span>
          <p className="text-lg font-semibold font-montserrat border-l-8 border-secondary/50 pl-4  text-gray-600 my-4">
          Nuestro Centro de Enfermería Integral y Atención Domiciliaria, está destinada a mejorar la calidad de vida de las personas que padezcan enfermedades crónicas o que tengan algún tipo de limitación, tanto para cuidarse como para desplazarse a un Centro de Salud.
          </p>
          <p className="text-gray-600 mb-3 font-montserrat">
            Nace en el año 2024 como respuesta a la necesidad de nuestros usuarios de obtener una atención en salud individualizada y caracterizada por la alta calidad de los servicios hospitalarios; atención que fue extendida al servicio domiciliario brindando desde la comodidad de su hogar un servicio integral en salud.
          </p>
          <ul className="list-none mb-12 font-montserrat">
            <li className="flex items-center text-green-500 mb-3">
              ✔️ <Link className="ml-2 hover:text-primary text-gray-700">Atención en nuestro Centro de Enfermería.</Link>
            </li>
            <li className="flex items-center text-green-500 mb-3">
              ✔️ <Link className="ml-2 hover:text-primary text-gray-700">Atención domiciliar.</Link>
            </li>
            <li className="flex items-center text-green-500">
              ✔️ <Link className="ml-2 hover:text-primary text-gray-700">Compromiso de calidad.</Link>
            </li>
          </ul>
              </div>
               {/* Image section */}
               <div className=''>
                <img
                  src={BannerImg}
                  alt="biryani img"
                  className="rounded-lg max-w-[600px] w-full mx-auto drop-shadow-[5px_5px_12px_rgba(0,0,0,0.7)] object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
   
    
    </>
  )
}

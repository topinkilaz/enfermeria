import React, { useEffect, useRef, useState } from 'react'
import portada from '../assets/video/portada.mp4'
import { Link } from 'react-router-dom'

import BannerPic from '../components/BannerPic/BannerPic'
import BannerImg from '../assets/enfermeria.jpg'
import { BlogsComp } from '../components/Blogs/BlogsComp'


import { OrderPopup } from '../components/OrderPopup/OrderPopup'
import { Information } from '../components/Information/Information'
import { CardL } from '../components/Information2/CardL'
import { Places } from '../components/places/Places'
import { Questions } from '../components/FAQ/Questions'








export const Home = () => {
  useEffect(() => {
    window.scrollTo(0, 0); 
  }, [])

  const [orderPopup, setOrderPopup] = useState(false);

  const handleOrderPopup = () => {
    setOrderPopup(!orderPopup);
  };



  const informationRef = useRef(null);

  // Función para hacer scroll hacia la sección Information
  const scrollToInformation = () => {
    informationRef.current.scrollIntoView({ behavior: 'smooth' });
  };

  
  return (
    <>
      <div>
        <div className="h-[900px] relative">
          <video
            autoPlay
            loop
            muted
            className="absolute right-0 top-0 h-[900px] w-full object-cover z-[-1]"
          >
            <source src={portada} type="video/mp4" />
          </video>
          <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
            <div className="w-full px-4">
              <div
                className="hero-content text-center max-w-[780px] mx-auto wow fadeInUp"
                data-wow-delay=".2s"
              >
                <h1 className="text-black font-bold font-anton text-shadow text-3xl sm:text-4xl md:text-[45px] leading-snug sm:leading-snug md:leading-snug mb-8">
                  <span className="text-6xl">C</span>OMPROMISO DE{' '}
                  <span className="text-6xl">C</span>ALIDAD
                </h1>
                <hr />
                <p
                  data-aos="fade-up"
                  className="text-base font-montserrat sm:text-lg sm:leading-relaxed md:text-xl md:leading-relaxed mx-auto mb-10 text-[#e4e4e4] max-w-[600px]"
                >
                  Nos dedicamos a cuidar de ti con dedicación y esmero, ofreciendo servicios de enfermería que van más allá de lo habitual para asegurar tu bienestar a largo plazo. Contamos con un equipo de profesionales comprometidos en brindarte una atención cercana, personalizada y de alta calidad en cada momento.
                </p>
                <ul className="flex flex-wrap items-center justify-center mb-10">
                  <li>
                    <button
                      onClick={scrollToInformation}
                      className="py-4 px-6 sm:px-10 inline-flex items-center justify-center text-center text-black font-montserrat text-base bg-white hover:text-primary hover:shadow-lg font-medium rounded-lg transition duration-300 ease-in-out"
                    >
                      Más información
                    </button>
                  </li>
                  <li>
                    <Link
                      to="/contact"
                      className="text-base font-medium font-montserrat text-white py-4 px-6 sm:px-10 flex items-center hover:opacity-70 transition duration-300 ease-in-out"
                    >
                      Contáctanos
                      <span className="pl-2">
                        <svg
                          width="20"
                          height="8"
                          viewBox="0 0 20 8"
                          className="fill-current"
                        >
                          <path d="M19.2188 2.90632L17.0625 0.343819C16.875 0.125069 16.5312 0.0938193 16.2812 0.281319C16.0625 0.468819 16.0312 0.812569 16.2188 1.06257L18.25 3.46882H0.9375C0.625 3.46882 0.375 3.71882 0.375 4.03132C0.375 4.34382 0.625 4.59382 0.9375 4.59382H18.25L16.2188 7.00007C16.0312 7.21882 16.0625 7.56257 16.2812 7.78132C16.375 7.87507 16.5 7.90632 16.625 7.90632C16.7812 7.90632 16.9375 7.84382 17.0312 7.71882L19.1875 5.15632C19.75 4.46882 19.75 3.53132 19.2188 2.90632Z" />
                        </svg>
                      </span>
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Sección Information con ref */}
        <div ref={informationRef}>
          <Information />
        </div>

        <CardL />
        <Places />
        <BannerPic img={BannerImg} />
        <div data-aos="fade-up" className="container">
          <h1 className="font-anton my-8 border-l-8 border-primary/50 pl-2 text-3xl font-bold py-2">
            PUBLICACIONES RECIENTES
          </h1>
        </div>
        <BlogsComp limit={3} />

        <Questions />

        <OrderPopup orderPopup={orderPopup} setOrderPopup={setOrderPopup} />
      </div>
    </>
  );
};
import React, { useEffect } from 'react'
import img from '../assets/banner.png'
import { BannerHeader } from '../components/Bannerheader/BannerHeader'
import { StickySidebar } from '../components/Serv/StickySidebar'
import { ServicesInfo } from '../components/Serv/ServicesInfo'
import { useLocation } from 'react-router-dom'


export const Services = () => {
  const { hash } = useLocation();

  useEffect(() => {
    if (!hash) {
      window.scrollTo(0, 0); 
    }
   
  }, [])


 
  return (
    <>
    <BannerHeader img={img}>
    <div className="relative z-10 flex flex-col items-center justify-center h-full bg-opacity-50">
    <h1 className="text-black text-xl sm:text-2xl font-poppins font-bold text-shadow">Enfermería Santiago Salud</h1>
    <h2 className="text-black text-3xl sm:text-5xl font-anton mt-4 text-shadow">Servicios<span className='font-montserrat font-bold text-3xl sm:text-5xl'> Enfermeria</span></h2>
  </div>
    </BannerHeader>
    <div id='servicio' className="bg-white w-full flex flex-col gap-5 px-3 md:px-16 lg:px-28 md:flex-row">
      {/* sticky sidebar */}
     <StickySidebar/>
<ServicesInfo defaultId ="eag1mr5obv4g8mjlcarn71ex"/>
     
    </div>
    </>
  )
}





import React, { useEffect } from 'react'
import { BannerHeader } from '../components/Bannerheader/BannerHeader'
import img from '../assets/banner.png'
import { Location } from '../components/Location/Location'
import { ContactHeader } from '../components/Location/ContactHeader'

export const Contact = () => {
  useEffect(() => {
    window.scrollTo(0, 0); 
  }, [])
  return (
    <>
     <BannerHeader img={img}>
     <div className="relative z-10 flex flex-col items-center justify-center h-full bg-opacity-50">
<h1 className="text-black text-xl sm:text-2xl font-poppins font-bold text-shadow">Centro de Salud</h1>
<h2 className="text-black text-3xl sm:text-5xl font-anton mt-4 text-shadow">CONTACTO <span className='font-montserrat font-bold text-3xl sm:text-5xl'> Ubicaciones</span></h2>
</div>
</BannerHeader>
    <div className='container'>
   


<ContactHeader/>
<Location/>
    </div>
   
    </>
  )
}

import React, { useEffect } from 'react'

import { BannerHeader } from '../components/Bannerheader/BannerHeader'
import img from'../assets/banner.png'
import { BlogsComp } from '../components/Blogs/BlogsComp'
import { BannerNotice } from '../components/Blogs/BannerNotice'
import { useFetch } from '../Hooks/useFetch'
import { BannerNotice0 } from '../components/Blogs/BannerNotice0'


export const Notices = () => {
  useEffect(() => {
    window.scrollTo(0, 0); 
  }, [])
  
/*   const yesterday = new Date();
  yesterday.setDate(yesterday.getDate() - 2);
  const formattedYesterday = yesterday.toISOString().split('T')[0];


  const key= '3f99b611d2724800a9b792b1ea48609c';
  const value= 'enfermedades';
  const {data}=useFetch(`https://newsapi.org/v2/everything?q=${value}&from=${formattedYesterday}&sortBy=relevancy&language=es&apiKey=${key}`)
 */
 
  
  return (
    
    <>
    <BannerHeader img={img}>
    <div className="relative z-10 flex flex-col items-center justify-center h-full bg-opacity-50">
    <h1 className="text-black text-xl sm:text-2xl font-poppins font-bold text-shadow">Enfermería Santiago Salud</h1>
    <h2 className="text-black text-3xl sm:text-5xl font-anton mt-4 text-shadow">NOTICIAS <span className='font-montserrat font-bold text-3xl sm:text-5xl'> Eventos</span></h2>
  </div>
    </BannerHeader>
    <div  data-aos="fade-up" className='container'>
     
 



<h1 className="  font-anton my-8 border-l-8 border-primary/50  pl-2 text-3xl   py-2 ">
            NOTICIAS ACTUALES ( MEDICINA / SALUD ) 
          </h1>
          <p className="mb-4 font-montserrat text-base text-gray-700">
            Mantente informado sobre los últimos avances y desarrollos en el campo de la medicina y la salud. En esta sección, te ofrecemos una selección de noticias actuales, innovaciones tecnológicas, y estudios recientes que están dando forma al cuidado de la salud.
        </p>

   
    </div>
    <BlogsComp limit={9}  />
   
<div data-aos="fade-up" className='container' >
<BannerNotice0   />
</div>
  
    </>
  )
}


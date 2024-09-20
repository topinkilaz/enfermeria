import React from 'react'


export const BannerHeader = ({ img, children}) => {
    const bgImage = {
        backgroundImage: `url(${img})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        height: "500px",
      };
  return (
    <>
    <div 
   data-aos="fade-up"
     
    className="relative w-full h-[250px] md:h-[350px] lg:h-[450px] bg-cover bg-center" 
    style={bgImage}

  >
    <div className="absolute inset-0 flex items-center justify-center text-white text-2xl">
        {children}
      </div>
    
    
  </div>
  
    </>
  
  )
}





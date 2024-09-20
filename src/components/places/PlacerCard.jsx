import React from 'react'
import { IoLocationSharp } from 'react-icons/io5'
import { Link } from 'react-router-dom'

export const PlacerCard = ({
    img,
    title,
    location,
    description,
    url,
    type,
    
  }) => {
  return (
    <>
    <div
      className=" shadow-lg transition-all duration-500 hover:shadow-xl dark:bg-slate-950 dark:text-white cursor-pointer m-2"
      
    >
      <div className="overflow-hidden">
        <img
          src={img}
          alt="No image"
          className="mx-auto h-[220px] w-full object-cover transition duration-700 hover:skew-x-2 hover:scale-110"
        />
      </div>

      <div className="space-y-2 p-3">
        <h1 className="line-clamp-1 font-bold text-xl">{title}</h1>
        <div className="flex items-center gap-2 opacity-70">
          <IoLocationSharp />
          <span>{location}</span>
        </div>
        <p className="line-clamp-4">{description}</p>
        <div className="flex items-center justify-between border-t-2 py-3 !mt-3">
          <div className="opacity-70">
            <p>{type}</p>
          </div>
          <div>
           
             <Link to={url}>
              <button className="text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 shadow-lg shadow-blue-500/50 dark:shadow-lg dark:shadow-blue-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 ">
              Ver más
              </button>
             </Link>
              
          </div>
        </div>
      </div>
    </div>
  </>
  )
}

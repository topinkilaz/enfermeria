import React from 'react'

export const BannerNotice = ({data}) => {

  if (!data || !data.articles || data.articles.length === 0) {
    return null; // Puedes manejar aquí el caso cuando no haya resultados
  }
  const InfoData = data.articles[0];
  return (
    <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
  <div className="p-8 bg-gradient-to-r from-blue-300 via-teal-50 to-white rounded-lg shadow-lg sm:p-16">
    <div className="flex flex-col lg:flex-row items-center lg:items-start">
      <div className="mb-6 lg:mb-0 lg:w-1/2 lg:pr-5">
        <h2 className="font-sans text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl sm:leading-none mb-4">
          {InfoData.title}
          
        </h2>
        <p className="text-sm italic text-gray-600 mb-5">
  {InfoData.source.name}
</p>
        <p className="text-base text-gray-700 mb-6">
          {InfoData.description}
        </p>
   
        <button
  onClick={() => window.open(InfoData.url, '_blank')}
  className="px-4 py-2 bg-blue-500 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75 transition duration-300 ease-in-out"
>
  Mas Información...
</button>
      </div>
      <div className="lg:w-1/2 lg:pl-5 flex items-center justify-center">
        <img
          className="object-cover w-full h-auto max-h-80 rounded-lg shadow-md"
          src={InfoData.image}
          alt="Salud y bienestar"
        />
      </div>
      
    </div>
  </div>
</div>
  )
}

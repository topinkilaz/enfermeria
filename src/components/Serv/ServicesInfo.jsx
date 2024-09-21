import React from 'react';

import { useParams } from 'react-router-dom';
import { useFetch } from '../../Hooks/useFetch';

export const ServicesInfo = () => {
  const { id } = useParams(); // Captura el ID del servicio desde la URL
  const { data, isLoading, hasError, error } = useFetch(`http://localhost:1337/api/posts/${id}`);
  

  if (isLoading) {
    return <p>Cargando servicio...</p>;
  }

  if (hasError) {
    return <p>Error {error.code}: {error.message}</p>;
  }

  if (!data || !data.data) {
    return <p>No se encontró el servicio.</p>;
  }

  const service = data.data;
  

  return (
    <div>
      <div data-aos="fade-up" className="mb-4 top-4 md:mb-0 w-full max-w-screen-md mx-auto relative" style={{ height: '24em' }}>
        <div className="absolute left-0 bottom-0 w-full h-full z-10 " style={{ backgroundImage: 'linear-gradient(180deg, transparent, rgba(0,0,0,.7))' }}></div>
        <img
          src="URL_DE_LA_IMAGEN_DEL_SERVICIO" // Aquí reemplaza con la URL de la imagen que obtengas del servicio
          alt={service.Title}
          className="absolute left-0 top-0 w-full h-full z-0 object-cover"
        />
        <div className="p-4 absolute bottom-0 left-0 z-20">
          <a href="#" className="px-4 py-1 bg-black text-gray-200 inline-flex items-center justify-center mb-2">
            {service.Title}
          </a>
          <h2 className="text-4xl font-semibold text-gray-100 leading-tight">
            {service.description}
          </h2>
          <div className="flex mt-3">
            <img
              src="https://randomuser.me/api/portraits/men/97.jpg"
              alt="Author"
              className="h-10 w-10 rounded-full mr-2 object-cover"
            />
            <div>
              <p className="font-semibold text-gray-200 text-sm">Mike Sullivan</p>
              <p className="font-semibold text-gray-400 text-xs">{new Date(service.publishedAt).toLocaleDateString()}</p>
            </div>
          </div>
        </div>
      </div>

      <div data-aos="fade-up" className="px-4 lg:px-0 mt-12 text-gray-700 max-w-screen-md mx-auto text-lg leading-relaxed">
        {service.content.map((content, index) => (
          <p key={index} className="pb-6">
            {content.children[0].text}
          </p>
        ))}
      </div>
    </div>
  );
};
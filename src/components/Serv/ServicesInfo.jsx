import React, { useEffect } from 'react';
import { useLocation, useParams } from 'react-router-dom';
import { useFetch } from '../../Hooks/useFetch';
import  logo  from '../../assets/pogop.png'
import { RichTextRenderer } from './RichTextRenderer';

export const ServicesInfo = ({ defaultId = "eag1mr5obv4g8mjlcarn71ex" }) => {
  
  const { id } = useParams(); 
  const serviceId = id || defaultId; 
  const { data, isLoading, hasError, error } = useFetch(`https://strapi-santiagosalud-production.up.railway.app/api/posts/${serviceId}?populate=*`);

 

  const { hash } = useLocation();

  useEffect(() => {
    if (hash) {
      const element = document.querySelector(hash);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }, [serviceId]);




  if (isLoading) {
    return <p>Cargando servicio...</p>;
  }

  if (hasError) {
    return <p>Error {error.code}: {error.message}</p>;
  }

  // Asegúrate de que los datos existen y que contienen el servicio
  if (!data || !data.data) {
    return <p>No se encontró el servicio.</p>;
  }

  const service = data.data;

  // Asegúrate de que 'service.image' existe antes de intentar acceder a sus propiedades
  const imageUrl = service.image?.formats?.medium?.url || service.url || 'URL_DE_LA_IMAGEN_DEFAULT';


 
  return (
    <div>
      <div
        data-aos="fade-up"
        className="mb-4 top-4 md:mb-0 w-full max-w-screen-md mx-auto relative"
        style={{ height: '24em' }}
      >
        <div
          className="absolute left-0 bottom-0 w-full h-full z-10"
          style={{ backgroundImage: 'linear-gradient(180deg, transparent, rgba(0,0,0,.7))' }}
        ></div>

        {/* Asegúrate de mostrar una imagen válida o una por defecto */}
        <img
          src={imageUrl} 
          alt={service.title || 'Servicio sin título'} // Fallback en caso de que no haya título
          className="absolute left-0 top-0 w-full h-full z-0 object-cover"
        />

        <div className="p-4 absolute bottom-0 left-0 z-20">
          <span className="px-4 py-1 bg-black text-gray-200 inline-flex items-center justify-center mb-2">
            {service.title || 'Título del servicio'} {/* Usar el título o un fallback */}
          </span>
          <h2 className="text-4xl font-semibold text-gray-100 leading-tight">
            {service.subtitle || 'Subtítulo del servicio'} {/* Subtítulo o fallback */}
          </h2>
          <div className="flex mt-3">
            <img
              src={logo}
              alt="Author"
              className="h-10 w-10 rounded-full mr-2 object-cover"
            />
            <div>
              <p className="font-semibold text-gray-200 text-sm">Santiago Salud</p>
              <p className="font-semibold text-gray-400 text-xs">
                {new Date(service.publishedAt || service.createdAt).toLocaleDateString()} {/* Fecha */}
              </p>
            </div>
          </div>
        </div>
      </div>

      <div
        data-aos="fade-up"
        className="px-4 lg:px-0 mt-12 text-gray-700 max-w-screen-md mx-auto text-lg leading-relaxed"
      >
        <RichTextRenderer content={service.content} />
      </div>
    </div>
  );
};
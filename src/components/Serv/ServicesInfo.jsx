import React from 'react';
import { useParams } from 'react-router-dom';
import { useFetch } from '../../Hooks/useFetch';

export const ServicesInfo = ({ defaultId = 2 }) => {
  const { id } = useParams(); 
  const serviceId = id || defaultId; 
  const { data, isLoading, hasError, error } = useFetch(`https://strapi-enfermeria-app.onrender.com/api/posts/${serviceId}?populate=*`);

  console.log(data); // Verificar la estructura de los datos

  if (isLoading) {
    return <p>Cargando servicio...</p>;
  }

  if (hasError) {
    return <p>Error {error.code}: {error.message}</p>;
  }

  if (!data || !data.data) {
    return <p>No se encontró el servicio.</p>;
  }

  const service = data.data.attributes; // Accedemos a los atributos del servicio
  const imageUrl = service.image?.formats?.medium?.url || service.image?.url; // Usamos el formato medium si está disponible, o el URL original

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

        <img
          src={imageUrl ? imageUrl : 'URL_DE_LA_IMAGEN_DEFAULT'}
          alt={service.title} // Usar el campo correcto del título
          className="absolute left-0 top-0 w-full h-full z-0 object-cover"
        />

        <div className="p-4 absolute bottom-0 left-0 z-20">
          <a href="#" className="px-4 py-1 bg-black text-gray-200 inline-flex items-center justify-center mb-2">
            {service.title} {/* Usar el título */}
          </a>
          <h2 className="text-4xl font-semibold text-gray-100 leading-tight">
            {service.subtitle} {/* Aquí puedes mostrar el subtítulo o descripción */}
          </h2>
          <div className="flex mt-3">
            <img
              src="https://randomuser.me/api/portraits/men/97.jpg"
              alt="Author"
              className="h-10 w-10 rounded-full mr-2 object-cover"
            />
            <div>
              <p className="font-semibold text-gray-200 text-sm">Mike Sullivan</p>
              <p className="font-semibold text-gray-400 text-xs">
                {new Date(service.publishedAt || service.createdAt).toLocaleDateString()} {/* Fecha de publicación */}
              </p>
            </div>
          </div>
        </div>
      </div>

      <div
        data-aos="fade-up"
        className="px-4 lg:px-0 mt-12 text-gray-700 max-w-screen-md mx-auto text-lg leading-relaxed"
      >
        {service.content?.map((content, index) => (
          <p key={index} className="pb-6">
            {content.children.map((child, i) => child.text)} {/* Mostrar el contenido del texto */}
          </p>
        ))}
      </div>
    </div>
  );
};

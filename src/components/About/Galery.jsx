import React, { useState } from 'react';

export const Galery = () => {
  const [fullScreenImage, setFullScreenImage] = useState(null);

  const openFullScreen = (imageSrc) => {
    setFullScreenImage(imageSrc);
  };

  const closeFullScreen = () => {
    setFullScreenImage(null);
  };

  return (
    <section className="bg-white">
      <div className="px-4 py-5 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-5 font-montserrat">
        <div data-aos="fade-up" className="max-w-xl mb-10 md:mx-auto sm:text-center lg:max-w-2xl md:mb-12">
          <h2 className="max-w-lg mb-6 text-3xl font-bold font-anton tracking-wide leading-none text-gray-900 sm:text-4xl md:mx-auto">
            GALERIA DE FOTOS
          </h2>
          <p className="text-base text-gray-700 md:text-lg">
            Explora nuestra galería de fotos para conocer más sobre algunos de los servicios de enfermería que ofrecemos. Cada imagen ilustra nuestro compromiso con la calidad y el cuidado profesional.
          </p>
        </div>

        {/* Grid de imágenes */}
        <div  data-aos="fade-up" className="py-4 px-2 mx-auto max-w-screen-xl sm:py-4 lg:px-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-4 h-full">
            {/* Imagen 1 */}
            <div className="col-span-2 sm:col-span-1 md:col-span-2 bg-gray-50 h-auto md:h-full flex flex-col">
              <a
                
                className="group relative flex flex-col overflow-hidden rounded-lg px-4 pb-4 pt-40 flex-grow"
                onClick={() =>
                  openFullScreen(
                    'https://images.pexels.com/photos/5214962/pexels-photo-5214962.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
                  )
                }
              >
                <img
                  src="https://images.pexels.com/photos/5214962/pexels-photo-5214962.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                  alt="nurse"
                  className="absolute inset-0 h-full w-full object-cover group-hover:scale-105 transition-transform duration-500 ease-in-out"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-gray-900/25 to-gray-900/5"></div>
                <h3 className="z-10 text-2xl font-medium text-white absolute top-0 left-0 p-4 xs:text-xl md:text-3xl">
                  Atención
                </h3>
              </a>
            </div>

            {/* Imagen 2 */}
            <div className="col-span-2 sm:col-span-1 md:col-span-2 bg-stone-50">
              <a
                
                className="group relative flex flex-col overflow-hidden rounded-lg px-4 pb-4 pt-40 mb-4"
                onClick={() =>
                  openFullScreen(
                    'https://images.pexels.com/photos/7578803/pexels-photo-7578803.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
                  )
                }
              >
                <img
                  src="https://images.pexels.com/photos/7578803/pexels-photo-7578803.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                  alt="nurse"
                  className="absolute inset-0 h-full w-full object-cover group-hover:scale-105 transition-transform duration-500 ease-in-out"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-gray-900/25 to-gray-900/5"></div>
                <h3 className="z-10 text-2xl font-medium text-white absolute top-0 left-0 p-4 xs:text-xl md:text-3xl">
                  Diagnostico
                </h3>
              </a>

              <div className="grid gap-4 grid-cols-2 sm:grid-cols-2 lg:grid-cols-2">
                {/* Imagen 3 */}
                <a
                  
                  className="group relative flex flex-col overflow-hidden rounded-lg px-4 pb-4 pt-40"
                  onClick={() =>
                    openFullScreen(
                      'https://images.pexels.com/photos/3997722/pexels-photo-3997722.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
                    )
                  }
                >
                  <img
                    src="https://images.pexels.com/photos/3997722/pexels-photo-3997722.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                    alt="nurse"
                    className="absolute inset-0 h-full w-full object-cover group-hover:scale-105 transition-transform duration-500 ease-in-out"
                  />
                  <div className="absolute inset-0 bg-gradient-to-b from-gray-900/25 to-gray-900/5"></div>
                  <h3 className="z-10 text-2xl font-medium text-white absolute top-0 left-0 p-4 xs:text-xl md:text-3xl">
                    Vacunas
                  </h3>
                </a>

                {/* Imagen 4 */}
                <a
                
                  className="group relative flex flex-col overflow-hidden rounded-lg px-4 pb-4 pt-40"
                  onClick={() =>
                    openFullScreen(
                      'https://images.pexels.com/photos/8460349/pexels-photo-8460349.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
                    )
                  }
                >
                  <img
                    src="https://images.pexels.com/photos/8460349/pexels-photo-8460349.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                    alt="nurse"
                    className="absolute inset-0 h-full w-full object-cover group-hover:scale-105 transition-transform duration-500 ease-in-out"
                  />
                  <div className="absolute inset-0 bg-gradient-to-b from-gray-900/25 to-gray-900/5"></div>
                  <h3 className="z-10 text-2xl font-medium text-white absolute top-0 left-0 p-4 xs:text-xl md:text-3xl">
                    Curación
                  </h3>
                </a>
              </div>
            </div>

            {/* Imagen 5 */}
            <div className="col-span-2 sm:col-span-1 md:col-span-1 bg-sky-50 h-auto md:h-full flex flex-col">
              <a
                
                className="group relative flex flex-col overflow-hidden rounded-lg px-4 pb-4 pt-40 flex-grow"
                onClick={() =>
                  openFullScreen(
                    'https://images.pexels.com/photos/5215020/pexels-photo-5215020.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
                  )
                }
              >
                <img
                  src="https://images.pexels.com/photos/5215020/pexels-photo-5215020.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                  alt="nurse"
                  className="absolute inset-0 h-full w-full object-cover group-hover:scale-105 transition-transform duration-500 ease-in-out"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-gray-900/25 to-gray-900/5"></div>
                <h3 className="z-10 text-2xl font-medium text-white text-center absolute top-0 left-0 p-4 xs:text-xl md:text-3xl">
                  Atención a Domicilio
                </h3>
              </a>
            </div>
          </div>
        </div>

        {/* Modal de pantalla completa */}
        {fullScreenImage && (
          <div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-75"
            onClick={closeFullScreen}
          >
            <img
              src={fullScreenImage}
              alt="Full Screen"
              className="max-w-full max-h-full object-contain"
            />
            <button
              onClick={closeFullScreen}
              className="absolute top-4 right-4 text-white text-3xl font-bold"
            >
              &times;
            </button>
          </div>
        )}
      </div>
    </section>
  );
};

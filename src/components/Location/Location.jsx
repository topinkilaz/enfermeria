import React from "react";

export const Location = () => {
  return (
    <>
      <section data-aos="fade-up" className="">
        <div className="container my-4 font-montserrat">
          <h1 className="inline-block border-l-8 border-primary/50 py-2 pl-2 mb-4 text-xl sm:text-3xl font-anton">
            UBICACIÓN
          </h1>

          <div className="container mx-auto xl:px-32">
            <div className="grid items-center lg:grid-cols-2">
              <div className="mb-12 md:mt-12 lg:mt-0 lg:mb-0">
                <div className="relative z-[1] block rounded-lg bg-[hsla(0,0%,100%,0.55)] px-6 py-12 shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] backdrop-blur-[30px] dark:bg-[hsla(0,0%,5%,0.7)] dark:shadow-black/20 md:px-12 lg:-mr-14">
                  <h2 className="mb-12 text-3xl font-bold">Contáctanos</h2>
                  <form
                    action="https://api.web3forms.com/submit"
                    method="POST"
                    id="form"
                  >
                    <input
                      type="hidden"
                      name="access_key"
                      value="YOUR_ACCESS_KEY_HERE"
                    />
                    <input
                      type="hidden"
                      name="subject"
                      value="Nueva presentación de Web3Forms"
                    />
                    <input
                      type="checkbox"
                      name="botcheck"
                      id=""
                      style={{ display: 'none' }}
                    />

                    <div className="mb-6">
                      <label
                        htmlFor="name"
                        className="block mb-2 text-sm text-gray-400"
                      >
                        Nombre Completo
                      </label>
                      <input
                        type="text"
                        name="name"
                        id="name"
                        placeholder="Juan Pérez"
                        required
                        className="w-full px-3 py-2 h-12 rounded-sm placeholder-gray-500 text-gray-900 bg-gray-100 text-sm focus:outline-none"
                      />
                    </div>

                    <div className="mb-6">
                      <label
                        htmlFor="email"
                        className="block mb-2 text-sm text-gray-400"
                      >
                        Correo Electrónico
                      </label>
                      <input
                        type="email"
                        name="email"
                        id="email"
                        placeholder="tucorreo@empresa.com"
                        required
                        className="w-full px-3 py-2 h-12 rounded-sm placeholder-gray-500 text-gray-900 bg-gray-100 text-sm focus:outline-none"
                      />
                    </div>
                    <div className="mb-6">
                      <label
                        htmlFor="message"
                        className="block mb-2 text-sm text-gray-400"
                      >
                        Tu Mensaje
                      </label>
                      <textarea
                        rows="5"
                        name="message"
                        id="message"
                        placeholder="Tu mensaje aquí"
                        required
                        className="w-full px-3 py-2 rounded-sm placeholder-gray-500 text-gray-900 bg-gray-100 text-sm focus:outline-none"
                      />
                    </div>

                    <div className="mb-6">
                      <button
                        type="submit"
                        className="w-full bg-primary inline-block text-white no-underline hover:text-indigo-100 py-4 px-4 rounded-sm focus:outline-none"
                      >
                        Enviar Mensaje
                      </button>
                    </div>

                    <p className="text-base text-center text-gray-400" id="result"></p>
                  </form>
                </div>
              </div>
              <div className="md:mb-12 lg:mb-0">
                <div className="relative h-[800px] rounded-lg shadow-lg dark:shadow-black/20">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1585.6684166584948!2d-65.26258954814985!3d-19.047184752583174!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x93fbcf3603cbf2e5%3A0x6f6a42cc240d5f2c!2sJunin%20738%2C%20Sucre!5e0!3m2!1ses-419!2sbo!4v1691014739056!5m2!1ses-419!2sbo"
                    className="absolute left-0 top-0 h-full w-full rounded-lg"
                    frameBorder="0"
                    allowFullScreen
                  ></iframe>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

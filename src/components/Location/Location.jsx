import React, { useRef } from "react";
import emailjs from '@emailjs/browser';

export const Location = () => {
  const formRef = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    
    const serviceId = "service_q3a8i8r";
    const templateId = "template_2qsyrxi";
    const userId = "YnJFGkeaPUrq2WBk4"; // Cambié el nombre de 'apikey' a 'userId'

    emailjs.sendForm(serviceId, templateId, formRef.current, userId)
    .then((result) => {
      console.log(result.text);
      alert("¡Mensaje enviado con éxito!");
    })
    .catch((error) => {
      console.error(error);
      alert("Error al enviar el mensaje, por favor inténtalo de nuevo.");
    });
};


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
                   ref={formRef} onSubmit={sendEmail}
                  >
                    <div className="mb-6">
                      <label
                        htmlFor="name"
                        className="block mb-2 text-sm text-gray-400"
                      >
                        Nombre Completo
                      </label>
                      <input
                        type="text"
                        name="username" // Este nombre se usará en el template
                        id="username"
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
                        name="email" // Este nombre se usará en el template
                        id="email"
                        placeholder="tucorreo@ejemplo.com"
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
                        name="message" // Este nombre se usará en el template
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
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d235.7140977887007!2d-65.26415869316597!3d-19.045017958111835!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x93fbcf4a59b7a039%3A0x135f24f644321503!2sAyacucho%20378%2C%20Sucre!5e0!3m2!1ses-419!2sbo!4v1727796555798!5m2!1ses-419!2sbo"
                    width="500"
                    height="800"
                    style={{ border: 0 }}
                    allowFullScreen=""
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

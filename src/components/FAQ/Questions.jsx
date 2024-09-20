import React, { useState } from 'react';

export const Questions = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      question: 'Qué servicios ofrece su empresa de enfermería?',
      answer: 'Nuestra empresa ofrece una amplia gama de servicios de enfermería a domicilio, incluyendo cuidados postoperatorios, cuidado de personas mayores, atención pediátrica especializada, cuidados paliativos y terapia intravenosa.'
    },
    {
      question: '¿Cuáles son las cualificaciones de sus enfermeras',
      answer: 'Todas nuestras enfermeras están debidamente licenciadas y certificadas. Tienen formación académica en enfermería y cuentan con experiencia clínica relevante en diversas áreas de especialización.'
    },
    {
      question: '¿Qué medidas toman para garantizar la seguridad y privacidad del paciente?',
      answer: 'Nos comprometemos a proteger la seguridad y privacidad de nuestros pacientes en todo momento. Nuestras enfermeras siguen estrictos protocolos de seguridad y cumplen con las normativas de protección de datos para garantizar la confidencialidad de la información médica.'
    },
    {
      question: '¿Cómo gestionan las quejas o preocupaciones de los pacientes?',
      answer: 'Valoramos la retroalimentación de nuestros pacientes. Si tiene alguna preocupación o queja, por favor contáctenos directamente para que podamos abordarla de manera oportuna y resolver cualquier problema que pueda surgir.'
    },
  ];

  const handleToggle = index => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-24">
      <div data-aos="fade-up" className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 font-montserrat ">
        <div className="mb-16">
          <h6 className="text-lg text-indigo-600 font-medium text-center mb-2">FAQs</h6>
          <h2 className="text-4xl  font-anton text-center font-bold text-gray-900 leading-[3.25rem]">
            PREGUNTAS FRECUENTES
          </h2>
        </div>

        <div className="accordion-group">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className={`accordion py-8 px-6 border-b border-solid border-gray-200 transition-all duration-500 rounded-2xl hover:bg-indigo-50 ${openIndex === index ? 'bg-indigo-50' : ''}`}
            >
              <button
                className="accordion-toggle group inline-flex items-center justify-between leading-8 text-gray-900 w-full transition duration-500 text-left hover:text-primary"
                onClick={() => handleToggle(index)}
              >
                <h5>{faq.question}</h5>
                <svg
                  className={`text-gray-500 transition duration-500 group-hover:text-primary ${openIndex === index ? 'text-primary rotate-180' : ''}`}
                  width="22"
                  height="22"
                  viewBox="0 0 22 22"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M16.5 8.25L12.4142 12.3358C11.7475 13.0025 11.4142 13.3358 11 13.3358C10.5858 13.3358 10.2525 13.0025 9.58579 12.3358L5.5 8.25"
                    stroke="currentColor"
                    strokeWidth="1.6"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>
              <div
                className={`accordion-content w-full px-0 overflow-hidden transition-max-height duration-500 ${openIndex === index ? 'max-h-[250px]' : 'max-h-0'}`}
              >
                <p className="text-base text-gray-900 leading-6">{faq.answer}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

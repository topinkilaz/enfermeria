import React, { useState } from 'react';

export const Questions = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      question: 'Qué servicios ofrece su empresa de enfermería?',
      answer:(<div>
      <p>
        Ofrecemos una amplia gama de servicios de enfermería, tanto en nuestras instalaciones como a domicilio, diseñados para cubrir diversas necesidades de atención médica. Entre los principales servicios se encuentran:
      </p>
      <ul>
        <li><strong>Vacunas:</strong> Aplicación de vacunas preventivas, siguiendo el esquema de inmunización.</li>
        <li><strong>Enemas:</strong> Realización de enemas para el alivio de estreñimiento o preparación para procedimientos médicos.</li>
        <li><strong>Curaciones:</strong> Tratamiento especializado para heridas quirúrgicas, úlceras por presión, úlceras vasculares (venosas y arteriales), y úlceras neuropáticas (como el pie diabético).</li>
        <li><strong>Inyectables:</strong> Administración de medicamentos por vía intramuscular, subcutánea o intravenosa.</li>
        <li><strong>Control de presión arterial:</strong> Monitoreo regular para detectar y manejar la hipertensión.</li>
        <li><strong>Nebulizaciones:</strong> Terapia respiratoria mediante el uso de nebulizadores para tratar afecciones pulmonares.</li>
        <li><strong>Control de glucemia:</strong> Monitoreo y manejo de los niveles de azúcar en sangre, crucial para pacientes con diabetes.</li>
      </ul>
      <p>
        Nos aseguramos de brindar atención personalizada y de alta calidad para mejorar la salud y el bienestar de nuestros pacientes.
      </p>
    </div>)
    },
    {
      question: '¿Cuáles son las cualificaciones de sus enfermeras',
      answer: 'Todas nuestras enfermeras son licenciadas en enfermería, con una sólida formación académica y amplia experiencia en diversas áreas del cuidado de la salud. Están capacitadas para brindar atención de alta calidad, con un enfoque personalizado y profesional, asegurando el bienestar y la seguridad de cada uno de nuestros pacientes.'
    },
    {
      question: '¿Qué medidas toman para garantizar la seguridad y privacidad del paciente?',
      answer: (<div>
        <h3>Para asegurar la seguridad y privacidad de nuestros pacientes, implementamos las siguientes medidas:</h3>
        <ol className="list-decimal ml-5 mt-2">
          <li>
            <strong>Confidencialidad de la información:</strong> Todos los datos personales y médicos de nuestros pacientes son tratados con la máxima confidencialidad y solo se comparten con el consentimiento del paciente o en situaciones de emergencia, conforme a la normativa vigente.
          </li>
          <li>
            <strong>Protocolos de seguridad:</strong> Contamos con protocolos de seguridad que regulan el acceso a la información del paciente, limitando el acceso solo al personal autorizado y capacitado.
          </li>
          <li>
            <strong>Capacitación continua:</strong> Nuestro personal recibe formación continua en materia de ética, privacidad y protección de datos, asegurando que estén actualizados en las mejores prácticas de atención y manejo de información.
          </li>
          <li>
            <strong>Entornos seguros:</strong> Nuestras instalaciones están diseñadas para garantizar la seguridad física de los pacientes, con medidas de control de acceso y supervisión constante.
          </li>
          <li>
            <strong>Consentimiento informado:</strong> Siempre buscamos obtener el consentimiento informado del paciente antes de realizar cualquier procedimiento, explicando claramente los riesgos y beneficios involucrados.
          </li>
          <li>
            <strong>Manejo adecuado de desechos:</strong> Aplicamos prácticas seguras para el manejo y eliminación de desechos médicos, minimizando riesgos para la salud y el medio ambiente.
          </li>
        </ol>
        <p>A través de estas medidas, nos comprometemos a crear un entorno seguro y de confianza para todos nuestros pacientes.</p>
      </div>
      )
    },
    {
      question: '¿Cómo gestionan las quejas o preocupaciones de los pacientes?',
      answer: (<div>
        <h3>En nuestro centro, tomamos muy en serio las quejas y preocupaciones de nuestros pacientes. Implementamos un proceso claro y accesible para gestionar estas situaciones, que incluye:</h3>
        <ol className="list-decimal ml-5 mt-2">
          <li>
            <strong>Canales de comunicación:</strong> Disponemos de múltiples canales de comunicación, como un número de teléfono directo, correo electrónico y un formulario en nuestro sitio web, donde los pacientes pueden expresar sus inquietudes de manera fácil y confidencial.
          </li>
          <li>
            <strong>Recepción y documentación:</strong> Cada queja o preocupación es registrada y documentada para garantizar un seguimiento adecuado. Nos aseguramos de entender completamente la situación antes de proceder.
          </li>
          <li>
            <strong>Investigación y evaluación:</strong> Llevamos a cabo una investigación exhaustiva de cada queja, involucrando al personal correspondiente y revisando los procedimientos y servicios relacionados.
          </li>
          <li>
            <strong>Resolución y respuesta:</strong> Nos comprometemos a ofrecer una respuesta oportuna y clara a los pacientes, explicando las acciones tomadas y, si es necesario, implementando mejoras en nuestros servicios para evitar la repetición de situaciones similares.
          </li>
          <li>
            <strong>Feedback y mejora continua:</strong> Utilizamos las quejas y preocupaciones como oportunidades de mejora. Analizamos regularmente la retroalimentación de los pacientes para identificar áreas de mejora en nuestros procesos y servicios.
          </li>
          <li>
            <strong>Atención personalizada:</strong> Mantenemos un enfoque humano en la gestión de quejas, asegurándonos de que los pacientes se sientan escuchados y valorados en todo momento.
          </li>
        </ol>
        <p>Al abordar de manera proactiva las quejas y preocupaciones, buscamos no solo resolver problemas, sino también fortalecer la confianza y satisfacción de nuestros pacientes en nuestros servicios.</p>
      </div>
      )
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
                <h4 className='font-bold'>{faq.question}</h4>
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
                className={`accordion-content w-full px-0 overflow-hidden transition-max-height duration-500 ${openIndex === index ? 'max-h-[500px]' : 'max-h-0'}`}
              >
                <span className="text-sm text-gray-900 leading-5">{faq.answer}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

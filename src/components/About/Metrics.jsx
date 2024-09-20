import React, { useEffect, useState } from "react";
import CountUp from "react-countup";

export const Metrics = () => {
  const [isVisible, setIsVisible] = useState(false);

  const handleScroll = () => {
    const element = document.getElementById("countup-section");
    const position = element.getBoundingClientRect();

    // Verifica si el elemento está en el viewport
    if (position.top < window.innerHeight && position.bottom >= 0) {
      setIsVisible(true);
      window.removeEventListener("scroll", handleScroll); // Remover el evento una vez visible
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:max-w-none">
          <div className="text-center">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Cuidando tu Salud Integralmente
            </h2>
            <p className="mt-4 text-lg leading-8 text-gray-600">
              Nuestro equipo de enfermería está comprometido a brindar atención personalizada y de calidad para mejorar tu bienestar y salud.
            </p>
          </div>
          <dl id="countup-section" className="mt-16 grid grid-cols-1 gap-0.5 overflow-hidden rounded-2xl text-center sm:grid-cols-2 lg:grid-cols-4">
            <div className="flex flex-col bg-gray-200/50 p-8">
              <dt className="text-sm font-semibold leading-6 text-gray-600">Pacientes Atendidos</dt>
              <dd className="order-first text-3xl font-semibold tracking-tight text-gray-900">
                {isVisible && <CountUp start={0} end={1234} duration={2} />}
              </dd>
            </div>
            <div className="flex flex-col bg-gray-200/50 p-8">
              <dt className="text-sm font-semibold leading-6 text-gray-600">Visitas Diarias</dt>
              <dd className="order-first text-3xl font-semibold tracking-tight text-gray-900">
                {isVisible && <CountUp start={0} end={345} duration={2} />}
              </dd>
            </div>
            <div className="flex flex-col bg-gray-200/50 p-8">
              <dt className="text-sm font-semibold leading-6 text-gray-600">Servicios Ofrecidos</dt>
              <dd className="order-first text-3xl font-semibold tracking-tight text-gray-900">
                {isVisible && <CountUp start={0} end={50} duration={2} />}
              </dd>
            </div>
            <div className="flex flex-col bg-gray-200/50 p-8">
              <dt className="text-sm font-semibold leading-6 text-gray-600">Satisfacción del Paciente</dt>
              <dd className="order-first text-3xl font-semibold tracking-tight text-gray-900">
                {isVisible && <CountUp start={0} end={96} duration={2} suffix="%" />}
              </dd>
            </div>
          </dl>
        </div>
      </div>
    </div>
  );
};
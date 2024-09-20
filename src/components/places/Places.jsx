import React from 'react'
import Img01 from '../../assets/places/img01.jpg'
import Img1 from '../../assets/places/img1.webp'
import Img2 from "../../assets/places/img2.webp";
import Img3 from "../../assets/places/img3.jpeg";
import Img4 from "../../assets/places/img4.webp";
import Img5 from "../../assets/places/img5.jpeg";
import Img6 from "../../assets/places/img6.jpg";
import Img7 from "../../assets/places/img7.jpg";
import { PlacerCard } from './PlacerCard';

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from 'react-slick';

 const PlacesData = [
  {
    img: Img01,
    title: "Vacunas",
    location: "Sucre - Bolivia",
    description: "La vacunación durante la infancia es una piedra angular en la prevención de enfermedades infecciosas que pueden tener efectos serios, incluso fatales, en los niños y comunidades. El acto de vacunar no solo protege al individuo, sino que también contribuye a la inmunidad colectiva, impidiendo la propagación de enfermedades contagiosas.",
    url: './about',
    type: "Hepatitis B y Hepatitis A, Polio, Pertussis Acelular, Tétanos, etc.",
  },
    {
      img: Img1,
      title: "Enema",
      location: "Sucre - Bolivia",
      description: "El enema, un procedimiento médico fundamental en el cuidado de la salud, juega un papel crucial en el tratamiento y la prevención de diversas afecciones digestivas. En el ámbito de la enfermería, los enemas son reconocidos no solo por su eficacia en el alivio de síntomas, sino también por su contribución al bienestar general del paciente.",
      url: './about',
      type: "Esenciales para la Salud Digestiva y el Bienestar General",
    },
    {
      img: Img2,
      title: "Curaciones",
      location: "Sucre - Bolivia",
      description:
        "Las curaciones son un aspecto esencial en el espectro del cuidado de la salud, desempeñando un papel vital en la recuperación y el bienestar del paciente. Estos procedimientos no solo tratan heridas y lesiones, sino que también previenen infecciones y promueven la cicatrización saludable de los tejidos.",
      url: 6700,
      type: "Procedimientos Vitales en el Cuidado y Recuperación del Paciente",
    },
    {
      img: Img3,
      title: "Inyectables",
      location: "Sucre - Bolivia",
      description:
        "Los inyectables son un elemento clave en el ámbito de la atención médica, desempeñando un papel vital tanto en el tratamiento de enfermedades como en la prevención de las mismas. Esta modalidad de administración de medicamentos es fundamental para garantizar una acción rápida y efectiva del tratamiento en muchas condiciones de salud.",
      url: 6200,
      type: "Un Componente Crítico en el Tratamiento Médico y la Prevención de Enfermedades",
    },
    {
      img: Img4,
      title: " Presión Arterial",
      location: "Sucre - Bolivia",
      description: "La medición de la presión arterial es un procedimiento esencial en el campo de la atención médica, siendo un indicador vital de la salud cardiovascular del paciente. Este proceso no solo ayuda en el diagnóstico de hipertensión y otras afecciones cardíacas, sino que también es crucial en el monitoreo continuo y la gestión de la salud a largo plazo.",
      url: 6700,
      type: "La Importancia de la Medición de la Presión Arterial en el Cuidado de la Salud",
    },
    {
      img: Img5,
      title: "Nebulizaciones",
      location: "Sucre - Bolivia",
      description:
        "Las nebulizaciones son un procedimiento clave en el manejo de diversas afecciones respiratorias, proporcionando un método efectivo para la administración de medicamentos directamente a los pulmones. Este tratamiento es particularmente importante para pacientes con asma, enfermedad pulmonar obstructiva crónica (EPOC), fibrosis quística, y otras enfermedades respiratorias.",
      url: 6700,
      type: "Un Método Esencial en el Tratamiento de Afecciones Respiratorias",
    },
    {
      img: Img6,
      title: "Banco de Vacunas",
      location: "Sucre - Bolivia",
      description:
        "Un banco de vacunas es una iniciativa crítica en el ámbito de la salud pública, desempeñando un papel esencial en la prevención y control de enfermedades infecciosas a nivel global. Este recurso no solo asegura el almacenamiento y conservación adecuados de las vacunas, sino que también facilita su distribución eficiente y equitativa.",
      url: 6200,
      type: "Un Pilar Fundamental en la Prevención y Control de Enfermedades",
    },
    {
      img: Img7,
      title: "Control de Glicemia",
      location: "Sucre - Bolivia",
      description:
        "El control de glicemia, o medición de los niveles de glucosa en la sangre, es un procedimiento esencial en el manejo de la diabetes y en el cuidado general de la salud metabólica. Este proceso es crucial tanto para pacientes diagnosticados con diabetes como para aquellos en riesgo de desarrollar la enfermedad.",
      url: 6200,
      type: "Un Aspecto Vital en la Gestión de la Diabetes y la Salud Metabólica",
    },
  ];

export const Places = () => {
  const settings = {
    accessibility: true,
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3, // Mostrar 3 cards en pantallas grandes
    slidesToScroll: 1,
    autoplay: true,
    responsive: [
      {
        breakpoint: 1024, // Pantallas medianas (tabletas, laptops pequeñas)
        settings: {
          slidesToShow: 2, // Mostrar 2 cards
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 768, // Pantallas más pequeñas (teléfonos grandes)
        settings: {
          slidesToShow: 1, // Mostrar solo 1 card
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 480, // Teléfonos pequeños
        settings: {
          slidesToShow: 1, // Mostrar solo 1 card
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
    ],
  };
  return (
    <div data-aos="fade-up" className="dark:bg-gray-900 dark:text-white bg-gray-50 py-10 font-montserrat ">
        <section data-aos="fade-up" className="container ">
          <h1 className=" font-anton my-8 border-l-8 border-primary/50 py-2 pl-2 text-3xl font-bold">
            SERVICIOS ESPECIFICOS
          </h1>
          <p className='text-base  mb-10 text-black '>Nos comprometemos a mejorar continuamente nuestros servicios de enfermería, garantizando siempre el cumplimiento de la normativa vigente para ofrecer atención de calidad.</p>
          <Slider {...settings}>
          
          
            {PlacesData.map((item, index) => (
             
              <PlacerCard key={index}
              
                
                
                {...item}
              />
             
            ))}
           
          
          </Slider>
        </section>
      </div>
  )
}

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
    description: "Las vacunas son una de las herramientas más importantes y efectivas en la prevención de enfermedades infecciosas. Funcionan estimulando el sistema inmunológico del cuerpo para que reconozca y combata patógenos específicos, como virus o bacterias, sin causar la enfermedad. A lo largo de la historia, las vacunas han ayudado a erradicar enfermedades graves como la viruela y a controlar muchas otras, mejorando significativamente la salud pública mundial.",
    url: '/services/eag1mr5obv4g8mjlcarn71ex#servicio',
    type: "Hepatitis B y Hepatitis A, Polio, Pertussis Acelular, Tétanos, etc.",
  },
    {
      img: Img1,
      title: "Enemas",
      location: "Sucre - Bolivia",
      description: "Los enemas son procedimientos médicos que consisten en la introducción de líquido en el recto y el colon a través del ano. Se utilizan con diversos fines terapéuticos y diagnósticos, principalmente para limpiar el intestino, aliviar el estreñimiento, administrar medicamentos o preparar el colon para procedimientos médicos como la colonoscopía. Los enemas pueden ser realizados en un entorno clínico o en el hogar bajo la supervisión de un profesional de la salud.",
      url: '/services/ujeji5jp5ewjna3mbcmjczz4#servicio',
      type: "Esenciales para la Salud Digestiva y el Bienestar General",
    },
    {
      img: Img2,
      title: "Curaciones",
      location: "Sucre - Bolivia",
      description:
        "Las curaciones son un proceso fundamental en el manejo de heridas de diversas etiologías, ya que aseguran una adecuada cicatrización, previenen infecciones y mejoran la calidad de vida de los pacientes. A continuación, se abordarán de manera detallada distintos tipos de curaciones, incluyendo heridas quirúrgicas, úlceras por presión, úlceras vasculares (de etiología venosa y arterial), y úlceras neuropáticas (como el pie diabético).",
      url: "/services/u940cp3u4za75qvox32w6fc0#servicio",
      type: "Procedimientos Vitales en el Cuidado y Recuperación del Paciente",
    },
    {
      img: Img3,
      title: "Inyectables",
      location: "Sucre - Bolivia",
      description:
        "Los inyectables son una forma común y efectiva de administrar medicamentos directamente en el cuerpo mediante una inyección. Este método se utiliza cuando se requiere que el medicamento tenga una acción rápida, cuando no es posible administrar el fármaco por vía oral, o cuando se busca un efecto localizado. Los inyectables son ampliamente usados en hospitales, clínicas y a nivel domiciliario, y abarcan desde medicamentos rutinarios hasta vacunas y tratamientos especializados.",
      url: "/services/m2jzinmxgc1p3bcdrsa885k0#servicio",
      type: "Un Componente Crítico en el Tratamiento Médico y la Prevención de Enfermedades",
    },
    {
      img: Img4,
      title: " Presión Alta",
      location: "Sucre - Bolivia",
      description: "La presión arterial alta, también conocida como hipertensión, es una afección médica crónica en la que la fuerza de la sangre contra las paredes de las arterias es demasiado elevada. Esta enfermedad, que afecta a millones de personas en todo el mundo, es un factor de riesgo significativo para el desarrollo de enfermedades cardiovasculares, accidentes cerebrovasculares (ACV), y problemas renales",
      url:"/services/guoi951yurccfduajfz5wvsj#servicio",
      type: "La Importancia de la Medición de la Presión Arterial en el Cuidado de la Salud",
    },
    {
      img: Img5,
      title: "Nebulizaciones",
      location: "Sucre - Bolivia",
      description:
        "Las nebulizaciones son un tratamiento médico utilizado para administrar medicamentos directamente a los pulmones a través de la inhalación. Este procedimiento es particularmente útil en el manejo de enfermedades respiratorias como el asma, la bronquitis, la enfermedad pulmonar obstructiva crónica (EPOC), y otras condiciones que afectan la función pulmonar. El objetivo principal de la nebulización es entregar el medicamento de manera rápida y efectiva, brindando alivio inmediato a los pacientes que presentan dificultades para respirar o congestión severa.",
      url: "/services/c2n7wt1ww8zj0u1nl2fw053b#servicio",
      type: "Un Método Esencial en el Tratamiento de Afecciones Respiratorias",
    },
    {
      img: Img7,
      title: "Control de Glucemia",
      location: "Sucre - Bolivia",
      description:
        "El control de glucemia es un aspecto fundamental en el manejo de la diabetes, una enfermedad crónica que afecta la capacidad del cuerpo para regular los niveles de azúcar (glucosa) en sangre. La glucosa es una fuente de energía esencial para el organismo, pero cuando se encuentra en niveles elevados de forma prolongada, puede causar daño en diversos órganos y tejidos, y aumentar el riesgo de complicaciones graves.",
      url: "/services/q6z05p4s9bhlssdq0geatktq#servicio",
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

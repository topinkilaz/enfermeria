import React from 'react';
import { TeamMembers } from './TeamMembers';

import perfilImage from '../../assets/perfil.webp';
import helenImage from '../../assets/Helen.jpg';
import marisolImage from '../../assets/Marisol.jpg';
import doraPdf from '../../assets/pdfs/Dora.pdf';
import helenPdf from '../../assets/pdfs/Helen.pdf';
import marisolPdf from '../../assets/pdfs/Marisol.pdf';
import DoraImage from '../../assets/Dora.jpeg';
import JuliaImage from '../../assets/Julia.jpeg';
import JuliaPdf from '../../assets/pdfs/Julia.pdf';


const teamMembers = [
  {
    name: 'Dora Rojas Estrada',
    title: 'Auxiliar de Enfermería',
    imgSrc: DoraImage,
    pdfUrl: doraPdf,
  },
  {
    name: 'Helen Emilene Taboada Espinoza',
    title: 'Licenciada en Enfermería',
    imgSrc: helenImage,
    pdfUrl: helenPdf,
  },
  {
    name: 'Marisol Llanque Sierra',
    title: 'Auxiliar de Enfermería',
    imgSrc: marisolImage,
    pdfUrl: marisolPdf,
  },
  {
    name: 'Julia Arcienega Avila',
    title: 'Licenciada en Enfermería',
    imgSrc: JuliaImage,
    pdfUrl: JuliaPdf,
  },
 

];


export const Team = () => (
  <div  className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20 font-montserrat">
    <div  data-aos="fade-up" className="mx-auto mb-10 lg:max-w-xl sm:text-center">
    <h2 className="inline-block px-3 py-px mb-4 text-3xl font-semibold font-anton tracking-wide text-gray-900 uppercase rounded-full bg-teal-accent-400">
  NUESTROS PROFESIONALES
</h2>
      <p className="text-base text-gray-700 md:text-lg">
        Ofrecemos una amplia gama de servicios de enfermería para satisfacer sus necesidades de atención médica. Nuestro equipo de profesionales está aquí para brindarle el mejor cuidado posible.
      </p>
    </div>
    <div data-aos="fade-up" className="grid gap-10 mx-auto lg:max-w-screen-lg sm:grid-cols-2 lg:grid-cols-4">
      {teamMembers.map(member => (
        <TeamMembers
          key={member.name}
          name={member.name}
          title={member.title}
          imgSrc={member.imgSrc}
          pdfUrl={member.pdfUrl}
        />
      ))}
    </div>
  </div>
);
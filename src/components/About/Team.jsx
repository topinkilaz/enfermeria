import React from 'react';
import { TeamMembers } from './TeamMembers';

const teamMembers = [
  {
    name: 'Carlos Pérez',
    title: 'Enfermero de Salud Pública',
    imgSrc: 'https://images.pexels.com/photos/3772107/pexels-photo-3772107.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
  },
  {
    name: 'Laura Sánchez',
    title: 'Especialista en Cuidados Intensivos',
    imgSrc: 'https://images.pexels.com/photos/3825514/pexels-photo-3825514.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
  },
  {
    name: 'Luis Martínez',
    title: 'Enfermero de Atención Domiciliaria',
    imgSrc: 'https://images.pexels.com/photos/7583382/pexels-photo-7583382.jpeg',
  },
  {
    name: 'Isabel López',
    title: 'Enfermera de Cuidados Crónicos',
    imgSrc: 'https://images.pexels.com/photos/4346362/pexels-photo-4346362.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
  },
  {
    name: 'Juan Fernández',
    title: 'Enfermero de Emergencias',
    imgSrc: 'https://images.pexels.com/photos/3408748/pexels-photo-3408748.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
  },
  {
    name: 'María Gómez',
    title: 'Enfermera de Salud Mental',
    imgSrc: 'https://images.pexels.com/photos/4066498/pexels-photo-4066498.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
  },
  {
    name: 'José Martínez',
    title: 'Enfermero en Rehabilitación',
    imgSrc: 'https://images.pexels.com/photos/4459273/pexels-photo-4459273.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
  },
  {
    name: 'Carla Ruiz',
    title: 'Enfermera de Atención Primaria',
    imgSrc: 'https://images.pexels.com/photos/3943790/pexels-photo-3943790.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
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
        />
      ))}
    </div>
  </div>
);
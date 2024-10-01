import React from 'react'

export const BannerNotice = () => {
  return (
    <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
  <div className="p-8 bg-gradient-to-r from-blue-300 via-teal-50 to-white rounded-lg shadow-lg sm:p-16">
    <div className="flex flex-col lg:flex-row items-center lg:items-start">
      <div className="mb-6 lg:mb-0 lg:w-1/2 lg:pr-5">
        <h2 className="font-sans text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl sm:leading-none mb-4">
          Cuida tu salud diariamente
          <br className="hidden md:block" />
          con pequeños cambios{' '}
          <span className="inline-block text-primary">
            que hacen la diferencia
          </span>
        </h2>
        <p className="text-base text-gray-700 mb-6">
          Mantener una rutina de sueño saludable, beber suficiente agua, y hacer actividad física regularmente son claves para mejorar tu bienestar. Pequeños cambios como caminar 30 minutos al día o incluir más frutas y verduras en tu dieta pueden tener un gran impacto en tu salud a largo plazo.
        </p>
      </div>
      <div className="lg:w-1/2 lg:pl-5 flex items-center justify-center">
        <img
          className="object-cover w-full h-auto max-h-80 rounded-lg shadow-md"
          src="https://images.pexels.com/photos/4045734/pexels-photo-4045734.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
          alt="Salud y bienestar"
        />
      </div>
    </div>
  </div>
</div>
  )
}

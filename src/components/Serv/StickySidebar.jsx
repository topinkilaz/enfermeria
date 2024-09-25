import React from 'react'
import { DropdownLinks } from '../Navbar/Navbar'
import { Link } from 'react-router-dom'


export const StickySidebar = () => {
  return (
    <aside  data-aos="fade-up" className="hidden md:w-1/3 lg:w-1/4 py-4 md:block">
    <div className="sticky top-32 flex flex-col gap-2 p-4 border rounded-xl shadow-lg bg-white">
      <h1 className='font-anton text-xl text-center'>SERVICIOS</h1>
      <ul className="space-y-3">
        {DropdownLinks.map((data) => (
          <li key={data.id}>
          <Link
            className="inline-block w-full rounded-md p-2 text-gray-800 font-semibold transition duration-200 ease-in-out hover:bg-indigo-100 hover:text-primary hover:shadow-md"
            to={`/services/${data.id}`} 
          >
            {data.name}
          </Link>
        </li>
        ))}
      </ul>
      
    </div>
  </aside>
  )
}

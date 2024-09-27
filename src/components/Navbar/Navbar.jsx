import React, { useState } from 'react'
import Logo from "../../assets/logo.png"
import { Link, NavLink } from 'react-router-dom'
import { FaCaretDown } from "react-icons/fa";
import { HiMenuAlt1, HiMenuAlt3 } from 'react-icons/hi';
import { ResponsiveMenu } from './ResponsiveMenu';

export const NavbarLinks = [
  {
    id:1,
    name: "Inicio",
    link: "/",
  },
  {
    id:2,
    name: "Acerca de",
    link: "/about",
  },
  {
    id:3,
    name: "Noticias",
    link: "/Notices",
  },
  {
    id:4,
    name: "Contacto",
    link: "/contact",
  },
  {
    id:5,
    name: "Servicios",
    link: "/services",
  },
];

export const DropdownLinks = [
  {
    id:"eag1mr5obv4g8mjlcarn71ex",
    name: "Vacunas",
    link: "/services/eag1mr5obv4g8mjlcarn71ex",
  },
  {
    id:"ujeji5jp5ewjna3mbcmjczz4",
    name: "Enema",
    link: "/services/ujeji5jp5ewjna3mbcmjczz4",
  },
  {
    id:"u940cp3u4za75qvox32w6fc0",
    name: "Curaciones",
    link: "/services/u940cp3u4za75qvox32w6fc0",
  },
  {
      id:"c2n7wt1ww8zj0u1nl2fw053b",
      name: "Nebulizaciones",
      link: "/services/c2n7wt1ww8zj0u1nl2fw053b",
    },
  {
    id:"q6z05p4s9bhlssdq0geatktq",
    name: "Control de Glicemia",
    link: "/services/q6z05p4s9bhlssdq0geatktq",
  },
  {
      id:"j9qqm3mvsros35a1dsnc8j6k",
      name: "Banco de vacunas",
      link: "/services/j9qqm3mvsros35a1dsnc8j6k",
    },
];
export const Navbar = () => {

      const [showMenu, setShowMenu] = useState(false)

      const toggleMenu=()=>{
        setShowMenu(!showMenu)
      }

  return (
    <nav className='fixed top-0 right-0 w-full z-50 bg-white backdrop-blur-sm text-black shadow-md'>
        <div className="bg-gradient-to-r from-dark to-secondary text-white font-montserrat">
          <div className="container py-[2px] sm:block hidden">
            <div className="flex items-center justify-between">
              <p className="text-sm">Servicios de Enfermeria Sucre - Bolivia</p>
              <p className='text-sm'>Numero Telefonico: 75448354</p>
            </div>
          </div>
        </div>
        <div className='container py-3 sm:py-0'>
        <div className='flex justify-between items-center'>
            <div className="flex items-center gap-4  font-bold text-2xl">
                {/* desplaza a la parte de arriba al hacer click en el logo */}
              <Link to={"/"} onClick={() => window.scrollTo(0, 0)}>
                <img src={Logo} alt="" className="max-h-[65px]" />
              </Link>
            </div>
        
            <div className="hidden md:block">
  <ul className="flex items-center gap-6">
    <li className="py-4">
      <NavLink
        to="/"
        className={({ isActive }) =>
          isActive ? 'text-blue-500' : 'text-gray-500'
        }
      >
        Inicio
      </NavLink>
    </li>
    <li className="py-4">
      <NavLink
        to="/about"
        className={({ isActive }) =>
          isActive ? 'text-blue-500' : 'text-gray-500'
        }
      >
        Acerca de
      </NavLink>
    </li>
    <li className="py-4">
      <NavLink
        to="/notices"
        className={({ isActive }) =>
          isActive ? 'text-blue-500' : 'text-gray-500'
        }
      >
        Noticias
      </NavLink>
    </li>
    <li className="py-4">
      <NavLink
        to="/contact"
        className={({ isActive }) =>
          isActive ? 'text-blue-500' : 'text-gray-500'
        }
      >
        Contacto
      </NavLink>
    </li>
    <li className="group relative cursor-pointer">
      <NavLink
        to="/services"
        className={({ isActive }) =>
          isActive ? 'text-blue-500 flex h-[72px] items-center gap-[2px]' : 'text-gray-500 flex h-[72px] items-center gap-[2px]'
        }
      >
        Servicios
        <span>
          <FaCaretDown className="transition-all duration-200 group-hover:rotate-180" />
        </span>
      </NavLink>
      <div className="absolute -left-9 z-[9999] hidden w-[150px] rounded-md bg-white p-2 text-black group-hover:block shadow-md">
        <ul className="space-y-3">
          {DropdownLinks.map((data) => (
            <li key={data.id}>
              <NavLink
                className={({ isActive }) =>
                  isActive
                    ? 'inline-block w-full rounded-md p-2 bg-primary/20'
                    : 'inline-block w-full rounded-md p-2 hover:bg-primary/20'
                }
                to={data.link}
              >
                {data.name}
              </NavLink>
            </li>
          ))}
        </ul>
      </div>
    </li>
  </ul>
</div>
        <div className="flex items-center gap-4">
        <button
  className="bg-gradient-to-r from-primary to-dark hover:from-dark hover:to-primary transition-all duration-500 text-white px-3 py-1 rounded-full font-montserrat">     Login
              </button>
              {/* Mobile Hamburger icon */}
              <div className="md:hidden block">
                {showMenu ? (
                  <HiMenuAlt1
                    onClick={toggleMenu}
                    className=" cursor-pointer transition-all"
                    size={30}
                  />
                ) : (
                  <HiMenuAlt3
                    onClick={toggleMenu}
                    className="cursor-pointer transition-all"
                    size={30}
                  />
                )}
              </div>
            </div>
        </div>
        </div>
        <ResponsiveMenu setShowMenu={setShowMenu} showMenu={showMenu} />
        
            
    </nav>
  )
}

import React, { useState } from 'react'
import Logo from "../../assets/logo.svg"
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
    id:1,
    name: "Vacunas",
    link: "/",
  },
  {
    id:2,
    name: "Enema",
    link: "/about",
  },
  {
    id:3,
    name: "Curaciones",
    link: "/best-places",
  },
  {
      id:4,
      name: "Nebulizaciones",
      link: "/best-places",
    },
  {
    id:5,
    name: "Control de Glicemia",
    link: "/blogs",
  },
  {
      id:6,
      name: "Banco de vacunas",
      link: "/blogs",
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
                <img src={Logo} alt="" className="h-15" />
              </Link>
            </div>
        
        <div className="  hidden md:block">
              <ul className="flex items-center gap-6 ">
                <li className="py-4">
                  <NavLink to="/" className="active">
                    Inicio
                  </NavLink>
                </li>
                <li className="py-4">
                  <NavLink to="/about" className="active">
                    Acerca de 
                  </NavLink>
                </li>
                <li className="py-4">
                  <NavLink to="/notices" className="active">
                    Noticias
                  </NavLink>
                </li>
                <li className="py-4">
                  <NavLink to="/contact" className="active">
                    Contacto
                  </NavLink>
                </li>
                <li className="group relative cursor-pointer">
                  <a
                    href="/services"
                    className="flex h-[72px] items-center gap-[2px]"
                  >
                    Servicios{""}
                    <span>
                        <FaCaretDown className="transition-all duration-200 group-hover:rotate-180"/>
                    </span>
                  </a>
                  <div className="absolute -left-9 z-[9999] hidden w-[150px] rounded-md bg-white p-2 text-black group-hover:block shadow-md ">
                    <ul className="space-y-3">
                      {DropdownLinks.map((data) => (
                        <li key={data.id}>
                          <a
                            className="inline-block w-full rounded-md p-2 hover:bg-primary/20"
                            href={data.link}
                          >
                            {data.name}
                          </a>
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

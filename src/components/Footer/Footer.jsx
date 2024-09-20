import React from 'react'
import portada from '../../assets/video/portada.mp4'
import logo from '../../assets/logo.svg'
import { FaFacebook, FaInstagram, FaLinkedin, FaLocationArrow, FaMobileAlt } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import { DropdownLinks } from '../Navbar/Navbar'

const FooterLinks = [
    {
      id:1,
      title: "Inicio",
      link: "/",
    },
    {
      id:2,
      title: "Nosotros",
      link: "/about",
    },
    {
      id:3,
      title: "Noticias",
      link: "/best-places",
    },
    {
      id:4,
      title: "Contacto",
      link: "/blogs",
    },
  ];
  const FooterLinks1 = [
    {
      id:1,
      title: "Mision",
      link: "/",
    },
    {
      id:2,
      title: "Vision",
      link: "/about",
    },
    {
      id:3,
      title: "Politicas de Privacidad",
      link: "/best-places",
    },
    {
      id:4,
      title: "Nosotros",
      link: "/blogs",
    },
  ];

export const Footer = () => {
  return (
    <>
    <div className=" dark:bg-gray-950 py-10 relative overflow-hidden font-montserrat">
    <video
          autoPlay
          loop
          muted
          className="absolute right-0 top-0 h-full overflow-hidden w-full object-cover z-[-1]"
        >
          <source src={portada} type="video/mp4" />
        </video>
        <div className="container">
          <div className="grid md:grid-cols-3 py-5 bg-white/80 backdrop-blur-sm rounded-t-xl">
            <div className="py-8 px-4">
              <h1 className="flex items-center gap-3 text-xl sm:text-3xl font-bold text-justify sm:text-left">
                <img src={logo} alt="" className="max-h-[60px]" />
                {/* TravelloGo */}
              </h1>
              <p className="text-sm">
              Nos dedicamos a proporcionar cuidados de salud excepcionales con un enfoque personalizado. Nuestro equipo altamente capacitado está comprometido con la atención integral de nuestros pacientes.
              </p>
              <br />
              <div className="flex items-center gap-3 ">
                <FaLocationArrow />
                <p>SUCRE - Chuquisaca Bolivia</p>
              </div>
              <div className="flex items-center gap-3 mt-3">
                <FaMobileAlt />
                <p>+591 71514115</p>
              </div>
              {/* social handles */}
              <div>
                <div className="flex items-center gap-3 mt-6">
                  <a href="#">
                    <FaInstagram className="text-3xl" />
                  </a>
                  <a href="#">
                    <FaFacebook className="text-3xl" />
                  </a>
                  <a href="#">
                    <FaLinkedin className="text-3xl" />
                  </a>
                </div>
              </div>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-3 col-span-2 md:pl-10">
              <div>
                <div className="py-8 px-4">
                  <h1 className="text-xl font-bold text-justify sm:text-left mb-3">
                    Guía de navegación
                  </h1>
                  <ul className="flex flex-col gap-3">
                    {FooterLinks.map((link) => (
                      <li key={link.id} className="cursor-pointer hover:translate-x-1 duration-300 hover:!text-primary space-x-1 text-gray-700 dark:text-gray-200">
                        <Link
                          to={link.link}
                          onClick={() => window.scrollTo(0, 0)}
                        >
                          <span>&#11162;</span>
                          <span>{link.title}</span>
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              <div>
                <div className="py-8 px-4">
                  <h1 className="text-xl font-bold text-justify sm:text-left mb-3">
                    Acerca de
                  </h1>
                  <ul className="flex flex-col gap-3">
                    {FooterLinks1.map((link) => (
                      <li key={link.id} className="cursor-pointer hover:translate-x-1 duration-300 hover:!text-primary space-x-1 text-gray-700 dark:text-gray-200">
                        <Link
                          to={link.link}
                          onClick={() => window.scrollTo(0, 0)}
                        >
                          <span>&#11162;</span>
                          <span>{link.title}</span>
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              <div>
                <div className="py-8 px-4">
                  <h1 className="text-xl font-bold text-justify sm:text-left mb-3">
                    Servicios
                  </h1>
                  <ul className="flex flex-col gap-3">
                    {DropdownLinks.map((link) => (
                      <li key={link.id} className="cursor-pointer hover:translate-x-1 duration-300 hover:!text-primary space-x-1 text-gray-700 dark:text-gray-200">
                        <Link
                          to={link.link}
                          onClick={() => window.scrollTo(0, 0)}
                        >
                          <span>&#11162;</span>
                          <span>{link.name}</span>
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div>
            <div className="text-center py-5 border-t-2 border-gray-300/50 bg-primary text-white">
              @copyright 2024  Santiago Apostol Enfermeria. Todos los derechos reservados.
            </div>
          </div>
        </div>
    </div>
    </>
  )
}
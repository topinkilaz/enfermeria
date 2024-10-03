import React, { useState } from "react";
import Logo from "../../assets/logo.png";
import { Link, NavLink } from "react-router-dom";
import { FaCaretDown } from "react-icons/fa";
import { HiMenuAlt1, HiMenuAlt3 } from "react-icons/hi";
import { ResponsiveMenu } from "./ResponsiveMenu";
import { motion } from "framer-motion";

export const NavbarLinks = [
  {
    id: 1,
    name: "Inicio",
    link: "/",
  },
  {
    id: 2,
    name: "Acerca de",
    link: "/about",
  },
  {
    id: 3,
    name: "Noticias",
    link: "/Notices",
  },
  {
    id: 4,
    name: "Contacto",
    link: "/contact",
  },
  {
    id: 5,
    name: "Servicios",
    link: "/services",
  },
];

export const DropdownLinks = [
  {
    id: "eag1mr5obv4g8mjlcarn71ex",
    name: "Vacunas",
    link: "/services/eag1mr5obv4g8mjlcarn71ex#servicio",
  },
  {
    id: "ujeji5jp5ewjna3mbcmjczz4",
    name: "Enema",
    link: "/services/ujeji5jp5ewjna3mbcmjczz4#servicio",
  },
  {
    id: "u940cp3u4za75qvox32w6fc0",
    name: "Curaciones",
    link: "/services/u940cp3u4za75qvox32w6fc0#servicio",
  },
  {
    id: "m2jzinmxgc1p3bcdrsa885k0",
    name: "Inyectables",
    link: "/services/m2jzinmxgc1p3bcdrsa885k0#servicio",
  },
  {
    id: "guoi951yurccfduajfz5wvsj",
    name: "Presión Alta",
    link: "/services/guoi951yurccfduajfz5wvsj#servicio",
  },
  {
    id: "c2n7wt1ww8zj0u1nl2fw053b",
    name: "Nebulizaciones",
    link: "/services/c2n7wt1ww8zj0u1nl2fw053b#servicio",
  },
  {
    id: "q6z05p4s9bhlssdq0geatktq",
    name: "Control de Glicemia",
    link: "/services/q6z05p4s9bhlssdq0geatktq#servicio",
  },
];

export const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);
   const [showDropdown, setShowDropdown] = useState(false);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  return (
    <nav className="fixed top-0 right-0 w-full z-50 bg-white backdrop-blur-sm text-black shadow-md">
      <div className="bg-gradient-to-r from-dark to-primary text-white font-montserrat">
        <div className="container py-1 sm:block hidden">
          <div className="flex items-center justify-between">
            <p className="text-sm">ENFERMERIA SANTIAGO SALUD</p>
            <p className="text-sm">Número Telefónico: 71315480</p>
          </div>
        </div>
      </div>
      <div className="container py-3 sm:py-0">
        <div className="flex justify-between items-center">
          <motion.div 
            className="flex items-center gap-4 font-bold text-2xl"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Link to={"/"} onClick={() => window.scrollTo(0, 0)}>
              <img src={Logo} alt="" className="max-h-[65px]" />
            </Link>
          </motion.div>

          <div className="hidden md:block">
          <ul className="flex items-center gap-6">
              {NavbarLinks.map((link) => (
                <motion.li 
                  key={link.id} 
                  className="py-4"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {link.name === "Servicios" ? (
                    <div 
                      className="relative group cursor-pointer"
                      onMouseEnter={() => setShowDropdown(true)}
                      onMouseLeave={() => setShowDropdown(false)}
                    >
                      <span className="flex items-center gap-[2px]">
                        {link.name}
                        <FaCaretDown className={`transition-all duration-200 ${showDropdown ? 'rotate-180' : ''}`} />
                      </span>
                      {showDropdown && (
                        <motion.div 
                          className="absolute -left-9 z-[9999] w-[200px] rounded-md bg-white p-2 text-black shadow-lg"
                          initial={{ opacity: 0, y: -10 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ duration: 0.2 }}
                        >
                          <ul className="space-y-2">
                            {DropdownLinks.map((data) => (
                              <motion.li 
                                key={data.id}
                                whileHover={{ scale: 1.02 }}
                                whileTap={{ scale: 0.98 }}
                              >
                                <NavLink
                                  className={({ isActive }) =>
                                    isActive
                                      ? "inline-block w-full rounded-md p-2 bg-blue-100 text-blue-600"
                                      : "inline-block w-full rounded-md p-2 hover:bg-primary transition-colors duration-200"
                                  }
                                  to={data.link}
                                >
                                  {data.name}
                                </NavLink>
                              </motion.li>
                            ))}
                          </ul>
                        </motion.div>
                      )}
                    </div>
                  ) : (
                    <NavLink
                      to={link.link}
                      className={({ isActive }) =>
                        `relative py-4 transition-colors duration-300 ${
                          isActive ? "text-blue-500 font-semibold" : "text-gray-500 hover:text-blue-400"
                        } after:content-[''] after:bg-blue-500 after:h-[3px] after:w-[0%] after:left-0 after:bottom-[8px] 
                        after:rounded-xl after:absolute after:duration-300 hover:after:w-[100%]`
                      }
                    >
                      {link.name}
                    </NavLink>
                  )}
                </motion.li>
              ))}
            </ul>
          </div>
          <div className="flex items-center gap-4">
            <motion.button 
              className="bg-gradient-to-r from-blue-600 to-blue-800 hover:from-blue-700 hover:to-blue-900 transition-all duration-300 text-white px-4 py-2 rounded-full font-montserrat shadow-md"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Login
            </motion.button>
            <div className="md:hidden block">
              {showMenu ? (
                <HiMenuAlt1
                  onClick={toggleMenu}
                  className="cursor-pointer transition-all text-blue-600"
                  size={30}
                />
              ) : (
                <HiMenuAlt3
                  onClick={toggleMenu}
                  className="cursor-pointer transition-all text-blue-600"
                  size={30}
                />
              )}
            </div>
          </div>
        </div>
      </div>
      <ResponsiveMenu setShowMenu={setShowMenu} showMenu={showMenu} />
    </nav>
  );
};
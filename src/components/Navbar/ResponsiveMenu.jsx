import React, { useState } from 'react';
import { FaUserCircle } from 'react-icons/fa';
import { NavbarLinks } from './Navbar';
import { Link, useLocation } from 'react-router-dom';
import { DropdownLinks } from './Navbar';

export const ResponsiveMenu = ({ showMenu, setShowMenu }) => {
  const [showServicesSubMenu, setShowServicesSubMenu] = useState(false);
  const location = useLocation(); 

  const isActive = (path) => location.pathname === path;

  return (
    <div
      className={`${
        showMenu ? "left-0" : "-left-full"
      } fixed bottom-0 top-0 z-20 flex h-screen w-4/5 flex-col justify-between bg-white dark:bg-gray-900 dark:text-white px-6 pb-6 pt-16 text-gray-800 transition-all duration-300 md:hidden rounded-r-2xl shadow-2xl`}
    >
      <div className="flex items-center gap-4 bg-blue-100 dark:bg-blue-900 p-4 rounded-lg">
        <FaUserCircle size={48} className="text-blue-600 dark:text-blue-300" />
        <div>
          <h1 className="text-lg font-semibold text-blue-800 dark:text-blue-200">Bienvenido</h1>
          <h2 className="text-sm text-blue-600 dark:text-blue-400">Santiago Salud</h2>
        </div>
      </div>
      <nav className="mt-8">
        <ul className="space-y-4 text-lg">
          {NavbarLinks.map((data) => (
            <li key={data.id}>
              {data.name === "Servicios" ? (
                <>
                  <button
                    onClick={() => setShowServicesSubMenu(!showServicesSubMenu)}
                    className={`inline-block transition-colors duration-200 ${
                      isActive("/services")
                        ? "font-bold text-blue-600 dark:text-blue-400"
                        : "text-gray-700 dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-300"
                    }`}
                  >
                    {data.name}
                  </button>
                  {showServicesSubMenu && (
                    <ul className="ml-6 mt-2 space-y-2 text-base border-l-2 border-blue-200 dark:border-blue-700 pl-4">
                      {DropdownLinks.map((service) => (
                        <li key={service.id}>
                          <Link
                            to={service.link}
                            onClick={() => setShowMenu(false)}
                            className={`transition-colors duration-200 ${
                              isActive(service.link)
                                ? "font-semibold text-blue-600 dark:text-blue-400"
                                : "text-gray-600 dark:text-gray-400 hover:text-blue-500 dark:hover:text-blue-300"
                            }`}
                          >
                            {service.name}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  )}
                </>
              ) : (
                <Link
                  to={data.link}
                  onClick={() => setShowMenu(false)}
                  className={`inline-block transition-colors duration-200 ${
                    isActive(data.link)
                      ? "font-bold text-blue-600 dark:text-blue-400"
                      : "text-gray-700 dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-300"
                  }`}
                >
                  {data.name}
                </Link>
              )}
            </li>
          ))}
        </ul>
      </nav>
      <div className="text-sm text-center bg-blue-50 dark:bg-blue-900 p-4 rounded-lg">
        <h1 className="font-medium text-blue-800 dark:text-blue-200">
          Santiago Apostol <span className="text-blue-600 dark:text-blue-400 hover:underline">Sucre</span>
        </h1>
      </div>
    </div>
  );
};
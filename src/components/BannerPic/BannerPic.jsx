import React from "react";
import { FaFacebookF, FaGoogle, FaInstagram } from "react-icons/fa";


const TwitterIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 50 50" width="20px" height="20px"><path d="M 5.9199219 6 L 20.582031 27.375 L 6.2304688 44 L 9.4101562 44 L 21.986328 29.421875 L 31.986328 44 L 44 44 L 28.681641 21.669922 L 42.199219 6 L 39.029297 6 L 27.275391 19.617188 L 17.933594 6 L 5.9199219 6 z M 9.7167969 8 L 16.880859 8 L 40.203125 42 L 33.039062 42 L 9.7167969 8 z"/></svg>
);

const BannerPic = ({ img }) => {
  const bgImage = {
    backgroundImage: `url(${img})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    height: "250px",
  };

  return (
    <div 
      data-aos="zoom-in" 
      className="relative w-full h-[250px] md:h-[350px] lg:h-[450px] bg-cover font-montserrat bg-center" 
      style={bgImage}
      
    >
      <div className="flex flex-col items-center justify-center h-full px-4 py-10 text-center">
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white">
          ¡Síguenos en nuestras redes sociales!
        </h1>
        <p className="text-base sm:text-xl text-yellow-40 mt-2 text-white">
          Para estar al día con las últimas noticias y consejos de salud.
        </p>
        <div className="flex flex-wrap justify-center gap-4 mt-6">
          {/* Facebook Button */}
          <a
            href="https://facebook.com"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 shadow-lg shadow-blue-500/50 dark:shadow-lg dark:shadow-blue-800/80 font-medium rounded-lg text-sm px-5 py-0 text-center me-2 mb-2"
          >
            <FaFacebookF className="mr-2 text-lg" /> FACEBOOK
          </a>

          {/* Twitter Button */}
          <a
            href="https://twitter.com"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center text-white bg-gradient-to-r from-blue-400 via-blue-600 to-blue-500 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 shadow-lg shadow-blue-500/50 dark:shadow-lg dark:shadow-blue-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
          >
            <TwitterIcon  /> TWITTER
          </a>

          {/* Google Button */}
          <a
            href="https://google.com"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center  text-white bg-gradient-to-r from-red-400 via-red-600 to-red-500 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 shadow-lg shadow-red-500/50 dark:shadow-lg dark:shadow-/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
          >
            <FaGoogle className="mr-2 text-lg" /> GOOGLE
          </a>

          {/* Instagram Button */}
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center text-white bg-gradient-to-r from-pink-400 via-pink-600 to-pink-500 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-pink-300 dark:focus:ring-pink-800 shadow-lg shadow-pink-500/50 dark:shadow-lg dark:shadow-pink-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
          >
            <FaInstagram className="mr-2 text-lg" /> INSTAGRAM      
          </a>
        </div>
      </div>
    </div>
  );
};

export default BannerPic;
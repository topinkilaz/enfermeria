import React, { useEffect } from "react";

import img from "../assets/banner.png";

import { BannerHeader } from "../components/Bannerheader/BannerHeader";
import { Info } from "../components/About/Info";
import { Team } from "../components/About/Team";
import { Galery } from "../components/About/Galery";
import { BlogsComp } from "../components/Blogs/BlogsComp.jsx";
import { Metrics } from "../components/About/Metrics.jsx";
import { useLocation } from "react-router-dom";

export const About = () => {

  useEffect(() => {
    window.scrollTo(0, 0); 
  }, [])

  const { hash } = useLocation();

  useEffect(() => {
    if (hash) {
      const element = document.querySelector(hash);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }, [hash]);
  return (
    <>
      <div>
        <BannerHeader img={img}>
          <div className="relative z-10 flex flex-col items-center justify-center h-full bg-opacity-50">
            <h1 className="text-black text-xl sm:text-2xl font-poppins font-bold text-shadow">
            Enfermería Santiago Salud
            </h1>
            <h2 className="text-black text-3xl sm:text-5xl font-anton mt-4 text-shadow">
              ACERCA DE{" "}
              <span className="font-montserrat font-bold text-3xl sm:text-5xl">
                Apostol Salud
              </span>
            </h2>
          </div>
        </BannerHeader>

        <div   className="container pt-14">
<Info/>
<div id="equipo">
<Team/>
</div>

</div>
<Metrics/>
<div   className="container pt-14">
<Galery/>
<div data-aos="fade-up" className='container'>
    <h1 className="  font-anton my-8 border-l-8 border-primary/50  pl-2 text-3xl font-bold  py-2 ">
            SECTOR DE NOTICIAS
          </h1>
          <hr />
    </div>
        <BlogsComp limit={3} />

    

        </div>
      </div>
    </>
  );
};

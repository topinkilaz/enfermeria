import React, { useEffect } from "react";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Layout } from "./pages/Layout";



import AOS from "aos";
import "aos/dist/aos.css";
import { Home } from "./pages/Home";
import { About } from "./pages/About";
import { Notices } from "./pages/Notices";
import { Services } from "./pages/Services";
import { Contact } from "./pages/Contact";

const App = () => {
useEffect(() => {
    AOS.init({
      offset: 100,
      duration: 900,
      easing: "ease-in-sine",
      delay: 100,
    });
    AOS.refresh();
  }, []);
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout/>}>
          <Route index element={< Home/>} />
          <Route path="/about" element={<About/>}/>
          <Route path="/notices" element={<Notices/>}/>
          <Route path="/services" element={<Services/>}/>
          <Route path="/contact" element={<Contact/>}/>
          <Route path="/services/:id" element={<Services />} />
         
           
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
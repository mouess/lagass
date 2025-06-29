import React, { useState, useEffect } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import Nav from "./nav";
import Services from "./services";
import Partner from "./partner";
import Footer from "./footer";
import Contact from "./contact";
import WORK from "./work";
import "./app.css";
import Explorer from "./explorer";
import Explorervideos from "./explorerVideos";
import Explorergraphic from "./explorergraphic";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import { motion, useScroll } from "framer-motion";


const App = () => {
  const [data, setData] = useState({ images: [], videos: [], graphic: [] });
  const location = useLocation();

  useEffect(() => {
    fetch("/manifest.json")
      .then((res) => res.json())
      .then((json) => setData(json))
      .catch((err) => console.error("Erreur API :", err));
  }, []);
  
  //const videoSrc = data?.videos?.find((vid) => vid.name === "video-home")?.src;

  const GlobalComponents = location.pathname === "/";

  const { scrollYProgress } = useScroll();

  return (
    <>
      <motion.div style={{ position: "fixed", top: 0, left: 0, right: 0, height: "8px",
        background: "#a831e4", transformOrigin: "left", scaleX: scrollYProgress, zIndex: 9999, }} />

      <Nav data={data} /><br/><br/>
      {GlobalComponents ? (
        <img id="home" src="https://rgsvnzujfenavgjorwdi.supabase.co/storage/v1/object/public/lagass/img/vid.JPEG"  width="100%"/>
      ) : GlobalComponents ? (
        <p>Vidéo indisponible</p>
      ) : null}
      <br />
          
      <Routes>
        <Route path="/" element={<WORK data={data} />} />
        <Route path="/photos" element={<Explorer data={data} />} />
        <Route path="/videos" element={<Explorervideos data={data} />} />
        <Route path="/graphic" element={<Explorergraphic data={data} />} />
        <Route path="/contact" element={<Contact data={data} />} />
      </Routes>

      {GlobalComponents && <Services data={data} />}
      
      {GlobalComponents && <Partner data={data} />}
      <br/>
      <Footer data={data} />

      <div className="whatssup">
        <a href="https://wa.me/+212660079068" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faWhatsapp} />
          <span>Contact us via WhatsApp</span>
        </a>
      </div>
    </>
  );
};

export default App;

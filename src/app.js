import React, { useState, useEffect } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import Nav from "./nav";
import Services from "./services";
import Partner from "./partner";
import Footer from "./footer";
import Contact from "./contact";
import WORK from "./work";
import Photos from "./photos";
import VideosPage from "./videos";
import MotionGraphic from "./motiongraphic";
import VideoDetail from "./VideoDetail";
import "./app.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';


const App = () => {
  const [data, setData] = useState({ images: [], videos: [] });
  const location = useLocation();

  useEffect(() => {
    fetch("https://media-api-alpha.vercel.app/media")
      .then((res) => res.json())
      .then((json) => setData(json))
      .catch((err) => console.error("Erreur API :", err));
  }, []);
  
  const videoSrc = data?.videos?.find((vid) => vid.name === "video-home")?.src;

  const GlobalComponents = location.pathname === "/";

  return (
    <>
      <Nav data={data} /><br/><br/>
      {GlobalComponents && videoSrc ? (
        <video id="home" src="/Enregistrement de l'écran 2025-04-25 204522.mp4" autoPlay muted loop width="100%">
          Votre navigateur ne supporte pas la vidéo.
        </video>
      ) : GlobalComponents ? (
        <p>Vidéo indisponible</p>
      ) : null}
      <br />
          
      <Routes>
        <Route path="/" element={<WORK data={data} />} />
        <Route path="/photo" element={<Photos data={data} />} />
        <Route path="/videos" element={<VideosPage data={data} />} />
        <Route path="/video/:id" element={<VideoDetail data={data} />} />
        <Route path="/motiongraphic" element={<MotionGraphic data={data} />} />
      </Routes>

      {GlobalComponents && <Services data={data} />}
      
      {GlobalComponents && <Partner data={data} />}
      <br />
      {GlobalComponents && <Contact data={data} />}
      <Footer data={data} />

      <div class="whatssup">
        <FontAwesomeIcon icon={faWhatsapp} />
        <a href="https://wa.me/+212660079068" target="_blank"><p>contact us via whatssup</p></a>
      </div>

    </>
  );
};

export default App;

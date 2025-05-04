import React from "react";
import "./services.css";

const Services = ({ data }) => {
  const bgImage = data?.images?.find((img) => img.name === "background1")?.src;

  return (
    <>
      <h1 id="services">OUR SERVICES</h1>

      <div class="circle-background"></div>

      <p>
        We are here specifically to enhance your brand and push it towards new
        horizons of excellence and innovation.
      </p>

      <div className="icones">
        <div className="ic">
          <img src={data?.images?.find((img) => img.name === "icon1")?.src} alt="icon1" width="250px" />
          <h3>Content Creation</h3>
          <p>Conception et supervision créative de vos projets</p>
        </div>

        <div className="ic">
          <img src={data?.images?.find((img) => img.name === "icon2")?.src} alt="icon2" width="100px" />
          <h3>Media Promotion</h3>
          <p>Planification et stratégies pour promouvoir vos productions sur le web. </p>
        </div>

        <div className="ic">
          <img src={data?.images?.find((img) => img.name === "icon3")?.src} alt="icon3" width="100px" />
          <h3>Multimedia Production</h3>
          <p>Création de contenu professionnel de haute qualité pour vos besoins.</p>
        </div>
      </div>
    </>
  );
};

export default Services;

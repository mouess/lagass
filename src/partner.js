import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import "./partner.css"; 

const Explorer = ({ data }) => {
  const location = useLocation();
 
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 1500,
    pauseOnHover: true,
    slidesToShow: 6,
    responsive: [
      {
        breakpoint: 800,
        settings: {
          slidesToShow: 3,
        }
      }
    ]
  };


  return (
    <div className="explorer-container">
      <h1>Partners</h1>

      <div className="slider-container">
      <div className="slider-wrapper">
            <Slider {...settings}>
              <img src="/partners/scribe.png" alt="scribe"/>
              <img src="/partners/grpSecours.png" alt="grp secours"/>
              <img src="/partners/surf.png" alt="rabat surf"/>
              <img src="/partners/artlens.png" alt="Artlens"/>
              <img src="/partners/USYM.png" alt="usym"/>
              <img src="/partners/isaim.png" alt="isaim"/>
              <img src="/partners/nike.png" alt="nike"/>
              <img src="/partners/ofppt.png" alt="ofppt"/>
              <img src="/partners/ministre.png" alt="ministre"/>
              <img src="/partners/hundson.png" alt="hundson"/>
              <img src="/partners/cinema.png" alt="cinema"/>
            </Slider>
        </div>
      </div>

    </div>
  );
};

export default Explorer;
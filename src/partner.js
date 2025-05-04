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
              <img src="/279151366_1405286799919906_3087219015423104980_n.jpg" alt="scribe"/>
              <img src="/294570545_513067640619055_8699447324913488677_n.png" alt="grp secours"/>
              <img src="/343729657_151229931216331_1685905234358396768_n.jpg" alt="rabat surf"/>
              <img src="/Artlens-Logo-BluexBlack.png" alt="Artlens"/>
              <img src="/esfg.jpg" alt="ibrand"/>
              <img src="/feth.jpg" alt="isaim"/>
              <img src="/fsdgh.png" alt="nike"/>
              <img src="/Logo-OFPPT-removebg-preview.png" alt="ofppt"/>
              <img src="/logo2.png" alt="ministre"/>
              <img src="/stg.png" alt="hundson"/>
              <img src="/USYM.png" alt="USYM"/>
              <img src="/WhatsApp_Image_2025-01-28_at_05.32.55-removebg-preview.png" alt="cinema"/>
            </Slider>
        </div>
      </div>

    </div>
  );
};

export default Explorer;

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
    autoplaySpeed: 1000,
    pauseOnHover: false,
    slidesToShow: 6,
    responsive: [
      {
        breakpoint: 800,
        settings: {
          slidesToShow: 4,
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
              <img src="https://res.cloudinary.com/dyfqal83h/image/upload/v1751773118/scribe_nvrjju.png" alt="scribe"/>
              <img src="https://res.cloudinary.com/dyfqal83h/image/upload/v1751773118/grpSecours_zyni90.png" alt="grp secours"/>
              <img src="https://res.cloudinary.com/dyfqal83h/image/upload/v1751773118/surf_ehktct.png" alt="rabat surf"/>
              <img src="https://res.cloudinary.com/dyfqal83h/image/upload/v1751773117/artlens_l3hqsx.png" alt="Artlens"/>
              <img src="https://res.cloudinary.com/dyfqal83h/image/upload/v1751773118/USYM_mrlqeu.png" alt="usym"/>
              <img src="https://res.cloudinary.com/dyfqal83h/image/upload/v1751773118/isaim_fpnxu5.png" alt="isaim"/>
              <img src="https://res.cloudinary.com/dyfqal83h/image/upload/v1751773118/nike_xi04iy.png" alt="nike"/>
              <img src="https://res.cloudinary.com/dyfqal83h/image/upload/v1751773118/ofppt_tjthnn.png" alt="ofppt"/>
              <img src="https://res.cloudinary.com/dyfqal83h/image/upload/v1751773118/ministre_gwontg.png" alt="ministre"/>
              <img src="https://res.cloudinary.com/dyfqal83h/image/upload/v1751773118/hundson_bn6epd.png" alt="hundson"/>
              <img src="https://res.cloudinary.com/dyfqal83h/image/upload/v1751773118/cinema_xwuykn.png" alt="cinema"/>
            </Slider>
        </div>
      </div>

    </div>
  );
};

export default Explorer;
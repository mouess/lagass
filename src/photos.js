import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import "./explorer.css";

const Spinner = () => (
  <div className="spinner-container">
    <div className="spinner"></div>
  </div>
);

const Photo = ({ data }) => {
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const defaultCategory = searchParams.get("category") || "produit";

  const [category, setCategory] = useState(defaultCategory);
  const [images, setImages] = useState([]);
  const [isLoadingFirstSlider, setIsLoadingFirstSlider] = useState(true);
  const [isLoadingSecondSlider, setIsLoadingSecondSlider] = useState(true);
  const [lightboxIndex, setLightboxIndex] = useState(null);

  useEffect(() => {
    if (data) {
      const categoryImages = data.images.filter((img) => img.category === category);
      setImages(categoryImages);

      let loadedFirst = 0;
      let loadedSecond = 0;
      const mid = Math.ceil(categoryImages.length / 2);

      categoryImages.slice(0, mid).forEach((img) => {
        const image = new Image();
        image.src = img.src;
        image.onload = () => {
          loadedFirst++;
          if (loadedFirst === mid) setIsLoadingFirstSlider(false);
        };
      });

      categoryImages.slice(mid).forEach((img) => {
        const image = new Image();
        image.src = img.src;
        image.onload = () => {
          loadedSecond++;
          if (loadedSecond === categoryImages.length - mid) setIsLoadingSecondSlider(false);
        };
      });
    }
  }, [category, data]);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 1500,
    pauseOnHover: true,
    slidesToShow: category === "produit" ? 5 : 3,
    responsive: [
      {
        breakpoint: 800,
        settings: {
          slidesToShow: category === "produit" ? 2 : 1,
        }
      }
    ]
  };

  const handleImageClick = (index) => setLightboxIndex(index);
  const closeLightbox = () => setLightboxIndex(null);
  const nextImage = () => setLightboxIndex((prev) => (prev + 1) % images.length);
  const prevImage = () => setLightboxIndex((prev) => (prev - 1 + images.length) % images.length);

  return (
    <div className="explorer-container">
      <h1>Photos - {category}</h1>
      <select onChange={(e) => setCategory(e.target.value)} value={category}>
        <option value="produit">Product</option>
        <option value="event">Event</option>
        <option value="festival">Festival</option>
        <option value="immobilier">Real estate</option>
        <option value="sport">Sport</option>
        <option value="societe">Company</option>
      </select>

      <div className="dual-sliders">
        {isLoadingFirstSlider ? (
          <Spinner />
        ) : (
          <Slider {...settings}>
            {images.slice(0, Math.ceil(images.length / 2)).map((item, index) => (
              <div className="slide" key={index} onClick={() => handleImageClick(index)}>
                <img src={item.src} alt={item.name} className="slider-image" />
              </div>
            ))}
          </Slider>
        )}

        {isLoadingSecondSlider ? (
          <Spinner />
        ) : (
          <Slider {...{ ...settings, rtl: true }}>
            {images.slice(Math.ceil(images.length / 2)).map((item, index) => (
              <div
                className="slide"
                key={index + Math.ceil(images.length / 2)}
                onClick={() => handleImageClick(index + Math.ceil(images.length / 2))}
              >
                <img src={item.src} alt={item.name} className="slider-image" />
              </div>
            ))}
          </Slider>
        )}
      </div>

      {lightboxIndex !== null && (
        <div className="lightbox-overlay" onClick={closeLightbox}>
          <div className="lightbox-content" onClick={(e) => e.stopPropagation()}>
            <img src={images[lightboxIndex].src} alt={images[lightboxIndex].name} className="lightbox-image" />
            <div className="lightbox-buttons">
              <button onClick={prevImage}>←</button>
              <button onClick={nextImage}>→</button>
            </div>
            <button className="lightbox-close" onClick={closeLightbox}>✖</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Photo;

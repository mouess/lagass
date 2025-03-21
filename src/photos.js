import React, { useState } from "react";
import "./photos.css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation, Autoplay } from "swiper/modules";

const Photos = ({ data }) => {
  const [category, setCategory] = useState("Toutes les categories");

  const handleCategoryChange = (e) => {
    setCategory(e.target.value);
  };

  // Filtrer uniquement les images ayant une catégorie définie
  const validImages = data.images.filter(image => image.category);

  // Regrouper les images par catégorie
  const groupedImages = validImages.reduce((acc, image) => {
    if (!acc[image.category]) {
      acc[image.category] = [];
    }
    acc[image.category].push(image);
    return acc;
  }, {});

  return (
    <div className="photos-container">
      <h1>Photos</h1>
      <h2>Choose one of the categories</h2>

      <select className="category-select" onChange={handleCategoryChange}>
        <option value="Toutes les categories">Toutes les catégories</option>
        {Object.keys(groupedImages).map((cat, index) => (
          <option key={index} value={cat}>{cat}</option>
        ))}
      </select>

      <h2>Gallery</h2>

      {category === "Toutes les categories" ? (
        // Afficher toutes les catégories avec un Swiper pour chaque
        Object.keys(groupedImages).map((cat) => (
          <div key={cat} className="category-section">
            <h3 className="category-title">{cat}</h3>
            <Swiper
              spaceBetween={5} slidesPerView={5} navigation
              autoplay={{ delay: 500, disableOnInteraction: false }} loop={true}
              modules={[Navigation, Autoplay]}
            >
              {groupedImages[cat].map((image, index) => (
                <SwiperSlide key={index} className="image-item">
                  <img src={image.src} alt={image.name} height="200px" />
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        ))
      ) : (
        // Afficher uniquement la catégorie sélectionnée
        <div className="category-section">
          <h3 className="category-title">{category}</h3>
          <Swiper spaceBetween={5} slidesPerView={5} navigation
            autoplay={{ delay: 500, disableOnInteraction: false }} loop={true}
            modules={[Navigation, Autoplay]}
          >
            {groupedImages[category]?.map((image, index) => (
              <SwiperSlide key={index} className="image-item">
                <img src={image.src} alt={image.name} height="200px" />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      )}
    </div>
  );
};

export default Photos;

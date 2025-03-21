import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./videos.css";

const VideosPage = ({ data }) => {
  const [category, setCategory] = useState("Toutes les categories");

  const handleCategoryChange = (e) => {
    setCategory(e.target.value);
  };

  const filteredVideos = data.videos.filter((video) => 
    category === "Toutes les categories" ? video.name !== "video-home" : video.category === category
);


  const groupedVideos = {};
  if (category === "Toutes les categories") {
    data.videos.forEach((video) => {
      if (!groupedVideos[video.category]) {
        groupedVideos[video.category] = [];
      }
      groupedVideos[video.category].push(video);
    });
  }

  return (
    <div className="videos-container">
      <h1>VIDEOS</h1><br/>
      <h2>Choose one of the categories</h2>

      <select className="category-select" onChange={handleCategoryChange}>
        <option value="Toutes les categories">Toutes les catégories</option>
        <option value="Centres">Centres</option>
        <option value="Sports">Sports</option>
        <option value="Gaming">Gaming</option>
      </select><br/>

      <h2>Videos that we work on</h2><br/>

      {category === "Toutes les categories" ? (

        Object.keys(groupedVideos).map((cat) => (
          <div key={cat} className="category-section">
            <h3 className="category-title">{cat} :</h3>

            <div className="videos-grid">
              {groupedVideos[cat].map((video, index) => (
                <div key={index} className="video-item">
                  <video src={video.src} controls />
                  <p className="video-link">{video.name}</p>
                </div>
              ))}
            </div>
          </div>
        ))
      ) : (
        <div className="videos-grid">
          {filteredVideos.map((video, index) => (
            <div key={index} className="video-item">
              <video src={video.src} controls />
              <p className="video-link">{video.name}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default VideosPage;

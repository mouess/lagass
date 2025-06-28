import React from "react";
import "./explorer.css";

const Explorervideos = ({ data }) => {
  if (!data || !data.videos) return null;

  const categories = [...new Set(data.videos.map((vid) => vid.category))];

  return (
    <div className="explorer-container">
      <h1>Explorer VIDEOS</h1>

      <div className="media-section">
        {categories.map((cat) => {
          const videosForCategory = data.videos.filter(
            (vid) => vid.category === cat
          );

          return (
            <div key={cat} className="category-block">
              <h2>{cat.toUpperCase()} :</h2>
              <div className="videos-grid">
                {videosForCategory.map((v, index) => (
                  <div className="video-container" key={index}>
                    <video src={v.src} className="custom-video" controls autoPlay muted />
                  </div>
                ))}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Explorervideos;

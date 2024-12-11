import React, { useState } from "react";
import img1 from '../img/RECETA2.jpg';
const Videos = () => {
  // Estado para controlar el "like" de cada video
  const [likes, setLikes] = useState([false, false, false]);

  // Función para alternar el estado del corazón
  const toggleLike = (index) => {
    setLikes((prevLikes) => {
      const updatedLikes = [...prevLikes];
      updatedLikes[index] = !updatedLikes[index];
      return updatedLikes;
    });
  };

  // Lista de rutas locales de los videos
  const videoUrls = [
    "./videos/video1.mp4",
    "./videos/video1.mp4",
    "./videos/video1.mp4",
  ];

  return (
    <div style={{ display: "flex", justifyContent: "space-around", flexWrap: "wrap" }}>
      {videoUrls.map((url, index) => (
        <div key={index} style={{ margin: "20px", textAlign: "center" }}>
          <video width="300" controls
          key={index}
          >
            <source src={url} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          <div>
            <button
              onClick={() => toggleLike(index)}
              style={{
                background: "none",
                border: "none",
                cursor: "pointer",
                fontSize: "24px",
                color: likes[index] ? "red" : "gray",
              }}
            >
              {likes[index] ? "❤️" : "🤍"}
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Videos;

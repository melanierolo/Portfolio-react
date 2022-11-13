import React from "react";
import "./style.css";
import ImageAbout from "../../assets/images/image-about.png";

const Card = () => {
  return (
    <div className="container">
      <div className="card">
        <img src={ImageAbout} alt="Melanie" />
        <div className="overlay">
          <h1>Title</h1>
          <h3>HTML - CSS -JavaScript</h3>
          <p>
            Many desktop publishing packages and web page editors now use Lorem
            Ipsum as their default model text, and a search for 'lorem ipsum'
            will uncover many web sites still in their infancy. Various versions
            have evolved over the years, sometimes by accident, sometimes on
            purpose (injected humour and the like).
          </p>
          <div className="overlay-btn">
            <button>GitHub</button>
            <button>Demo</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;

import React from "react";
import "./style.css";
import ButtonElement from "../ButtonElement";
import HomeImage from "../../assets/images/home-unsplash.png";

export default function Home() {
  return (
    <section className="home" id="home">
      <div className="home-content">
        <div className="home-message">
          <p>Welcome, </p>
          <span>
            <b>I’m Melanie Rodas</b>{" "}
          </span>
          <p>a Web Developer</p>
        </div>
        <div className="home-buttons">
          <ButtonElement
            onClick={() => (window.location.href = "#contact")}
            buttonStyle="btn--secondary"
            buttonSize="btn--large"
          >
            Contact
          </ButtonElement>
          <ButtonElement
            onClick={() => (window.location.href = "#about")}
            buttonStyle="btn--primary"
            buttonSize="btn--large"
          >
            About Me
          </ButtonElement>
        </div>
      </div>
      <div className="home-image">
        <img src={HomeImage} alt="A laptop -unplash" />
      </div>
    </section>
  );
}

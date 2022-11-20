import React from "react";
import "./style.css";
import ButtonElement from "../ButtonElement";
import { useEffect, useState } from "react";
import ImageDesktop from "../../assets/images/home-unsplash.png";
import ImageMobile from "../../assets/images/home-unsplash-mobile.png";

export default function Home() {
  const [homeImage, setHomeImage] = useState(true);

  useEffect(() => {
    const onScroll = () => {
      if (window.pageYOffset < 960) {
        setHomeImage(true);
      } else {
        setHomeImage(false);
      }
    };
    // clean up code
    window.removeEventListener("scroll", onScroll);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
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
        <img
          src={homeImage ? ImageMobile : ImageDesktop}
          alt="A laptop -unplash"
        />
      </div>
    </section>
  );
}

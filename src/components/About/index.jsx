import React from "react";
import Title from "../Title";
import "./style.css";
import ImageAbout from "../../assets/images/image-about.png";

export default function About() {
  return (
    <section className="about" id="about">
      <Title>About Me</Title>
      <div className="about-content">
        <div className="about-paragraph">
          <p>
            My name is Melanie Rodas a Full-Stack developer based in Lima,Peru
            and I completed my Bachelor's degree in Telecommunications
            Engineering in 2019. In addition, I'm a responsible,critical
            thinking, ability to work in a team, with ease of adaptation to
            change and new tecnologies.{" "}
          </p>
          <p>
            I took a Professional Certificate in Coding: Full Stack Development
            with MERN from August 2021 to June 2022 in MITxPRO in collaboration
            with Emeritus. Thanks to this, I’ve learned about one of the most
            popular framework called React, JavaScript,HTML,CSS MongoDB,
            ExpressJS,NodeJS,git and the essetials for working in the cloud.
          </p>
        </div>
        <div className="about-image">
          <div className="about-background"></div>
          <div className="about-img">
            {" "}
            <figure>
              <img src={ImageAbout} alt="Profesional- Melanie" />
            </figure>
          </div>
        </div>
      </div>
    </section>
  );
}

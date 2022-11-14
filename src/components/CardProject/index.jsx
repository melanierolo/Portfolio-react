import React from "react";
import "./style.css";
import ButtonElement from "../ButtonElement";

const CardProject = (props) => {
  const { title, subtitle, image, description, gitHubLink, demoLink } = props;
  const allSubtitle = subtitle.join(" • ");
  console.log(gitHubLink);
  return (
    <div className="container">
      <div className="card">
        <img src={image} alt="" />
        <div className="overlay">
          <h1>{title}</h1>
          <h3>{allSubtitle}</h3>
          <p>{description}</p>
          <div className="overlay-btn">
            <ButtonElement
              onClick={(event) => {
                event.preventDefault();
                window.open(gitHubLink, "_blank");
                console.log(gitHubLink);
              }}
              buttonStyle="btn--secondary"
              buttonSize="btn--medium"
            >
              Github
            </ButtonElement>
            <ButtonElement
              onClick={(event) => {
                event.preventDefault();
                window.open(demoLink, "_blank");
              }}
              buttonStyle="btn--primary"
              buttonSize="btn--medium"
            >
              Demo
            </ButtonElement>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardProject;

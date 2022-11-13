import React from "react";
import "./style.css";
import Title from "../Title";
import Card from "../Card";

export default function Projects() {
  return (
    <section className="projects" id="projects">
      <Title>Projects</Title>
      <div className="project-content">
        <Card />
      </div>
    </section>
  );
}

import React from "react";
import "./style.css";
import Title from "../Title";
import CardProject from "../CardProject";
import allProjects from "../../data/data.json";

export default function Projects() {
  const projectsData = allProjects.projects;
  console.log(projectsData);
  return (
    <section className="projects" id="projects">
      <Title>Projects</Title>
      <div className="project-content">
        {projectsData.map((project, i) => {
          const { title, subtitle, image, description, gitHubLink, demoLink } =
            project;
          return (
            <CardProject
              key={i}
              title={title}
              subtitle={subtitle}
              image={image}
              description={description}
              gitHubLink={gitHubLink}
              demoLink={demoLink}
            />
          );
        })}
      </div>
    </section>
  );
}

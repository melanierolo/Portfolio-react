import React from "react";
import "./style.css";
import Title from "../Title";
import SkillItem from "../SkillItem";
import allSkills from "../../data/skills.json";

export default function Skills() {
  const skills = allSkills.skills;
  const learning = allSkills.learning;
  return (
    <section className="skills" id="skills">
      <Title>Skills</Title>
      <div className="skills__containter">
        {skills.map((skill, i) => {
          const itemName = skill.name;
          return <SkillItem key={i} itemName={itemName} />;
        })}
      </div>
      <div className="skills__subtitle">
        <h2>Learning</h2>
      </div>
      <div className="skills__containter">
        {learning.map((skill, i) => {
          const itemName = skill.name;
          return <SkillItem key={i} itemName={itemName} />;
        })}
      </div>
    </section>
  );
}

import React from "react";
import "./style.css";
import Title from "../Title";

export default function Education() {
  return (
    <section className="education" id="education">
      <section className="timeline">
        <Title>Education</Title>
        <div className="timeline__container">
          <ul>
            <li>
              <h3 className="timeline__subtitle">
                MITxPRO in collaboration with Emeritus
              </h3>
              <p>
                Professional Certificate in Coding: Full Stack Development with
                MERN
              </p>
              <a href="https://certificates.emeritus.org/d4871956-1e5a-4975-b226-5b28c3945ab5#gs.4rzi69">
                Read more
              </a>
              <span className="timeline__date">June 2022</span>
            </li>
            <li>
              <h3 className="timeline__subtitle">
                Asociación Cultural Peruano Británica
              </h3>
              <p>English (Intermediate-Advanced)</p>
              <a href="https://www.britanico.edu.pe/nosotros/">Read more</a>
              <span className="timeline__date">March 2021</span>
            </li>
            <li>
              <h3 className="timeline__subtitle">
                Universidad Nacional de Ingeniería
              </h3>
              <p>Bachelor of Science in Telecommunications Engineering</p>
              <a href="https://www.youtube.com/watch?v=mX6_eU4RbtU">
                Read more
              </a>
              <span className="timeline__circle">
                <span className="timeline__date">Dic 2019</span>
              </span>
            </li>
          </ul>
        </div>
      </section>
    </section>
  );
}

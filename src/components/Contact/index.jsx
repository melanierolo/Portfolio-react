import React from "react";
import Title from "../Title";
import "./style.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import ContactForm from "../ContactForm";

export default function Contact() {
  return (
    <section className="contact" id="contact">
      <Title>Contact</Title>
      <div className="contact-content">
        <div className="contact-left">
          <h2>Get in touch</h2>
          <p>Let's chat. I'll be glad to answer your questions.</p>
          <a
            href="https://github.com/melanierolo"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon icon={faGithub} size="3x" />
          </a>
          <a
            href="https://www.linkedin.com/in/melanie-rodaslo"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon icon={faLinkedin} size="3x" />
          </a>
        </div>
        <section className="contact-right">
          <ContactForm />
        </section>
      </div>
    </section>
  );
}

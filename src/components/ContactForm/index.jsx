import React from "react";
import "./style.css";
import { Formik, Field, Form } from "formik";
import ButtonElement from "../ButtonElement";

export default function ContactForm() {
  return (
    <form className="contact-form">
      {" "}
      <div className="contact-form__form-group">
        <label htmlFor="">Nombre:</label>
        <input
          id="user_name"
          name="user_name"
          type="text"
          autoComplete="off"
          placeholder="John Smith"
          className="contact-form__form-group__input"
        />
      </div>
      <div className="contact-form__form-group">
        <label htmlFor="gmail">Gmail:</label>
        <input
          id="user_email"
          name="user_email"
          type="email"
          placeholder="example@domain.com"
          className="contact-form__form-group__input"
        />
      </div>
      <div className="contact-form__form-group">
        <label htmlFor="subject">Subject:</label>
        <input
          id="user_subject"
          name="user_subject"
          type="text"
          placeholder="Write your subject here"
          className="contact-form__form-group__input"
        />
      </div>
      <div className="contact-form__form-group">
        <label htmlFor="message">Message:</label>
        <textarea
          id="user_message"
          name="user_message"
          type="text"
          autoComplete="off"
          placeholder="Your questions and comments"
          className="contact-form__form-group__input"
        />
      </div>
      <ButtonElement
        id="submitBtn"
        name="submitBtn"
        type="submit"
        buttonStyle="btn--primary"
        buttonSize="btn--large"
      >
        Send message
      </ButtonElement>
    </form>
  );
}

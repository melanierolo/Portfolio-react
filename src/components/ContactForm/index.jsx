import React from "react";
import "./style.css";
import { useFormik } from "formik";
import ButtonElement from "../ButtonElement";
import emailjs from "@emailjs/browser";

export default function ContactForm() {
  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      subject: "",
      message: "",
    },
    onSubmit: (values, actions) => {
      //console.log("form:", values);
      let arrayValues = Object.keys(values);
      if (
        arrayValues.name !== "" &&
        arrayValues.email !== "" &&
        arrayValues.message !== ""
      ) {
        emailjs
          .send(
            `${process.env.REACT_APP_MAIL_SERVICE_ID}`,
            `${process.env.REACT_APP_MAIL_TEMPLATE_ID}`,
            {
              to_name: "Melanie",
              from_name: values.name,
              reply_to: values.email,
              message_html: values.message,
              message_subject: values.subject,
            },
            `${process.env.REACT_APP_MAIL_PUBLIC_KEY}`
          )
          .then(() => {
            actions.resetForm({
              values: {
                // the type of `values` inferred to be contact form
                name: "",
                email: "",
                subject: "",
                message: "",
              },
            });
            actions.setSubmitting(false);
            console.log("send a email");
          })
          .catch((error) => {
            actions.setSubmitting(false);
            alert(
              "Error sending email. " +
                "Error :  " +
                JSON.stringify(error.status) +
                JSON.stringify(error.text)
            );
          });
      }
    },
    validate: (values) => {
      let errors = {};
      if (!values.name) errors.name = "Please enter a name";
      if (!values.email) {
        errors.email = "Email field is required";
      } else if (
        !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)
      ) {
        errors.email = "Please enter a valid email";
      }
      if (!values.message) errors.message = "Please enter a message";
      //console.log(errors);
      return errors;
    },
  });

  return (
    <>
      <form className="contact-form" onSubmit={formik.handleSubmit}>
        {" "}
        <div className="contact-form__form-group">
          <label htmlFor="">Nombre:</label>
          <input
            id="name"
            name="name"
            type="text"
            autoComplete="off"
            placeholder="John Smith"
            className="contact-form__form-group__input"
            onBlur={formik.handleBlur}
            onChange={formik.handleChange}
            value={formik.values.name}
          />
          {formik.touched.name && formik.errors.name ? (
            <div className="error-message">{formik.errors.name}</div>
          ) : null}
        </div>
        <div className="contact-form__form-group">
          <label htmlFor="gmail">E-mail:</label>
          <input
            id="email"
            name="email"
            type="email"
            placeholder="example@domain.com"
            className="contact-form__form-group__input"
            onBlur={formik.handleBlur}
            onChange={formik.handleChange}
            value={formik.values.email}
          />
          {formik.touched.email && formik.errors.email ? (
            <div className="error-message">{formik.errors.email}</div>
          ) : null}
        </div>
        <div className="contact-form__form-group">
          <label htmlFor="subject">Subject:</label>
          <input
            id="subject"
            name="subject"
            type="text"
            placeholder="Write your subject here"
            className="contact-form__form-group__input"
            onChange={formik.handleChange}
            value={formik.values.subject}
          />
        </div>
        <div className="contact-form__form-group">
          <label htmlFor="error-message">Message:</label>
          <textarea
            id="message"
            name="message"
            type="text"
            autoComplete="off"
            placeholder="Your questions and comments"
            className="contact-form__form-group__input"
            onBlur={formik.handleBlur}
            onChange={formik.handleChange}
            value={formik.values.message}
          />
          {formik.touched.message && formik.errors.message ? (
            <div className="error-message">{formik.errors.message}</div>
          ) : null}
        </div>
        <ButtonElement
          id="submitBtn"
          name="submitBtn"
          type="submit"
          buttonStyle="btn--primary"
          buttonSize="btn--large"
          disabled={!(formik.dirty && formik.isValid) || formik.isSubmitting}
        >
          Send message
        </ButtonElement>
      </form>
    </>
  );
}

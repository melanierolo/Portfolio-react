import React from "react";
import "./style.css";
import ImageError from "../../assets/images/error-404.png";

const NotFoundPage = () => {
  return (
    <>
      <section className="not-found">
        <figure>
          <img src={ImageError} alt="error 404" />
        </figure>
        <p className="not-found_subtitle">Sorry,page not found</p>
      </section>
    </>
  );
};

export default NotFoundPage;

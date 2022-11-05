import React from "react";
import "./style.css";

export default function ButtonElement(props) {
  let { children, type, onClick, buttonStyle, buttonSize } = props;
  console.log(buttonStyle);

  return (
    <button
      className={`btn ${
        buttonStyle === "undefined"
          ? (buttonStyle = "btn--primary")
          : buttonStyle
      } ${
        buttonSize === "undefined" ? (buttonSize = "btn--medium") : buttonSize
      }`}
      type={type}
      onClick={onClick}
    >
      {children}
    </button>
  );
}

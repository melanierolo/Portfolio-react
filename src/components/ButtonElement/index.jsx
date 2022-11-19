import React from "react";
import "./style.css";

export default function ButtonElement(props) {
  let { children, type, onClick, buttonStyle, buttonSize, disabled } = props;

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
      disabled={
        typeof disabled === "boolean" && disabled === true ? true : false
      }
    >
      {children}
    </button>
  );
}

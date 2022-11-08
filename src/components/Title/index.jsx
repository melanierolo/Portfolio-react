import React from "react";
import "./style.css";

export default function Title(props) {
  const { children } = props;
  //console.log("props", props);
  return <div className="title">{children}</div>;
}

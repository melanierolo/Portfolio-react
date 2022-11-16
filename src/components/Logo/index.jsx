import React from "react";
import "./style.css";

export default function Logo(props) {
  //color = logo--colorA or logo--colorA
  const { color } = props;
  return (
    <div className={`logo ${color}`}>
      <h1>Melanie-Rodas</h1>
    </div>
  );
}

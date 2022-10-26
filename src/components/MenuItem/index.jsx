import React from "react";
import "./style.css";

export default function MenuItem(props) {
  const { item } = props;
  return (
    <li className="menu-item">
      <a href="#">{item}</a>
    </li>
  );
}

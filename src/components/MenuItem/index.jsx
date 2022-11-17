import React from "react";
import "./style.css";
import { NavLink } from "react-router-dom";

export default function MenuItem(props) {
  const { item } = props;
  const handleLinkClick = (event) => {
    event.preventDefault();
    window.location.href = `/#${item.toLowerCase()}`;
  };
  return (
    <li className="menu-item">
      <NavLink onClick={handleLinkClick}>{item}</NavLink>
    </li>
  );
}

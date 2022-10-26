import React from "react";
import { useState, useEffect } from "react";
import "./style.css";
import Logo from "../Logo";
import MenuItem from "../MenuItem";

export default function Navbar() {
  const menuItems = [
    "Home",
    "About Me",
    "Projects",
    "Skills",
    "Education",
    "Contact",
  ];
  return (
    <div className="navbar">
      <Logo />
      <ul className="navbar__item">
        {menuItems.map((item, i) => {
          return <MenuItem key={i} item={item} />;
        })}
      </ul>
    </div>
  );
}

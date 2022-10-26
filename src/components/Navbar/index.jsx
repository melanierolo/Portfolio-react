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
  const [shadow, setShadow] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      if (window.pageYOffset > 80) {
        setShadow(true);
      } else {
        setShadow(false);
      }
    };
    // clean up code
    window.removeEventListener("scroll", onScroll);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  //console.log(shadow);
  return (
    <div className={shadow ? "navbar active" : "navbar"}>
      <Logo />
      <ul className="navbar__item">
        {menuItems.map((item, i) => {
          return <MenuItem key={i} item={item} />;
        })}
      </ul>
    </div>
  );
}

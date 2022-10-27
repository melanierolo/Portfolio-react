import React from "react";
import { useState, useEffect } from "react";
import "./style.css";
import Logo from "../Logo";
import MenuItem from "../MenuItem";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faXmarkSquare } from "@fortawesome/free-solid-svg-icons";

export default function Navbar() {
  const menuItems = [
    "Home",
    "About",
    "Projects",
    "Skills",
    "Education",
    "Contact",
  ];
  const [shadow, setShadow] = useState(false);
  const [mobile, setMobile] = useState(true);

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
  //Show menu in mobile
  const handleToggle = () => {
    setMobile(!mobile);
  };
  return (
    <nav className={shadow ? "navbar active-shadow" : "navbar"}>
      <Logo />
      <div className="menu-icon" onClick={handleToggle}>
        {mobile ? (
          <FontAwesomeIcon icon={faBars} />
        ) : (
          <FontAwesomeIcon icon={faXmarkSquare} />
        )}
      </div>
      <ul className={mobile ? "navbar__menu" : "navbar__menu active"}>
        {menuItems.map((item, i) => {
          return <MenuItem key={i} item={item} />;
        })}
      </ul>
    </nav>
  );
}

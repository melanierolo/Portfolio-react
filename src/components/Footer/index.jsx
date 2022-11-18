import React from "react";
import "./style.css";
import Logo from "../Logo";
import MenuItem from "../MenuItem";

const Footer = () => {
  const menuItems = [
    "Home",
    "About",
    "Projects",
    "Skills",
    "Education",
    "Contact",
  ];
  return (
    <div className="footer">
      <div className="footer__menu">
        {menuItems.map((item, i) => {
          return <MenuItem key={i} item={item} fontColor={"font-white"} />;
        })}
      </div>
      <div className="footer__logo">
        <Logo color="logo--colorB" />
      </div>
      <div className="footer__copyright">
        <p>Copyright 2022 All rights reserved</p>
      </div>
    </div>
  );
};

export default Footer;

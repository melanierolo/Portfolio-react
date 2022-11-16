import React from "react";
import "./style.css";
import Logo from "../Logo";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer__menu"></div>
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

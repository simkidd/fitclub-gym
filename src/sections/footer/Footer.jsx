import React from "react";
import "./footer.scss";
import Github from "../../assets/github.png";
import Instagram from "../../assets/instagram.png";
import Linkedin from "../../assets/linkedin.png";
import Logo from "../../assets/logo.png";
const Footer = () => {
  return (
    <div className="footer-container">
      <hr />

      <div className="footer">
        <div className="social-links">
          <img src={Github} alt="" />
          <img src={Instagram} alt="" />
          <img src={Linkedin} alt="" />
        </div>

        <div className="f-logo">
          <img src={Logo} alt="" />
        </div>
      </div>

      <div className="blur f-blur1"></div>
      <div className="blur f-blur2"></div>
    </div>
  );
};

export default Footer;

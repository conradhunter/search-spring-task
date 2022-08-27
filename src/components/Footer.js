import React from "react";
import footerLogo from "../assets/searchspring-logo.png";
import "./components.css";

const Footer = () => {
  return (
    <footer>
      <a href="/">
        <img id="footer-logo" src={footerLogo} />
      </a>
    </footer>
  );
};

export default Footer;

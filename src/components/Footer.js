import React from "react";
import footerLogo from "../assets/searchspring-logo.png";
import "./components.css";

const Footer = () => {
  
  function scrollToTop() {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }

  return (
    <footer>
      <button className="scrollToTop" onClick={scrollToTop}>
        <img id="footer-logo" src={footerLogo} />
      </button>
    </footer>
  );
};

export default Footer;

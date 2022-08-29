import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import logo from "../assets/searchspring-logo.png";

const Nav = () => {
  return (
    <nav>
      <div className="top__nav">
        <a id="mailingList" href="">
          <h6>Sign-up to our newsletter for the lastest news and offers</h6>
        </a>
        <div id="auth__btns--wrapper">
          <button className="auth__btns">Sign-In</button>
          <button className="auth__btns">Register</button>
        </div>
      </div>
      <div className="mid__nav">
        <img id="nav__logo" src={logo} />
        <div className="nav__links">
          <a target='_blank' href="https://github.com/conradhunter">
            <FontAwesomeIcon className="icons" icon={faGithub} />
          </a>
          <a target='_blank' href="https://www.linkedin.com/in/conrad-hunter-906a57226/">
            <FontAwesomeIcon className="icons" icon={faLinkedin} />
          </a>
          <a href="">
            <FontAwesomeIcon className="icons" icon={faCartShopping} />
          </a>
        </div>
      </div>
      <ul id="nav__links">
        <button>
          <li>Tops</li>
        </button>
        <button>
          <li>Pants</li>
        </button>
        <button>
          <li>Dresses</li>
        </button>
        <button>
          <li>Shoes</li>
        </button>
        <button>
          <li>Hats</li>
        </button>
      </ul>
    </nav>
  );
};

export default Nav;

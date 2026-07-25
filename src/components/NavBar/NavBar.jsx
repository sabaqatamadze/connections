import React from "react";
import "./NavBar.css";

import { Link } from "react-router-dom";
import {
  FaInstagram,
  FaBars,
  FaTimes,
  FaPhone,
} from "react-icons/fa";
import { SlSocialFacebook } from "react-icons/sl";
import { MdMailOutline } from "react-icons/md";

function NavBar() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="Nav-bar">
      <div className="Links">
        <div className="social">
          <a
            href="https://www.instagram.com/the_connectionss?igsh=d3dvdGx4emtoZWoy&utm_source=qr"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaInstagram />
          </a>

          <a
            href="https://www.facebook.com/profile.php?id=61592185824116"
            target="_blank"
            rel="noopener noreferrer"
          >
            <SlSocialFacebook />
          </a>
        </div>

        <div className="contact">
          <p>
            <FaPhone className="Icon" />
            +995 551 51 83 51
          </p>

          <p>
            <MdMailOutline className="Icon" />
            rightconnections90@gmail.com
          </p>
        </div>

        <div className="res-icon" onClick={toggleMenu}>
          {isMenuOpen ? <FaTimes /> : <FaBars />}
        </div>
      </div>

      <div
        className={isMenuOpen ? "overlay active" : "overlay"}
        onClick={toggleMenu}
      ></div>

      <div className={isMenuOpen ? "Pages active" : "Pages"}>
        <div className="menu-header">
          <h2>Connections</h2>
          <span>Travel Georgia</span>
        </div>

        <div className="menu-links">
          <Link to="/" onClick={toggleMenu}>
            Home
          </Link>

          <Link to="/Packages" onClick={toggleMenu}>
            Packages
          </Link>

          <Link to="/about" onClick={toggleMenu}>
            About Us
          </Link>

          <Link to="/contact" onClick={toggleMenu}>
            Contact
          </Link>
        </div>

        <div className="menu-bottom">
          <div className="menu-contact">
            <p>
              <FaPhone />
              +995 551 51 83 51
            </p>

            <p>
              <MdMailOutline />
              rightconnections90@gmail.com
            </p>
          </div>

          <div className="menu-social">
            <a
              href="https://www.instagram.com/the_connectionss?igsh=d3dvdGx4emtoZWoy&utm_source=qr"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaInstagram />
            </a>

            <a
              href="https://www.facebook.com/profile.php?id=61592185824116"
              target="_blank"
              rel="noopener noreferrer"
            >
              <SlSocialFacebook />
            </a>
          </div>

          <div className="menu-footer">
            Plan your next adventure 🌴
          </div>
        </div>
      </div>

      <div className="desktop-pages">
        <Link to="/">Home</Link>
        <Link to="/Packages">Packages</Link>
        <Link to="/about">About Us</Link>
        <Link to="/contact">Contact</Link>
      </div>
    </div>
  );
}

export default NavBar;
import React from "react";
import { FaInstagram } from "react-icons/fa";
import { SlSocialFacebook } from "react-icons/sl";
import { FaPhone } from "react-icons/fa6";
import { MdMailOutline } from "react-icons/md";
import "./NavBar.css";

function NavBar() {
  return (
    <div className="Nav-bar">
      <div className="Links">
        <div className="social"> 
          <a
          href="https://www.instagram.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaInstagram  />
        </a>
        <a
          href="https://www.facebook.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <SlSocialFacebook />
        </a>
        </div>
        <div className="contact">
          <p><FaPhone  className="Icon"/>232284724y29</p>
          <p><MdMailOutline className="Icon"/>sjafhajl@gmaul.com</p>

        </div>
      </div>

      <div className="Pages">
        <a href="/">Home</a>
        <a href="/Packages">Packages</a>
        <a href="/about">About Us</a>
        <a href="/contact">Contact</a>
      </div>
    </div>
  );
}

export default NavBar;

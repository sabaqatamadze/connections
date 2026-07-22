import React from "react";
import { FaInstagram } from "react-icons/fa";
import { SlSocialFacebook } from "react-icons/sl";
import { FaPhone } from "react-icons/fa6";
import { MdMailOutline } from "react-icons/md";
import "./NavBar.css";
import { Link } from "react-router-dom";
import { FaBars } from "react-icons/fa";

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
          <FaInstagram  />
        </a>
        <a
          href="https://www.facebook.com/profile.php?id=61592185824116&rdid=ETIaj136RAabpmRb&share_url=https%3A%2F%2Fwww.facebook.com%2Fshare%2F1Kxrk8oBVf%2F#"
          target="_blank"
          rel="noopener noreferrer"
        >
          <SlSocialFacebook />
        </a>
        </div>
        <div className="contact">
          <p><FaPhone  className="Icon"/>+995 551 51 83 51</p>
          <p><MdMailOutline className="Icon"/>rightconnections90@gmail.com</p>

        </div>
      </div>

      <div className={isMenuOpen ? 'Pages active' : 'Pages'} >
        <Link to="/">Home</Link>
        <Link to="/Packages">Packages</Link>
        <Link to="/about">About us</Link>
        <Link to="/contact">Contact</Link>
      </div>

      <div className="res-icon" onClick={toggleMenu}>
        <FaBars />
        </div>
    </div>
    
  );
}

export default NavBar;

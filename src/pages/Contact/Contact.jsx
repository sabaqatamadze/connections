import React, { useState } from "react";
import "./Contact.css";
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { SiGmail } from "react-icons/si";
import { FaPhoneAlt } from "react-icons/fa";

function Contact() {
  let Gmail = "Gmail";
  const [copied, setCopied] = useState(Gmail);
  const GmailCopy = () => {
    navigator.clipboard.writeText(Gmail);
    setCopied("Copied!");
  };

  let Number = "579714884";
  const [NumCopied, setNumCopied] = useState(Number);
  const PhoneCopy = () => {
    navigator.clipboard.writeText(Number);
    setNumCopied("Copied!");
  };

  return (
    <div className="PageContact">
      <img
        src="https://res.cloudinary.com/djont7dcv/image/upload/v1772880101/manoj-sai-ram-413qG1ucR7c-unsplash_zohhoe.jpg"
        alt="hero"
        className="background"
      />

      <div className="Contacts">
        <div className="Contacts1">
          <div className="Contact">
            <p className="icon">
              <FaFacebook />
            </p>
            <a
              href="https://www.facebook.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="text"
            >
              Facebook
            </a>
          </div>
          <div className="Contact">
            <p className="icon">
              <FaInstagram />
            </p>
            <a
              href="https://www.instagram.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="text"
            >
              Instagram
            </a>
          </div>
          <div className="Contact1">
            <p className="icon">
              <SiGmail />
            </p>
            <button onClick={() => GmailCopy()} className="text">
              <a
                href="https://www.gmail.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="text1"
              >
                {copied}
              </a>
            </button>
          </div>
          <div className="Contact">
            <p className="icon">
              <FaPhoneAlt />
            </p>
            <button onClick={() => PhoneCopy()} className="text">
              {NumCopied}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;

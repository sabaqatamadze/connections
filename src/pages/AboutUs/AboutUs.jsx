import React from "react";
import "./AboutUs.css";

const AboutUs = () => {
  return (
    <div>

      {/* Navbar */}
      <div className="navbar">
        <a href="#">Home</a>
        <a href="#">Tours</a>
        <a href="#">Gallery</a>
        <a href="#">Contact</a>
      </div>

      {/* Hero Section */}
      <div className="hero">
        <h1>Connection</h1>
        <p>Discover the Heart of Our Country</p>
      </div>

      {/* Main Content */}
      <div className="container">

        {/* Who We Are */}
        <div className="section">
          <div className="text">
            <h2>Who We Are</h2>
            <p>
              At Connection, we believe that the best way to experience a country
              is to truly connect with its people, culture, and landscapes.
              We are passionate about showing the real beauty of our homeland.
            </p>
          </div>
          <img
            src="https://images.unsplash.com/photo-1526772662000-3f88f10405ff"
            alt="travel"
          />
        </div>

        {/* What We Do */}
        <div className="section reverse">
          <img
            src="https://images.unsplash.com/photo-1500530855697-b586d89ba3ee"
            alt="nature"
          />
          <div className="text">
            <h2>What We Do</h2>
            <p>
              We organize tours that take you beyond typical tourist places.
              From mountains and nature to cultural experiences, we help you
              explore the country in a unique way.
            </p>
            <p>
              Our goal is to create unforgettable journeys and real connections.
            </p>
          </div>
        </div>

        {/* Features */}
        <h2>Why Travel With Us?</h2>
        <div className="features">

          <div className="feature">
            <img
              src="https://img.icons8.com/ios-filled/100/map.png"
              alt="map"
            />
            <h3>Local Expertise</h3>
            <p>Guided by people who know the country best.</p>
          </div>

          <div className="feature">
            <img
              src="https://img.icons8.com/ios-filled/100/camera.png"
              alt="camera"
            />
            <h3>Unique Experiences</h3>
            <p>Carefully planned tours and activities.</p>
          </div>

          <div className="feature">
            <img
              src="https://img.icons8.com/ios-filled/100/handshake.png"
              alt="handshake"
            />
            <h3>Personal Touch</h3>
            <p>Small groups and personal attention.</p>
          </div>

        </div>

      </div>

      {/* Footer */}
      <footer>
        <p>© 2026 Connection Travel | All Rights Reserved</p>
      </footer>

    </div>
  );
};

export default AboutUs;
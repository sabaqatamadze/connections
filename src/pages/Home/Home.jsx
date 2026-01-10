import React from "react";
import "./Home.css";
import picture from "../../pic/picture1.jpg";
import { Link } from "react-router-dom";


function Home() {
  return (
    <div className="Main">
      <img src={picture} alt="hero" className="bg-img" />

      <div className="content">
        <h1 className="hero-text">Your Dream Vacation Awaits</h1>
        <p className="small-text">Explore the World with us.</p>
      </div>
      <div className="bottom-context">
        <Link to="/packages" className="Buy">Buy now</Link>

      </div>


    </div>
  );
}

export default Home;

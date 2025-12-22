import React from "react";
import "./Home.css";
import picture from "../../pic/picture1.jpg";

function Home() {
  return (
    <div className="Main">
      <img src={picture} alt="hero" className="bg-img" />
    </div>
  );
}

export default Home;

import React from "react";
import "./Home.css";
import { Link } from "react-router-dom";


function Home() {
  return (
    <div className="Main">
      <div className="overlay">
        <img src="https://res.cloudinary.com/djont7dcv/image/upload/v1769357451/picture1_ctqtuc.jpg" alt="hero" className="bg-img" />
      <div className="content">
        <h1 className="hero-text">Your Dream Vacation Awaits</h1>
        <p className="small-text">Explore the World with us.</p>
      </div>
      <div className="bottom-context">
        <Link to="/packages" className="Buy">Buy now</Link>
      </div>
    </div>
    <div className="secend-layer">
       <img src="https://res.cloudinary.com/djont7dcv/image/upload/v1769357451/picture1_ctqtuc.jpg" alt="hero" className="sec-img" />

       <div className="sec-content">
        <h1 className="title">Popular Destinations</h1>

        <div className="Destinations">
          <div className="Destination">
          <div className="img-container">
            <img src="https://as1.ftcdn.net/v2/jpg/03/06/44/08/1000_F_306440823_67e7Z1SoBTcH0eHFCOxdktXlhf6znmdj.jpg" alt="hero" className="img" />
          </div>
              <div className="Destination-content">
                <div className="text-container">
                  <h2 className="name">Venice</h2>
                  <p className="text">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                </div>
                
                <p className="price">$201</p>
              </div>
          </div>
          <div className="Destination">
          <div className="img-container">
            <img src="https://as1.ftcdn.net/v2/jpg/03/06/44/08/1000_F_306440823_67e7Z1SoBTcH0eHFCOxdktXlhf6znmdj.jpg" alt="hero" className="img" />
          </div>
              <div className="Destination-content">
                <div className="text-container">
                  <h2 className="name">Venice</h2>
                  <p className="text">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                </div>
                
                <p className="price">$201</p>
              </div>
          </div>
          <div className="Destination">
          <div className="img-container">
            <img src="https://as1.ftcdn.net/v2/jpg/03/06/44/08/1000_F_306440823_67e7Z1SoBTcH0eHFCOxdktXlhf6znmdj.jpg" alt="hero" className="img" />
          </div>
              <div className="Destination-content">
                <div className="text-container">
                  <h2 className="name">Venice</h2>
                  <p className="text">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                </div>
                
                <p className="price">$201</p>
              </div>
          </div>
          <div className="Destination">
          <div className="img-container">
            <img src="https://as1.ftcdn.net/v2/jpg/03/06/44/08/1000_F_306440823_67e7Z1SoBTcH0eHFCOxdktXlhf6znmdj.jpg" alt="hero" className="img" />
          </div>
              <div className="Destination-content">
                <div className="text-container">
                  <h2 className="name">Venice</h2>
                  <p className="text">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                </div>
                
                <p className="price">$201</p>
              </div>
          </div>
          
          
        </div>

       </div>


    </div>
      

      


    </div>
  );
}

export default Home;

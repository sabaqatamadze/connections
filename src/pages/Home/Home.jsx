import React from "react";
import "./Home.css";
import ReactPlayer from "react-player";
import { Link } from "react-router-dom";
import { LuCrown } from "react-icons/lu";
import { FaCompassDrafting } from "react-icons/fa6";
import { TbPlaystationTriangle } from "react-icons/tb";

function Home() {  
  return (
    <div className="Main">
      {/* first layer */}
      <div className="first-layer">
        <img
          src="https://res.cloudinary.com/djont7dcv/image/upload/v1772880101/manoj-sai-ram-413qG1ucR7c-unsplash_zohhoe.jpg"
          alt="hero"
          className="background"
        />
        <div className="content">
          <h1 className="hero-text">Your Dream Vacation Awaits</h1>
          <p className="small-text">Explore the World with us.</p>
        </div>
        <div className="bottom-context">
          <Link to="/packages" className="Buy">
            Plan your trip
          </Link>
        </div>
      </div>

      {/* second layer */}

      <div className="second-layer">
        <img
          src="https://res.cloudinary.com/djont7dcv/image/upload/v1772880101/manoj-sai-ram-413qG1ucR7c-unsplash_zohhoe.jpg"
          alt="hero"
          className="background"
        />

        <div className="sec-content">
          <h1 className="title">Popular Destinations</h1>

          <div className="Destinations">
            <div className="Destination">
              <div className="img-container">
                <img
                  src="https://res.cloudinary.com/djont7dcv/image/upload/v1775839258/View_of_Tbilisi_from_Tabori_Church_2023-10-08-2_e3fuos.jpg"
                  alt="hero"
                  className="img"
                />
              </div>
              <div className="Destination-content">
                <div className="text-container">
                  <h2 className="name">Tbilisi</h2>
                  <p className="text">
                    The capital of Georgia famous for its colorful Old Town, historic sulfur baths, and vibrant culture.
                  </p>
                </div>

              </div>
            </div>
            <div className="Destination">
              <div className="img-container">
                <img
                  src="https://res.cloudinary.com/djont7dcv/image/upload/v1775840039/Batumi_Boulevard_Colonnades__cropped_hfgotg.jpg"
                  alt="hero"
                  className="img"
                />
              </div>
              <div className="Destination-content">
                <div className="text-container">
                  <h2 className="name">Batumi</h2>
                  <p className="text">
                    A modern Black Sea resort city known for its beaches, seaside boulevard, and unique architecture.
                  </p>
                </div>

              </div>
            </div>
            <div className="Destination">
              <div className="img-container">
                <img
                  src="https://res.cloudinary.com/djont7dcv/image/upload/v1775839894/Stepantsminda-Kazbegi_s1wk3t.jpg"
                  alt="hero"
                  className="img"
                />
              </div>
              <div className="Destination-content">
                <div className="text-container">
                  <h2 className="name">Kazbegi</h2>
                  <p className="text">
                    A breathtaking mountain destination home to the iconic Gergeti Trinity Church and stunning Caucasus views.
                  </p>
                </div>
              </div>
            </div>
            <div className="Destination">
              <div className="img-container">
                <img
                  src="https://res.cloudinary.com/djont7dcv/image/upload/v1775840008/Ushguli_Svaneti_Georgia_jz3qub.jpg"
                  alt="hero"
                  className="img"
                />
              </div>
              <div className="Destination-content">
                <div className="text-container">
                  <h2 className="name">Svaneti</h2>
                  <p className="text">
                    A historic mountain region known for medieval stone towers, dramatic landscapes, and ancient culture.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* third layer */}

      <div className="third-layer">
        <iframe
      width="100%"
      src="https://www.youtube.com/embed/KAQUhK0-GJc"
      frameBorder="0"
     ></iframe>
      </div>

      {/* fourth layer */}

      <div className="fourth-layer">
        <img
          src="https://res.cloudinary.com/djont7dcv/image/upload/v1772880101/manoj-sai-ram-413qG1ucR7c-unsplash_zohhoe.jpg"
          alt="background"
          className="background"
        />

        <div className="fourth-content">
          <h1 className="title">Why Us?</h1>
          <div className="features">
            <div className="box">
              <p
                className="icon"
                style={{
                  transform: "rotate(180deg)",}}
              >
                <TbPlaystationTriangle />
              </p>
              <h1 className="servise">GUARANTEE</h1>
              <p className="text">
                We ensure safe, reliable, and high-quality travel experiences. 
              </p>
            </div>
            <div className="box">
              <p 
              className="icon">
                <LuCrown />
              </p>
              <h1 className="servise">SERVISE</h1>
              <p className="text">
                Our dedicated team provides personalized support from planning to the end of your trip.
              </p>
            </div>
            <div className="box">
              <p className="icon">
                <FaCompassDrafting />
              </p>
              <h1 className="servise">EXPERIENCE</h1>
              <p className="text">
                With years of travel expertise, we know how to create unforgettable journeys.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* fifth layer */}

      <div className="fifth-layer">
        <img
          src="https://res.cloudinary.com/djont7dcv/image/upload/v1772880101/manoj-sai-ram-413qG1ucR7c-unsplash_zohhoe.jpg"
          alt="hero"
          className="background"
        />

        <div className="fifth-content">
          <h1 className="title">Have an Adventure Today</h1>

          <div className="Adventures">
            <div className="Main-Adventure">
              <div className="img-container">
                <img
                  src="https://res.cloudinary.com/djont7dcv/image/upload/v1775841402/batumi-sea-coast_eifxkv.webp"
                  alt="hero"
                  className="img"
                />
              </div>
              <div className="Main-Adventure-content">
                <div className="text-container">
                  <h2 className="name">Black Sea Cruise (Batumi)</h2>
                  <p className="text">
                    Relax on the Black Sea while enjoying coastal views, sunset skies, and fresh sea air in Batumi.
                  </p>
                </div>
              </div>
            </div>

            <div className="Adventure-container">
              <div className="Adventure">
                <div className="img-container">
                  <img
                    src="https://res.cloudinary.com/djont7dcv/image/upload/v1772879291/1000_F_229409051_NdhLXjpaBBvEifkeitbJjUvY822Xo8M1_xtxdon.jpg"
                    alt="hero"
                    className="img"
                  />
                </div>
                <div className="Adventure-content">
                  <div className="text-container">
                    <h2 className="name">Sailing</h2>
                    <p className="text">
                      Experience the freedom of the open water while sailing across clear seas and feeling the fresh ocean breeze.
                    </p>
                  </div> 
                </div>
              </div>

              <div className="Adventure">
                <div className="img-container">
                  <img
                    src="https://res.cloudinary.com/djont7dcv/image/upload/v1775841215/ed_vkgrpa.jpg"
                    alt="hero"
                    className="img"
                  />
                </div>
                <div className="Adventure-content">
                  <div className="text-container">
                    <h2 className="name">Wine & Nature Camping (Kakheti)</h2>
                    <p className="text">
                      Spend peaceful nights in Georgia’s wine region surrounded by vineyards, hills, bonfires, and calm nature.
                    </p>
                  </div>
                </div>
              </div>

              <div className="Adventure">
                <div className="img-container">
                  <img
                    src="https://res.cloudinary.com/djont7dcv/image/upload/v1772879459/Travel-Insurance-Plan-banner_clx5j0.jpg"
                    alt="hero"
                    className="img"
                  />
                </div>
                <div className="Adventure-content">
                  <div className="text-container">
                    <h2 className="name">Hiking </h2>
                    <p className="text">
                      Explore breathtaking trails and mountains while enjoying nature, adventure, and unforgettable views.
                    </p>
                  </div>
                </div>
              </div>

              <div className="Adventure">
                <div className="img-container">
                  <img
                    src="https://res.cloudinary.com/djont7dcv/image/upload/v1775841315/borjomi-sulfur-pools-3_tvkmd1.webp"
                    alt="hero"
                    className="img"
                  />
                </div>
                <div className="Adventure-content">
                  <div className="text-container">
                    <h2 className="name">Hot Springs Experience (Borjomi)</h2>
                    <p className="text">                      
                      Relax in natural mineral hot springs surrounded by forests and mountains-perfect for recovery and peace.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
    </div>
  );
}

export default Home;

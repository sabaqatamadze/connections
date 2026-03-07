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
          src="https://res.cloudinary.com/djont7dcv/image/upload/v1769357451/picture1_ctqtuc.jpg"
          alt="hero"
          className="first-img"
        />
        <div className="content">
          <h1 className="hero-text">Your Dream Vacation Awaits</h1>
          <p className="small-text">Explore the World with us.</p>
        </div>
        <div className="bottom-context">
          <Link to="/packages" className="Buy">
            Buy now
          </Link>
        </div>
      </div>

      {/* second layer */}

      <div className="secend-layer">
        <img
          src="https://res.cloudinary.com/djont7dcv/image/upload/v1769357451/picture1_ctqtuc.jpg"
          alt="hero"
          className="sec-img"
        />

        <div className="sec-content">
          <h1 className="title">Popular Destinations</h1>

          <div className="Destinations">
            <div className="Destination">
              <div className="img-container">
                <img
                  src="https://res.cloudinary.com/djont7dcv/image/upload/v1772878370/cb81d951-7b21-4c45-a407-f6b9d10c429c_damiano-baschiera-hFXZ5cNfkOk-unsplash_pnss82.avif"
                  alt="hero"
                  className="img"
                />
              </div>
              <div className="Destination-content">
                <div className="text-container">
                  <h2 className="name">Venice</h2>
                  <p className="text">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  </p>
                </div>

                <p className="price">$201</p>
              </div>
            </div>
            <div className="Destination">
              <div className="img-container">
                <img
                  src="https://res.cloudinary.com/djont7dcv/image/upload/v1772878811/Maldives-1170x650_iomcgt.jpg"
                  alt="hero"
                  className="img"
                />
              </div>
              <div className="Destination-content">
                <div className="text-container">
                  <h2 className="name">San Paolo</h2>
                  <p className="text">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  </p>
                </div>

                <p className="price">$249</p>
              </div>
            </div>
            <div className="Destination">
              <div className="img-container">
                <img
                  src="https://res.cloudinary.com/djont7dcv/image/upload/v1772878886/4-2023-12-05T140951.795_xxvrc9.jpg"
                  alt="hero"
                  className="img"
                />
              </div>
              <div className="Destination-content">
                <div className="text-container">
                  <h2 className="name">Barbados</h2>
                  <p className="text">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  </p>
                </div>

                <p className="price">$299</p>
              </div>
            </div>
            <div className="Destination">
              <div className="img-container">
                <img
                  src="https://res.cloudinary.com/djont7dcv/image/upload/v1772879032/johnny-africa-_ZX0S27D3fw-unsplash-scaled_yb7shl.webp"
                  alt="hero"
                  className="img"
                />
              </div>
              <div className="Destination-content">
                <div className="text-container">
                  <h2 className="name">Cyprus</h2>
                  <p className="text">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  </p>
                </div>

                <p className="price">$239</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* third layer */}

      <div className="third-layer">
        <ReactPlayer
          url="https://www.youtube.com/watch?v=KAQUhK0-GJc"
          controls={true}
          width="100%"
          height="100%"
        />
      </div>

      {/* fourth layer */}

      <div className="fourth-layer">
        <img
          src="https://res.cloudinary.com/djont7dcv/image/upload/v1769357451/picture1_ctqtuc.jpg"
          alt="background"
          className="fourth-img"
        />

        <div className="fourth-content">
          <h1 className="title">Why Us?</h1>
          <div className="features">
            <div className="box">
              <p
                className="icon"
                style={{
                  transform: "rotate(180deg)",
                  fontSize: "28px",
                  marginTop: "20px",
                }}
              >
                <TbPlaystationTriangle />
              </p>
              <h1 className="servise">GUARANTEE</h1>
              <p className="text">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </p>
            </div>
            <div className="box">
              <p className="icon">
                <LuCrown />
              </p>
              <h1 className="servise">SERVISE</h1>
              <p className="text">
                Nunc vulputate libero et velit interdum, ac aliquet odio.
              </p>
            </div>
            <div className="box">
              <p className="icon">
                <FaCompassDrafting />
              </p>
              <h1 className="servise">EXPERIENCE</h1>
              <p className="text">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* fifth layer */}

      <div className="fifth-layer">
        <img
          src="https://res.cloudinary.com/djont7dcv/image/upload/v1769357451/picture1_ctqtuc.jpg"
          alt="hero"
          className="fifth-img"
        />

        <div className="fifth-content">
          <h1 className="title">Have an Adventure Today</h1>

          <div className="Adventures">
            <div className="Main-Adventure">
              <div className="img-container">
                <img
                  src="https://res.cloudinary.com/djont7dcv/image/upload/v1772878370/cb81d951-7b21-4c45-a407-f6b9d10c429c_damiano-baschiera-hFXZ5cNfkOk-unsplash_pnss82.avif"
                  alt="hero"
                  className="img"
                />
              </div>
              <div className="Main-Adventure-content">
                <div className="text-container">
                  <h2 className="name">Canal Cruise</h2>
                  <p className="text">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Nunc vulputate libero et velit
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
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Nunc vulputate libero et velit
                    </p>
                  </div>
                </div>
              </div>

              <div className="Adventure">
                <div className="img-container">
                  <img
                    src="https://res.cloudinary.com/djont7dcv/image/upload/v1772879369/MUFHH_250620_exidxc.jpg"
                    alt="hero"
                    className="img"
                  />
                </div>
                <div className="Adventure-content">
                  <div className="text-container">
                    <h2 className="name">Camping</h2>
                    <p className="text">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Nunc vulputate libero et velit
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
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Nunc vulputate libero et velit
                    </p>
                  </div>
                </div>
              </div>

              <div className="Adventure">
                <div className="img-container">
                  <img
                    src="https://res.cloudinary.com/djont7dcv/image/upload/v1772879516/best-scuba-diving-in-fiji-2-scaled_ya7c71.jpg"
                    alt="hero"
                    className="img"
                  />
                </div>
                <div className="Adventure-content">
                  <div className="text-container">
                    <h2 className="name">Scuba Diving</h2>
                    <p className="text">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Nunc vulputate libero et velit
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

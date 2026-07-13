import React from 'react';
import './AboutUs.css';

const App = () => {
  return (
    <div className="app-container">
      

      {/* Hero Section */}
      <header className="hero-section">
        <div className="hero-overlay">
          <h1 className="hero-title">About Us</h1>
          <p className="hero-subtitle">Discover the Heart of Our Country</p>
        </div>
      </header>

      {/* Main Content */}
      <main className="main-content">
        
        {/* Who We Are Section */}
        <section className="content-section">
          <div className="text-column">
            <div className="section-header">
              <h2>Who We Are</h2>
            </div>
            <p>
              At <strong>Connection</strong>, we believe that the best way to experience 
              a country is to truly connect with its people, culture and 
              landscapes. We are passionate travelers and local experts 
              dedicated to showing you the hidden gems and authentic 
              beauty of our homeland.
            </p>
          </div>
          <div className="image-column">
            <img 
              src="https://images.unsplash.com/photo-1539635278303-d4002c07eae3?auto=format&fit=crop&q=80&w=800" 
              alt="Tour guide smiling with travelers" 
              className="polaroid-image"
            />
          </div>
        </section>

        {/* What We Do Section */}
        <section className="content-section reverse-layout">
          <div className="image-column">
            <img 
              src="https://images.unsplash.com/photo-1433086966358-54859d0ed716?auto=format&fit=crop&q=80&w=800" 
              alt="People on a boat near a waterfall" 
              className="polaroid-image"
            />
          </div>
          <div className="text-column">
            <div className="section-header">
              <h2>What We Do</h2>
            </div>
            <p>
              We offer immersive tours that take you beyond the typical tourist spots. 
              From breathtaking mountains and serene lakes to vibrant villages 
              and historical landmarks, we provide experiences that let you live the 
              real culture and spirit of our country.
            </p>
            <p>
              Whether it's hiking, exploring local markets, or sharing a meal with a local family, 
              we ensure your adventure is filled with genuine connections and 
              memorable moments.
            </p>
          </div>
        </section>

        {/* Why Travel With Us Section */}
        <section className="content-section why-travel-section">
          <div className="text-column features-column">
            <div className="section-header">
              <h2>Why Travel With Us?</h2>
            </div>
            
            <div className="features-grid">
              {/* Feature 1 */}
              <div className="feature-item">
                <div className="feature-icon bg-green">
                  <svg width="40" height="40" viewBox="0 0 24 24" fill="white" xmlns="http://www.w3.org/2000/svg">
                    <path d="M9 3L3 6V21L9 18M9 3L15 6M9 3V18M15 6L21 3V18L15 21M15 6V21M9 18L15 21" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <h3>Local Expertise</h3>
                <p>Guided by locals who know the true essence of our land.</p>
              </div>

              {/* Feature 2 */}
              <div className="feature-item">
                <div className="feature-icon bg-blue">
                  <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z"></path>
                    <circle cx="12" cy="13" r="4"></circle>
                  </svg>
                </div>
                <h3>Unique Experiences</h3>
                <p>Custom tours that showcase the best of our country.</p>
              </div>

              {/* Feature 3 */}
              <div className="feature-item">
                <div className="feature-icon bg-green">
                  <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M20.42 4.58a5.4 5.4 0 0 0-7.65 0l-.77.78-.77-.78a5.4 5.4 0 0 0-7.65 0C1.46 6.7 1.33 10.28 4 13l8 8 8-8c2.67-2.72 2.54-6.3.42-8.42z"></path>
                  </svg>
                </div>
                <h3>Personal Touch</h3>
                <p>Small groups and personalized service for a more intimate journey.</p>
              </div>
            </div>
          </div>
          
          <div className="image-column">
            <img 
              src="https://res.cloudinary.com/djont7dcv/image/upload/v1783967804/images_z8euq8.jpg" 
              alt="Group of people sharing a meal outdoors" 
              className="polaroid-image wide-image"
            />
          </div>
        </section>

      </main>

      <footer>
      </footer>


    </div>
  );
};

export default App;
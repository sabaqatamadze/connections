import React from 'react'
import "./Package.css";

function Package() {
  return (
    <div className="pricing-container">
      <div className="pricing-cards-wrapper">
        <div className="pricing-card theme-blue">
          <div className="card-icon">
            {/* Your Icon Here */}
          </div>

          <h2 className="card-title">{title}</h2>

          <ul className="card-features">

            {features.map((item, index) => (
              <li key={index}>
                {item.name}
              </li>
            ))}
          </ul>

          <button className="card-button">{footerText}</button>
        </div>
      </div>
    </div>
  )
}

export default Package
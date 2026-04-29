import React from 'react';
import "./PackageCart.css";
import { Link } from 'react-router-dom';

function PackageCart({ id, title, description, features}) {
  return (
    <div className="mainPart">
    <div className="pricing-card">
      <div className="card-header">
        <h2 className="card-title">{title}</h2>
        <p className="card-description">{description}</p>
      </div>

      <ul className="card-features">
        {features?.map((item, index) => (
          <li key={index} className="feature-item">
            {item.name}
          </li>
        ))}
      </ul>

      <div className="card-footer">
        <Link to="/package" className="card-button">
          Contact now
        </Link>
      </div>
    </div>
    </div>
  );
}

export default PackageCart;
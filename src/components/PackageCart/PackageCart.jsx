import React from 'react';
import "./PackageCart.css";

function PackageCart({ id, title, price, description, features}) {
  return (
    <div className="mainPart">
    <div className="pricing-card">
      <div className="card-header">
        <h2 className="card-title">{title}</h2>
        <div className="card-price">{price}</div>
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
        <a href={`/package/${id}`} className="card-button">
          Contact now
        </a>
      </div>
    </div>
    </div>
  );
}

export default PackageCart;
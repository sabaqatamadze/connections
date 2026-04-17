import React from 'react'
import "./PackageCart.css";

function PackageCart(id, title, description, features , footer) {
  return (
    <div className="pricing-container">
      <div className="pricing-cards-wrapper">
        <div className="pricing-card theme-blue">
          <div className="card-icon">
            {/* Your Icon Here */}
          </div>


          <h2 className="card-title">{title}</h2>

          <p className='card-text'>{description}</p>



          <ul className="card-features">
            {features?.map((item, index) => (
              <li key={index}>{item.name}</li>
            ))}
          </ul>

          <Link to={`/product/${id}`} className="card-button">Contact now</Link>
        </div>
      </div>
    </div>
  )
}

export default PackageCart
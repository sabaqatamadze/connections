import React from 'react'
import './Footer.css'
import { Link } from 'react-router-dom'

function Footer() {
  return (
    <div className='Footer'>
      <div className="Pages">
        <Link to="/">Home</Link>
        <Link to="/Packages">Packages</Link>
        <Link to="/about">About us</Link>
        <Link to="/contact">Contact</Link>
      </div>

      <div className='text'>
        <p>© 2026 Travel Agency. All rights reserved.</p>
      </div>
    </div>
  )
}

export default Footer
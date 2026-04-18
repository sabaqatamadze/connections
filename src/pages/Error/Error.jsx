import React from 'react'
import "./Error.css";
import { Link } from 'react-router-dom';

function Error() {
  return (
    <div className="main">
    <div className="error">
      <div className="link">
      </div>
      <div className="text">
        <p className="not-found">404 Not Found</p>
        <p className="back-to-home">
          Your visited page not found. You may go home page.
        </p>

        <Link to={"/"} className="back-home-page">
          Back to home page
        </Link>
      </div>
    </div>
    </div>
  )
}

export default Error
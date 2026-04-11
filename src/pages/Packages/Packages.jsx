import React from 'react'
import "./Packages.css";
import Package_layout from './Package-layout/Package_layout';

function Packages() {
  return (
    <div className='Packages'>
      <img src="https://res.cloudinary.com/djont7dcv/image/upload/v1772880101/manoj-sai-ram-413qG1ucR7c-unsplash_zohhoe.jpg" alt="hero" className="bg-img" />
      <div>
        <Package_layout/>
      </div>
    </div>
  )
}

export default Packages
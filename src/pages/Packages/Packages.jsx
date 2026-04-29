import React from 'react'
import "./Packages.css";
import PackageLayout from './PackageLayout/PackageLayout';

function Packages() {
  return (
    <div className='Packages'>
      <img src="https://res.cloudinary.com/djont7dcv/image/upload/v1772880101/manoj-sai-ram-413qG1ucR7c-unsplash_zohhoe.jpg" alt="hero" className="bg-img" />
      <div>
        <PackageLayout className="package-layout"/>
      </div>
    </div>
  )
}

export default Packages
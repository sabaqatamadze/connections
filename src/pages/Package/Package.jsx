import React, { useEffect, useState } from "react";
import "./Package.css";
import { getSinglePackage } from "../../helper/helper";
import { useParams } from "react-router-dom";


function Package() {
  const { package_id } = useParams();
  const [packageData, setPackageData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(true);

    getSinglePackage(package_id)
      .then((resp) => setPackageData(resp))
      .finally(() => setIsLoading(false));
  }, [package_id]);

  if (isLoading) return <h1>Loading...</h1>;
  if (!packageData) return <h1>Package not found</h1>;

  return (
    <div className="package">
      <img
        src="https://res.cloudinary.com/djont7dcv/image/upload/v1769357451/picture1_ctqtuc.jpg"
        alt="hero"
        className="bg-img"
      />
      <h3>{packageData.title}</h3>
      <p>{packageData.description}</p>
      <p>${packageData.price}</p>
    </div>
  );
}

export default Package;



 

 




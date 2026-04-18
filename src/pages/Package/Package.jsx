import React, { useEffect, useState } from "react";
import "./Package.css";
import { getProduct  } from "../../helper/helper";
import { useParams } from "react-router-dom";


function Package() {
  const { package_id } = useParams();
  const [packageData, setPackageData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(true);

    getProduct (package_id)
      .then((resp) => setPackageData(resp))
      .finally(() => setIsLoading(false));
  }, [package_id]);

  if (isLoading) return <h1>Loading...</h1>;
  if (!packageData) return <h1>Package not found</h1>;

  return (
    <div className="package">
      <div className="package-container">
          <h3>{packageData.title}</h3>
      <p>{packageData.description}</p>
      <ul className="card-features">
        {packageData.features?.map((item, index) => (
          <li key={index} className="feature-item">
            {item.name}
          </li>
        ))}
      </ul>
      </div>
    </div>
  );
}

export default Package;



 

 




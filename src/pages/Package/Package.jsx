import React, { useEffect, useState } from "react";
import { getSinglePackage } from "../../helper/helper";
import { useParams } from "react-router-dom";

function Package() {
  const { package_id } = useParams();
  const [packageData, setpackageData] = useState();
  const [isLoading, setIsLoading] = useState(true);

   useEffect(() => {
    getSinglePackage(package_id)
      .then((resp) => setpackageData(resp))
      .finally(() => setIsLoading(false));
  }, []);
  if (isLoading) {
    return <h1>Loading...</h1>;
  }

  return (
    <div>
      <h3>{packageData.title}</h3>
      <p>{packageData.description}</p>
      <p>${packageData.price}</p>
    </div>
  );
};
  

export default Package


 

 




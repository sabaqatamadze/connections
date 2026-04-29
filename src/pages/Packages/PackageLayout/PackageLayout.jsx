import React, { useState, useEffect } from "react";
import PackageCart from "../../../components/PackageCart/PackageCart";
import { getProducts } from "../../../helper/helper";
import ProductsLayout from "../../../layout/ProductsLayout/ProductsLayout";

const PackageLayout = () => {
  const [products, setProducts] = useState();

  useEffect(() => {
    getProducts().then((resp) => setProducts(resp));
  }, []);

  return (
    <>
      {products?.length === 0 ? (
        <h1>There are no any products</h1>
      ) : products === undefined ? (
        <h1>Loading...</h1>
      ) : (
        <ProductsLayout>
          {products.map((el) => (
            <PackageCart
              key={el._id}
              id={el._id}
              title={el.title}
              description={el.description}
              features={el.features}
            />
          ))}
        </ProductsLayout>
      )}
    </>
  );
};

export default PackageLayout;

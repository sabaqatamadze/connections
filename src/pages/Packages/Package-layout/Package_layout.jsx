import React, { useState, useEffect } from "react";
import { getProducts } from "../../../helper/helper";
import ProductsLayout from "../../../layout/ProductsLayout/ProductsLayout";
import PackageCart from "../../../components/PackageCart/PackageCart";

const Package_layout= () => {
  const [products, setProducts] = useState();

  useEffect(() => {
    getProducts(0, 8).then((resp) => setProducts(resp.products));
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
              key={el.id}
              id={el.id}
              title={el.title}
              description={id.description}
              features={id.features}
            />
          ))}
        </ProductsLayout>
      )}
    </>
  );
};

export default Package_layout;
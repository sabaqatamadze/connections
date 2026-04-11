import React from "react";
import "./ProductsLayout.css";
const ProductsLayout = ({  children }) => {
  return (
    <div className="products-layout">
      <div className="products-container">{children}</div>
    </div>
  );
};

export default ProductsLayout;

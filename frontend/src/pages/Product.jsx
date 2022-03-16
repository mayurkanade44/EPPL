import React from "react";
import { ProductsList } from "../components";

const Product = () => {
  return (
    <div>
      <h1 className="text-center mt-3">Products</h1>
      <div className="heading-underline" />
      <ProductsList />
    </div>
  );
};

export default Product;

import React from "react";
import { Products, ProductsCarousal } from "../components";

const Product = () => {
  return (
    <div>
      <h1 className="text-center mt-3">Products</h1>
      
      <Products />
      <ProductsCarousal />
    </div>
  );
};

export default Product;

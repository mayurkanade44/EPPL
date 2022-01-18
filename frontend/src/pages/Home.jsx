import React from "react";
import { Carousel, ServiceHome, TestAnmi } from "../components";

export const Home = () => {
  return (
    <div>
      <Carousel />
      <h1 className="text-center mt-4">Services</h1>
      <ServiceHome />
      <TestAnmi />
      <ServiceHome />
    </div>
  );
};

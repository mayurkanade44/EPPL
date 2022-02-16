import React from "react";
import "./BusinessCarousel.css";
import { Link } from "react-router-dom";
import { useDataContext } from "../context/data_context";

const BusinessCarousel = () => {
  const { business } = useDataContext();
  return (
    <div className="carousel-background">
      <h1 className="text-center pt-4">Our Business</h1>
      <div className="heading-underline" />
      <div className="carousel-parent position-relative">
        <div className="gallery">
          {business.map((item, index) => {
            return (
              <span style={{ "--i": index }} key={item.id}>
                <div className="test">
                  <Link to={`/business/${item.id}`}>
                    <img className="caro-img" src={item.img} alt="" />
                    <h5 className="text-center">{item.name}</h5>
                  </Link>
                </div>
              </span>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default BusinessCarousel;

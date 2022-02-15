import React from "react";
import "./carousel.css";
import { Link } from "react-router-dom";
import { useDataContext } from "../context/data_context";

const ProductsCarousal = () => {
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
                  <Link to="/business">
                    <img className="caro-img" src={item.img} alt="" />
                    <h5 className="text-center">{item.name}</h5>
                  </Link>
                </div>
              </span>
            );
          })}

          {/* <span style={{ "--i": 2 }}>
            <img className="caro-img" src={p2} alt="" />
          </span>
          <span style={{ "--i": 3 }}>
            <img className="caro-img" src={p3} alt="" />
          </span>
          <span style={{ "--i": 4 }}>
            <img className="caro-img" src={p4} alt="" />
          </span>
          <span style={{ "--i": 5 }}>
            <img className="caro-img" src={p5} alt="" />
          </span>
          <span style={{ "--i": 6 }}>
            <img className="caro-img" src={p6} alt="" />
          </span> */}
        </div>
      </div>
    </div>
  );
};

export default ProductsCarousal;

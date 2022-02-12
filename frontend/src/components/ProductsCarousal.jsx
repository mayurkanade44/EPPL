import React from "react";
import "./carousel.css";
import p1 from "../images/facebook.png";
import p2 from "../images/instagram.png";
import p3 from "../images/linkedin.png";
import p4 from "../images/projects.png";
import p5 from "../images/whatsapp.png";
import p6 from "../images/50.png";

const ProductsCarousal = () => {
  return (
    <div className="carousel-background">
      <h1 className="text-center pt-4">Other Products</h1>
      <div className="heading-underline" />
      <div className="carousel-parent position-relative">
        <div className="gallery">
          <span style={{ "--i": 1 }}>
            <img className="caro-img" src={p1} alt="" />
          </span>
          <span style={{ "--i": 2 }}>
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
          </span>
        </div>
      </div>
    </div>
  );
};

export default ProductsCarousal;

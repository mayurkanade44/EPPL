import React from "react";
import { carousel } from "../context/data";
import c1 from "../images/c1.jpg";
import c2 from "../images/c2.jpg";

export const Carousel = () => {
  return (
    <div
      id="carouselExampleControls"
      className="carousel slide"
      data-bs-ride="carousel"
    >
      <div className="carousel-inner">
        <div className="carousel-item active">
          <img
            src={c1}
            className="d-block w-100"
            style={{ height: 500 }}
            alt="img"
            >
            </img>
        </div>
        <div className="carousel-item">
          <img
            src={c2}
            className="d-block w-100"
            style={{ height: 500 }}
            alt="img"
          />
        </div>
      </div>
      <button
        className="carousel-control-prev"
        type="button"
        data-bs-target="#carouselExampleControls"
        data-bs-slide="prev"
      >
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button
        className="carousel-control-next"
        type="button"
        data-bs-target="#carouselExampleControls"
        data-bs-slide="next"
      >
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>
  );
};

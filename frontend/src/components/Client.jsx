import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Client = () => {
  const settings = {
    
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 1000,
    cssEase: "linear",
  };
  return (
    <div className="container">
      <div>
        <h2 className="text-center pt-2">Happy Clients</h2>
        <div className="heading-underline"></div>
        <Slider {...settings}>
          <div>
            <h3>Lodha</h3>
          </div>
          <div>
            <h3>TATA</h3>
          </div>
          <div>
            <h3>Aditya Birla</h3>
          </div>
          <div>
            <h3>Apollo</h3>
          </div>
          <div>
            <h3>Piramal</h3>
          </div>
          <div>
            <h3>L&amp;T</h3>
          </div>
        </Slider>
      </div>
    </div>
  );
};

export default Client;

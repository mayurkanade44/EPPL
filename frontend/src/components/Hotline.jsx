import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Hotline = () => {
  var settings = {
    infinite: true,
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: true,
    speed: 4000,
    arrows: false,
    autoplaySpeed: 1000,
    cssEase: "linear",
    pauseOnHover: false,
  };
  return (
    <div className="bg-dark">
      <Slider {...settings}>
        <div className="hotline">Call Us - 922 345 345 0</div>
        <div className="hotline1">Email Us - epcorn@yahoo.in</div>
        <div className="hotline">Call Us - 922 345 345 0</div>
        <div className="hotline1">Email Us - epcorn@yahoo.in</div>
      </Slider>
    </div>
  );
};

export default Hotline;

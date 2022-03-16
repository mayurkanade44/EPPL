import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import telephone from "../images/phoneNav.png";
import email from "../images/emailnav.png";
import whatsapp from "../images/whatsapp1.png"

const Hotline = () => {
  var settings = {
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    speed: 4000,
    arrows: false,
    autoplaySpeed: 5000,
    cssEase: "linear",
    pauseOnHover: false,
  };
  return (
    <div className="bg-dark">
      <Slider {...settings}>
        <div className="text-center">
          <img
            className="d-inline me-1"
            src={telephone}
            style={{ height: 28, paddingBottom: 3 }}
            alt=""
          />
          <div className="d-inline hotline"> 022 6691 4400</div>
        </div>
        <div className="text-center">
          <img
            className="d-inline"
            src={email}
            style={{ height: 28, paddingBottom: 3 }}
            alt=""
          />
          <div className="hotline d-inline"> epcorn@yahoo.in</div>
        </div>
        <div className="text-center">
          <img
            className="d-inline"
            src={whatsapp}
            style={{ height: 28, paddingBottom: 3 }}
            alt=""
          />
          <div className="d-inline hotline"> 922 345 345 0</div>
        </div>
        <div className="text-center">
          <img
            className="d-inline me-1"
            src={telephone}
            style={{ height: 28, paddingBottom: 3 }}
            alt=""
          />
          <div className="d-inline hotline"> 022 6691 4400</div>
        </div>
        <div className="text-center">
          <img
            className="d-inline"
            src={email}
            style={{ height: 28, paddingBottom: 3 }}
            alt=""
          />
          <div className="hotline d-inline"> epcorn@yahoo.in</div>
        </div>
        <div className="text-center">
          <img
            className="d-inline"
            src={whatsapp}
            style={{ height: 28, paddingBottom: 3 }}
            alt=""
          />
          <div className="d-inline hotline"> 922 345 345 0</div>
        </div>
      </Slider>
    </div>
  );
};

export default Hotline;

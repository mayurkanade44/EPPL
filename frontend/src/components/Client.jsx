import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Client = ({ data, rtl }) => {
  const settings = {
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    speed: 2000,
    arrows: false,
    autoplaySpeed: 1000,
    cssEase: "linear",
    rtl: rtl,
  };
  return (
    <div className="container mb-3">
      <Slider {...settings}>
        {data.map((data) => {
          const { id, logo, years } = data;
          return (
            <div key={id}>
              <img
                src={logo}
                alt=""
                className="img-fluid"
                style={{ height: 70 }}
              />
              <h5 className="ms-5">{`${years} years`}</h5>
            </div>
          );
        })}
      </Slider>
    </div>
  );
};

export default Client;

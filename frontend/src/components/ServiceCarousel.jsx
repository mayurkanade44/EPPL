import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const ServiceCarousel = ({ images = [{ url: "" }] }) => {
  const settings = {
    infinite: true,
    speed: 500,
    autoplay: true,
    autoplaySpeed: 3000,
    slidesToShow: 1,
    slidesToScroll: 1,
    pauseOnHover: false,
    arrows: false,
  };
  return (
    <div>
      <Slider {...settings}>
        {images.map((c, index) => {
          return (
            <div key={index}>
              <img
                src={c.url}
                alt=""
                className="w-100 img-fluid"
                style={{ height: 350 }}
              />
            </div>
          );
        })}
      </Slider>
    </div>
  );
};

export default ServiceCarousel;

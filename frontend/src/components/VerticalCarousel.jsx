import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const VerticalCarousel = ({ images = [{ url: "" }] }) => {
  const settings = {
    dots: true,
    infinite: true,
    autoplay: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    vertical: true,
    verticalSwiping: true,
    pauseOnHover: false,
    arrows: false,
    beforeChange: function (currentSlide, nextSlide) {},
    afterChange: function (currentSlide) {},
  };
  return (
    <div>
      <Slider {...settings}>
        {images.map((item, index) => {
          return (
            <div key={index}>
              <img
                src={item.url}
                className="w-100"
                style={{ height: 480 }}
                alt={item.name}
              />
            </div>
          );
        })}
      </Slider>
    </div>
  );
};

export default VerticalCarousel;

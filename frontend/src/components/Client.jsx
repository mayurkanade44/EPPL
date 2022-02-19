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
    pauseOnHover: false,
    rtl: rtl,
  };
  return (
    <div className="container mb-3">
      {rtl ? (
        <Slider {...settings}>
          {data.map((data) => {
            const { id, logo } = data;
            return (
              <div className="row" key={id}>
                <div className="col-lg-8">
                  <img
                    src={logo}
                    alt="name"
                    className="img-fluid"
                    style={{ height: 70 }}
                  />
                </div>
              </div>
            );
          })}
        </Slider>
      ) : (
        <Slider {...settings}>
          {data.map((data) => {
            const { id, name, years, col } = data;
            return (
              <div className="row" key={id}>
                <div className="col-lg-8"></div>
                <div key={id} className="my-4">
                  <h2
                    className="d-inline"
                    style={{ fontFamily: "fantasy", color: "black" }}
                  >{`${name}`}</h2>
                  <h4
                    className="d-inline"
                    style={{ color: col }}
                  >{` ${years} years`}</h4>
                </div>
              </div>
            );
          })}
        </Slider>
      )}
    </div>
  );
};

export default Client;

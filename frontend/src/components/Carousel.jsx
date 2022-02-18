import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { carousel } from "../context/data";

export const Carousel = () => {
  const settings = {
    infinite: true,
    speed: 500,
    autoplay: true,
    fade: true,
    autoplaySpeed: 3000,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <div>
      <Slider {...settings}>
        {carousel.map((c) => {
          return (
            <div key={c.id}>
              <img
                src={c.img}
                alt={c.name}
                className="w-100 img-fluid"
                style={{ height: 550 }}
              />
              <h1 className="carotext">{c.name}</h1>
            </div>
          );
        })}
      </Slider>
    </div>
  );
};

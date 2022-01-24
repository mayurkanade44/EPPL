import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { reviews } from "../context/data";

const Reviews = () => {
  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    autoplay: true,
    slidesToScroll: 3,
    pauseOnHover: false,
  };
  return (
    <div className="container">
      <h2 className="text-center pt-2">Happy Customers</h2>
      <div className="heading-underline" />
      <Slider {...settings} className="">
        {reviews.map((review) => {
          const { id, name, designation, text, image } = review;
          return (
            <div className="card d-flex align-items-center mb-1" key={id}>
              <img src={image} alt={name} className="person-img" />
              <h4>{name}</h4>
              <b className="title">{designation}</b>
              <q className="review-text">{text}</q>
            </div>
          );
        })}
      </Slider>
    </div>
  );
};

export default Reviews;

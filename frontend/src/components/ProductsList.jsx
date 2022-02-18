import React, { useEffect, useState } from "react";
import img3 from "../images/cat-3.jpg";
import { useInView } from "react-intersection-observer";

const ProductsList = () => {
  const { ref, inView } = useInView({
    // triggerOnce: true,
  });
  const [animi, setAnimi] = useState(false);

  useEffect(() => {
    if (inView) {
      setAnimi(true);
    }
    if (!inView) {
      setAnimi(false);
    }
  }, [inView]);

  return (
    <div className="container mt-4">
      <div className="row g-4" ref={ref}>
        <div
          className={`col-lg-4 col-md-6 ${
            animi
              ? "animate__animated animate__fadeInUp"
              : null
          }`}
        >
          <div className="product-item rounded overflow-hidden">
            <div className="position-relative overflow-hidden">
              <a href="">
                <img className="img-fluid" src={img3} alt="" />
              </a>
              <div className="bg-white rounded-top text-primary position-absolute start-0 bottom-0 mx-4 pt-1 px-3">
                Rodin Box 200 ₹
              </div>
            </div>
            <div className="p-4 pb-0">
              <h5 className="text-primary text-center mb-3">Rodin Box</h5>
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Asperiores vo amet consectetur adipisicing elit. Asperiores vo
              </p>
            </div>
          </div>
        </div>
        <div
          className={`col-lg-4 col-md-6  ${
            animi
              ? "animate__animated animate__fadeInUp animate__delay-1s"
              : null
          }`}
        >
          <div className="product-item rounded overflow-hidden">
            <div className="position-relative overflow-hidden">
              <a href="">
                <img className="img-fluid" src={img3} alt="" />
              </a>
              <div className="bg-white rounded-top text-primary position-absolute start-0 bottom-0 mx-4 pt-1 px-3">
                Rodin Box 200 ₹
              </div>
            </div>
            <div className="p-4 pb-0">
              <h5 className="text-primary text-center mb-3">Rodin Box</h5>
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Asperiores vo amet consectetur adipisicing elit. Asperiores vo
              </p>
            </div>
          </div>
        </div>
        <div
          className={`col-lg-4 col-md-6 ${
            animi
              ? "animate__animated animate__fadeInUp animate__delay-2s"
              : null
          }`}
        >
          <div className="product-item rounded overflow-hidden">
            <div className="position-relative overflow-hidden">
              <a href="">
                <img className="img-fluid" src={img3} alt="" />
              </a>
              <div className="bg-white rounded-top text-primary position-absolute start-0 bottom-0 mx-4 pt-1 px-3">
                Rodin Box 200 ₹
              </div>
            </div>
            <div className="p-4 pb-0">
              <h5 className="text-primary text-center mb-3">Rodin Box</h5>
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Asperiores vo amet consectetur adipisicing elit. Asperiores vo
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductsList;

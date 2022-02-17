import React, { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Link } from "react-router-dom";

const ServiceHome = ({ index, id, name, image, description }) => {
  const { ref, inView } = useInView({
    triggerOnce: true,
  });
  const animations = useAnimation();

  useEffect(() => {
    if (inView) {
      animations.start({
        x: "5vw",
        transition: { type: "spring", duration: 1, bounce: 0.3 },
      });
    }
    if (!inView) {
      animations.start({
        x: "-100vw",
      });
    }
    // eslint-disable-next-line
  }, [inView]);

  return (
    <>
      <div ref={ref} className="container my-5">
        <motion.div animate={animations}>
          <h2>{name}</h2>
          <div className="row">
            <div className="col-md-4">
              <Link to={`/services/${id}`}>
                <div className="card service-home-img" style={{ width: 300 }}>
                  <img src={image} className="card-img-top" alt={name} />
                </div>
              </Link>
            </div>
            <div className="col-md-8">
              <h2>{description.substring(0, 150)}...</h2>
              <Link className="btn btn-dark" to={`/services/${id}`}>
                Know More
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </>
  );
};

export default ServiceHome;

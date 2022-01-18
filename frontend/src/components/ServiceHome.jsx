import React, { useEffect } from "react";
import { motion,useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

const ServiceHome = () => {
  const { ref, inView } = useInView({threshold: 0.2});
  const animations = useAnimation();
  const anim = useAnimation();

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
  }, [inView]);

  

  return (
    <>
      <div ref={ref} className="my-5">
        <motion.div animate={animations}>
          <div className="row">
            <div className="col-md-4">
              <div class="card" style={{ width: 200 }}>
                <img src="..." class="card-img-top" alt="..." />
                <div class="card-body">
                  <p class="card-text">
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-8">
              <h2>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Commodi, officia a in odio explicabo voluptas! Quae, consectetur
                voluptatem? Inventore nesciunt unde voluptates asperiores
                impedit quos, autem debitis magni enim quam.
              </h2>
            </div>
          </div>
        </motion.div>
      </div>
    </>
  );
};

export default ServiceHome;

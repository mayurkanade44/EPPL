import React, { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

const TestAnmi = () => {
    const { ref, inView } = useInView({ threshold: 0.2 });
    const anim = useAnimation();

    useEffect(() => {
      if (inView) {
        anim.start({
          x: "80vw",
          transition: { type: "spring", duration: 1, bounce: 0.3 },
        });
      }
      if (!inView) {
        anim.start({
          x: "100vw",
        });
      }
    }, [inView]);
  return (
    <div>
      <div ref={ref}>
        <motion.div animate={anim}>
          <div className="col-md-6">
            <div class="card" style={{ width: 200 }}>
              <img src="..." class="card-img-top" alt="..." />
              <div class="card-body">
                <p class="card-text">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default TestAnmi;

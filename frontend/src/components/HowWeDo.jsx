import React from "react";
import pestguy from "../images/pestguy.png";
import assess from "../images/assess.png";
import plan from "../images/plan.png";
import treatment from "../images/treatment.png";
import review from "../images/review.png";

const HowWeDo = () => {
  return (
    <div className="mt-4">
      <div className="container">
        <div className="row text-center">
          <div className="col-12">
            <h2 className="section-title">We Are Specialists In</h2>
            <h3 className="section-sub-title">How We Do It</h3>
            <div className="heading-underline" />
          </div>
        </div>
        <div className="row mt-2">
          <div className="col-lg-4">
            <div className="ts-service-box d-flex">
              <img src={assess} alt="service-icon" className="service" />
              <div>
                <h3 className="service-box-title">Assessment</h3>
                <p>
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Quidem nisi voluptas architecto, fugiat nemo necessitatibus
                  optio voluptatibus commodi nihil, facilis numquam aliquam
                  explicabo id consequuntur culpa sunt officiis temporibus
                  fugit?
                </p>
              </div>
            </div>
            <div className="ts-service-box d-flex">
              <img src={plan} alt="service-icon" className="service" />
              <div>
                <h3 className="service-box-title">Planing</h3>
                <p>
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Quidem nisi voluptas architecto, fugiat nemo necessitatibus
                  optio voluptatibus commodi nihil, facilis numquam aliquam
                  explicabo id consequuntur culpa sunt officiis temporibus
                  fugit?
                </p>
              </div>
            </div>
          </div>
          <div className="col-lg-4 text-center">
            <img
              loading="lazy"
              className="img-fluid"
              src={pestguy}
              alt="petguy-avater"
            />
          </div>
          <div className="col-lg-4 mt-5 mt-lg-0 mb-4 mb-lg-0">
            <div className="ts-service-box d-flex">
              <img src={treatment} alt="service-icon" className="service" />
              <div>
                <h3 className="service-box-title">Treatment</h3>
                <p>
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Quidem nisi voluptas architecto, fugiat nemo necessitatibus
                  optio voluptatibus commodi nihil, facilis numquam aliquam
                  explicabo id consequuntur culpa sunt officiis temporibus
                  fugit?
                </p>
              </div>
            </div>
            <div className="ts-service-box d-flex">
              <img src={review} alt="service-icon" className="service" />

              <div>
                <h3 className="service-box-title">Review</h3>
                <p>
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Quidem nisi voluptas architecto, fugiat nemo necessitatibus
                  optio voluptatibus commodi nihil, facilis numquam aliquam
                  explicabo id consequuntur culpa sunt officiis temporibus
                  fugit?
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HowWeDo;

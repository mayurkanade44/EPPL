import React, { useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";
import CountUp from "react-countup";
import VisibilitySensor from "react-visibility-sensor";

const Counter = () => {
  const { ref, inView } = useInView();

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-3">
          <CountUp end={50} prefix="+" duration="5">
            {({ countUpRef, start }) => (
              <VisibilitySensor onChange={start} delayedCall>
                <span ref={countUpRef} />
              </VisibilitySensor>
            )}
          </CountUp>
          <h5>Years of experience</h5>
        </div>
      </div>
    </div>
  );
};

export default Counter;

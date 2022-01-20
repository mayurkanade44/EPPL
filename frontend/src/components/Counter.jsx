import React, { useEffect } from "react";
import { useInView } from "react-intersection-observer";
import CountUp from "react-countup";
import VisibilitySensor from "react-visibility-sensor";
import { upcounter } from "../context/data";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUsers } from "@fortawesome/free-solid-svg-icons";

const Counter = () => {
  const { ref, inView } = useInView();

  const updateCount = (start, end) => {};

  return (
    <div className="bg-dark">
      <div className="container">
        <h2 className="text-center p-2">Our Journey So Far</h2>
        <div className="heading-underline"></div>
        <div className="row">
          {upcounter.map((c) => {
            return (
              <div
                className="col-md-3 text-center"
                style={{ height: 250 }}
                key={c.id}
              >
                <div className="pt-3">
                  <img src={c.img} alt="img" style={{ height: 100 }} />
                </div>
                <CountUp end={c.count} suffix="+" duration="3">
                  {({ countUpRef, start }) => (
                    <VisibilitySensor onChange={start}>
                      <span
                        style={{ color: "red", fontSize: 50 }}
                        ref={countUpRef}
                      />
                    </VisibilitySensor>
                  )}
                </CountUp>
                <h5>{c.name}</h5>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Counter;

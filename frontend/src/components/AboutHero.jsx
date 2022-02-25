import React from "react";
import Typewriter from "typewriter-effect";

const AboutHero = () => {
  return (
    <>
      <div className="header">
        <div className="ocean">
          <div className="wave"></div>
          <div className="wave"></div>
        </div>
        <div className="container">
          <div className="text-center">
            <div className="company-title">
              Express Pesticides Private Limited
            </div>
            <span className="typewriter">
              <Typewriter
                options={{
                  strings: [
                    "Powered By EPCORN",
                    "Established in 1972",
                    "Happy Customers From Last 50 Years",
                  ],
                  autoStart: true,
                  loop: true,
                  pauseFor: 2000,
                }}
              />
            </span>
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutHero;

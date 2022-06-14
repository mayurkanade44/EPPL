import React from "react";
import {
  FAQ,
  Journey,
  AboutHero,
  Awards,
  HowWeDo,
  Vision,
} from "../components";
import { MSfaq } from "../context/data";

export const About = () => {
  return (
    <div>
      <AboutHero />
      <Journey />
      <Vision />
      <Awards />
      <HowWeDo />
      <div style={{ backgroundColor: "#f4f7fa" }}>
        <div className="container py-3">
          <h2 className="text-center text-dark">
            Frequently Asked Questions(FAQ)
          </h2>
          <div className="heading-underline" />
          <div className="row">
            {MSfaq.map((item) => {
              return (
                <div key={item.id} className="col-md-6" style={{ padding: 0 }}>
                  <FAQ {...item}></FAQ>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

import React from "react";
import { FAQ, Journey, AboutHero, Awards, HowWeDo } from "../components";
import { faq } from "../context/data";

export const About = () => {
  return (
    <div>
      <AboutHero />
      <Journey />
      <Awards />
      <HowWeDo />
      <div className="py-3" style={{ backgroundColor: "#f4f7fa" }}>
        <h1 className="text-center text-dark">
          Frequently Asked Questions(FAQ)
        </h1>
        <div className="heading-underline" />
        <FAQ data={faq}></FAQ>
      </div>
    </div>
  );
};

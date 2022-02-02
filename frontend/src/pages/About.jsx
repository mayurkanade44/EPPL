import React from "react";
import { FAQ, AboutExpandCard, Journey } from "../components";
import { faq } from "../context/data";

export const About = () => {
  return (
    <div>
      <Journey />
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

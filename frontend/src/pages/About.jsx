import React from "react";
import { FAQ, AboutExpandCard, Journey } from "../components";
import { faq } from "../context/data";

export const About = () => {
  return (
    <div>
      <h1 className="text-center text-dark">Frequently Asked Questions(FAQ)</h1>
      <div className="heading-underline" />
      {faq.map((faq) => {
        return <FAQ key={faq.id} {...faq}></FAQ>;
      })}
      <Journey/>
    </div>
  );
};

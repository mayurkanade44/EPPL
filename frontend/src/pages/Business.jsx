import React from "react";
import { useDataContext } from "../context/data_context";
import { SingleBusiness, SubNavbar } from "../components";

const Business = () => {
  const {business} = useDataContext()
  return (
    <div className="container">
      <SubNavbar data={business} name="business" />
      <SingleBusiness />
    </div>
  );
};

export default Business;

import React from "react";
import { SingleService, SubNavbar } from "../components";
import { useDataContext } from "../context/data_context";

export const Services = () => {
  const { services } = useDataContext();
  return (
    <div>
      <SubNavbar data={services} name='services' />
      <SingleService />
    </div>
  );
};

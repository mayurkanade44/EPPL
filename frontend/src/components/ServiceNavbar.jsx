import React from "react";
import { Link } from "react-router-dom";
import { useDataContext } from "../context/data_context";

const ServiceNavbar = () => {
  const { services } = useDataContext();
  return (
    <div>
      <ul className="nav nav-tabs">
        {services.map((service) => {
          return (
            <li className="nav-item" key={service.id}>
              <Link className="nav-link" to={`/services/${service.id}`}>
                {service.name}
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default ServiceNavbar;

import React from "react";
import { Link, useParams } from "react-router-dom";
import { useDataContext } from "../context/data_context";
import "animate.css";

const ServiceNavbar = () => {
  const { services } = useDataContext();
  const { id } = useParams();
  const sort = services.sort((a, b) => {
    return a.name.localeCompare(b.name);
  });
  return (
    <div className="container">
      <ul className="nav nav-tabs">
        {sort.map((service) => {
          return (
            <li className="nav-item" key={service.id}>
              <Link
                className={`nav-link ${id === service.id && "active"}`}
                to={`/services/${service.id}`}
              >
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

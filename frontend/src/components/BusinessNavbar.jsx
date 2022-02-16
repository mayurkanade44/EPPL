import React from "react";
import { useDataContext } from "../context/data_context";
import { Link, useParams } from "react-router-dom";

const BusinessNavbar = () => {
  const { business } = useDataContext();
  const { id } = useParams();
  return (
    <div>
      <ul className="nav nav-tabs">
        {business.map((business) => {
          return (
            <li className="nav-item" key={business.id}>
              <Link
                className={`nav-link ${id === business.id && "active"}`}
                to={`/business/${business.id}`}
              >
                <div className="d-flex justify-content-center">
                  <img
                    src={business.img}
                    alt={business.name}
                    style={{ height: 30 }}
                  />
                </div>
                <p className="m-0 mt-1">{business.name}</p>
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default BusinessNavbar;

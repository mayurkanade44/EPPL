import React from "react";
import { Link, useParams } from "react-router-dom";
import "animate.css";

const SubNavbar = ({ data, name }) => {
  const { id } = useParams();
  const sort = data.sort((a, b) => {
    return a.name.localeCompare(b.name);
  });
  return (
    <div className="container">
      <ul className="nav nav-tabs">
        {sort.map((item) => {
          return (
            <li className="nav-item" key={item.id}>
              <Link
                className={`nav-link ${id === item.id && "active"}`}
                to={`/${name}/${item.id}`}
              >
                <div className="d-flex justify-content-center">
                  <img src={item.img} alt={item.name} style={{ height: 30 }} />
                </div>
                <p className="m-0 mt-1">{item.name}</p>
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default SubNavbar;

import React from "react";
import { Link } from "react-router-dom";

const SideBar = ({ sort, id }) => {
  return (
    <div className="wrapper text-center">
      <nav className="sidebar">
        <div className="sidebar-header">
          <h3>Products List</h3>
        </div>
        <ul className="list-unstyled components">
          {sort.map((product) => {
            return (
              <li key={product.id} className={`${id === product.id && 'active'}`}>
                <Link
                  to={`/product/${product.id}`}
                  style={{ textDecoration: "none" }}
                >
                  <h5>{product.name}</h5>
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>
    </div>
  );
};

export default SideBar;

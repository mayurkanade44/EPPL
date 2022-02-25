import React from "react";
import { Link } from "react-router-dom";
import eppl from "../images/eppl1.png";
import { useDataContext } from "../context/data_context";

export const Navbar = () => {
  const { services } = useDataContext();
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-dark bg-secondary fixed-top">
        <div className="container">
          <Link to="/" className="d-flex navbar-brand nav-link">
            <img
              src={eppl}
              style={{ height: 50, width: 180, marginRight: 10 }}
              alt="logo"
            />
          </Link>

          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarColor03"
            aria-controls="navbarColor03"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarColor03">
            <ul className="navbar-nav mx-auto">
              <li className="nav-item dropdown">
                <div
                  className="nav-link"
                  id="navbarDropdown"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  <h6>Our Solutions</h6>
                </div>
                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                  {services.map((service) => {
                    return (
                      <li key={service.id}>
                        <Link
                          className="dropdown-item"
                          to={`/services/${service.id}`}
                        >
                          <img src={service.img} alt="name" height={25} />
                          <span style={{ paddingLeft: 10 }}>
                            {service.name}
                          </span>
                        </Link>
                      </li>
                    );
                  })}
                </ul>
              </li>
              <li className="nav-item dropdown">
                <Link to="/business/recCjq0CzUMSEBlHH" className="nav-link">
                  <h6>Our Business Solutions</h6>
                </Link>
              </li>
              <li className="nav-item ">
                <Link to="/knowus" className="nav-link">
                  <h6>Know Us</h6>
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/products" className="nav-link">
                  <h6>Products</h6>
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/about" className="nav-link">
                  <h6>Buzz</h6>
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/contact" className="nav-link">
                  <h6>Contact</h6>
                </Link>
              </li>
            </ul>
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                <Link to="/contact" className="nav-link">
                  <div className="btn-quote btn-outline-dark">
                    <span>Get A Quote</span>
                    <div className="dot"></div>
                  </div>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

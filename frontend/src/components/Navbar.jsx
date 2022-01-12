import React from "react";
import { Link } from "react-router-dom";

export const Navbar = () => {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-dark bg-primary fixed-top">
        <div className="container">
          <Link to="/" className="d-flex navbar-brand nav-link">
            {/* <img
              src={}
              style={{ height: 50, marginRight: 10 }}
              alt="logo"
            /> */}
            <h4 className="pt-2">EPPL</h4>
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
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                <Link to="/" className="nav-link">
                  <h4>Home</h4>
                </Link>
              </li>
              <li className="nav-item dropdown">
                <a
                  className="nav-link"
                  id="navbarDropdown"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  <h4>Services</h4>
                </a>
                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                  <li>
                    <Link className="dropdown-item" to="/services">
                      Green Shield
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" to="/services">
                      Ratrid
                    </Link>
                  </li>

                  <li>
                    <Link className="dropdown-item" to="/services">
                      Termiproof
                    </Link>
                  </li>
                </ul>
              </li>
              <li className="nav-item">
                <Link to="/about" className="nav-link">
                  <h4>About Us</h4>
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/contact" className="nav-link">
                  <h4>Contact</h4>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

import React from "react";
import { Link } from "react-router-dom";
import eppl from "../images/eppl1.png";
import rat from "../images/rat.jpeg";
import gs from "../images/gs.jpeg";
import termi from "../images/termi.jpeg";

export const Navbar = () => {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-dark bg-secondary fixed-top">
        <div className="container">
          <Link to="/" className="d-flex navbar-brand nav-link">
            <img
              src={eppl}
              style={{ height: 60, width: 220, marginRight: 10 }}
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
              <li className="nav-item ">
                <Link to="/" className="nav-link">
                  <h5>Know Us</h5>
                </Link>
              </li>
              <li className="nav-item dropdown">
                <div
                  className="nav-link"
                  id="navbarDropdown"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  <h5>Our Solutions</h5>
                </div>
                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                  <li>
                    <Link className="dropdown-item" to="/services">
                      <img src={gs} alt="name" height={25} />
                      <span style={{ paddingLeft: 10 }}>Green Shield</span>
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" to="/services">
                      <img src={rat} alt="name" height={25} />
                      <span style={{ paddingLeft: 10 }}>Ratrid</span>
                    </Link>
                  </li>

                  <li>
                    <Link className="dropdown-item" to="/services">
                      <img src={termi} alt="name" height={25} />
                      <span style={{ paddingLeft: 10 }}>Termiproof</span>
                    </Link>
                  </li>
                </ul>
              </li>
              <li className="nav-item dropdown">
                <div
                  className="nav-link"
                  id="navbarDropdown"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  <h5>Our Business Solutions</h5>
                </div>
                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                  <li>
                    <Link className="dropdown-item" to="/services">
                      Hospitality
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" to="/services">
                      Healthcare
                    </Link>
                  </li>

                  <li>
                    <Link className="dropdown-item" to="/services">
                      Education
                    </Link>
                  </li>
                </ul>
              </li>
              <li className="nav-item">
                <Link to="/about" className="nav-link">
                  <h5>Products</h5>
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/about" className="nav-link">
                  <h5>Buzz</h5>
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/contact" className="nav-link">
                  <h5>Contact</h5>
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

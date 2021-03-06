import React from "react";
import { Link } from "react-router-dom";
import { social } from "../context/data";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHome,
  faPhoneAlt,
  faEnvelope,
} from "@fortawesome/free-solid-svg-icons";
import { useDataContext } from "../context/data_context";

const Footer = () => {
  const { loading } = useDataContext();

  return (
    <>
      {!loading ? (
        <div className="mt-2">
          <footer
            className="text-center text-lg-start text-white"
            style={{ backgroundColor: "#081828" }}
          >
            <div className="container p-4 pb-0">
              <div className="row">
                <div className="col-md-3 col-lg-3 col-xl-3 mx-auto mt-3">
                  <h4 className="mb-4 font-weight-bold">About Us</h4>
                  <p>
                    We started in 1978 as EPCORN and work under same company.
                  </p>
                </div>

                <hr className="w-100 clearfix d-md-none" />

                <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mt-3">
                  <h4 className="mb-4 font-weight-bold">Quick Links</h4>
                  <p>
                    <Link
                      to="/services/recYvly2pg9AJ2bRQ"
                      className="text-white"
                    >
                      <span className="foo">Services</span>
                    </Link>
                  </p>
                  <p>
                    <Link
                      to="/business/recCjq0CzUMSEBlHH"
                      className="text-white"
                    >
                      <span className="foo">Business Solutions</span>
                    </Link>
                  </p>
                  <p>
                    <Link
                      className="text-white"
                      to="/product/rec2SJs8R0mUOQHR6"
                    >
                      <span className="foo">Products</span>
                    </Link>
                  </p>
                  <p>
                    <Link className="text-white" to="/contact">
                      <span className="foo">Free Quote</span>
                    </Link>
                  </p>
                </div>

                <hr className="w-100 clearfix d-md-none" />

                <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mt-3">
                  <h4 className=" mb-4 font-weight-bold">Contact</h4>
                  <div className="pb-2">
                    <FontAwesomeIcon className="me-2" icon={faHome} />
                    <span style={{ fontSize: 13 }}>
                      S - 5, 2nd Floor, Khira Industrial Estate, VM Bhargav
                      Road, Santacruz West. Mumbai - 400054.
                    </span>
                  </div>
                  <p style={{ marginBottom: 9 }}>
                    <FontAwesomeIcon className="me-2" icon={faEnvelope} />
                    epcorn@yahoo.in
                  </p>
                  <p>
                    <FontAwesomeIcon className="me-2" icon={faPhoneAlt} />
                    +123456789
                  </p>
                </div>

                <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mt-3">
                  <h4 className="mb-4 ms-2 font-weight-bold">Follow Us</h4>
                  {social.map((s) => {
                    return (
                      <a href={s.url} className="btn me-2 icon" target="_blank">
                        <img className="img-fluid" src={s.img} alt="" />
                      </a>
                    );
                  })}
                </div>
              </div>
            </div>
            <div
              className="row justify-content-around p-3"
              style={{ backgroundColor: "black" }}
            >
              <div className="col-4">
                <h5>Powerd By EPCORN</h5>
              </div>

              <div className="col-4 text-center">
                <h5>
                  &copy; {new Date().getFullYear()} EPPL - All Rights Reserved
                </h5>
              </div>
            </div>
          </footer>
        </div>
      ) : null}
    </>
  );
};

export default Footer;

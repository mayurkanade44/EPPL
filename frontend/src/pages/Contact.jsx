import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHome,
  faPhoneAlt,
  faEnvelope,
  faGlobe,
} from "@fortawesome/free-solid-svg-icons";
import ab from "../images/im.svg";
import "./contact.css";
import { Link } from "react-router-dom";

export const Contact = () => {
  const link = "https://www.instagram.com/jersey_republicc";
  return (
    <div className="content">
      <h2 className="text-center mb-4">
        <u>Contact Us</u>
      </h2>
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-md-10">
            <div className="row justify-content-center">
              <div className="col-md-6">
                <h3 className="heading mb-4">
                  Let's solve your Pest problems!
                </h3>
                <p>We're open for any pest problems or just to have a chat</p>
                <p>
                  <img
                    src={ab}
                    alt="person"
                    className="img-fluid"
                    style={{ height: 350 }}
                  />
                </p>
              </div>
              <div className="col-md-6">
                <form
                  className="mb-5"
                  method="post"
                  id="contactForm"
                  name="contactForm"
                >
                  <div className="row">
                    <div className="col-md-12 form-group py-3">
                      <input
                        type="text"
                        className="form-control"
                        name="name"
                        id="name"
                        placeholder="Your name"
                      />
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-md-12 form-group py-3">
                      <input
                        type="email"
                        className="form-control"
                        name="email"
                        id="email"
                        placeholder="Email"
                      />
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-md-12 form-group py-3">
                      <input
                        type="text"
                        className="form-control"
                        name="contact"
                        id="contact"
                        placeholder="Phone Number"
                      />
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-md-12 form-group py-3">
                      <input
                        type="text"
                        className="form-control"
                        name="subject"
                        id="subject"
                        placeholder="Subject"
                      />
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-md-12 form-group py-3">
                      <textarea
                        className="form-control"
                        name="message"
                        id="message"
                        style={{ height: 120 }}
                        placeholder="Write your message"
                      ></textarea>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-12">
                      <button
                        type="submit"
                        onSubmit={(e) => e.preventDefault()}
                        value="Send Message"
                        className="btn btn-outline-primary rounded-5 py-2 px-2"
                      >
                        Send Message
                      </button>
                      <span className="submitting"></span>
                    </div>
                  </div>
                </form>
              </div>
              <div className="col-md-6 d-flex align-items-stretch">
                <div className="info-wrap w-100 p-lg-5 p-4 img">
                  <p className="mb-4"></p>
                  <div className="dbox w-100 d-flex align-items-center">
                    <div className="icon d-flex align-items-center justify-content-center">
                      <FontAwesomeIcon icon={faHome} />
                    </div>
                    <div className="text ps-3">
                      <p>
                        <span className="pt-5">Address:</span> Khira Industries,
                        Santacruz
                      </p>
                    </div>
                  </div>
                  <div className="dbox w-100 d-flex align-items-center">
                    <div className="icon d-flex align-items-center justify-content-center">
                      <FontAwesomeIcon icon={faPhoneAlt} />
                    </div>
                    <div className="text ps-3">
                      <p>
                        <span>Phone:</span>{" "}
                        <a href="tel://123456789">+ 123456789</a>
                      </p>
                    </div>
                  </div>
                  <div className="dbox w-100 d-flex align-items-center">
                    <div className="icon d-flex align-items-center justify-content-center">
                      <FontAwesomeIcon icon={faEnvelope} />
                    </div>
                    <div className="text ps-3">
                      <p>
                        <span>Email:</span>{" "}
                        <a href="mailto:epcorn@yahoo.in">epcorn@yahoo.in</a>
                      </p>
                    </div>
                  </div>
                  <div className="dbox w-100 d-flex align-items-center">
                    <div className="icon d-flex align-items-center justify-content-center">
                      <FontAwesomeIcon icon={faGlobe} />
                    </div>
                    <div className="text ps-3">
                      <p>
                        <span>Website</span>{" "}
                        <Link to={{ pathname: link }} target="_blank">
                          epcorn.com
                        </Link>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-6">game</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

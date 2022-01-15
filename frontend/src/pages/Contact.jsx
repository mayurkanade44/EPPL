import React from "react";
import ab from "../images/im.svg";
import "./contact.css";

export const Contact = () => {
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
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Voluptas debitis, fugit natus?
                </p>

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
                        type="text"
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
                      <input
                        type="submit"
                        value="Send Message"
                        className="btn btn-outline-primary rounded-5 py-2 px-2"
                      />
                      <span className="submitting"></span>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

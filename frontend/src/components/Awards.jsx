import React from "react";
import fb from "../images/facebook.png";
import what from "../images/whatsapp.png";
import insta from "../images/instagram.png";

const Awards = () => {
  return (
    <div className="container">
      <h2 className="text-center">Awards &amp; Affiliations</h2>
      <div className="heading-underline" />
      <div className="row my-5 d-flex justify-content-around">
        <div className="col-lg-3 ">
          <div className="project-img-container">
            <img className="img-fluid" src={fb} alt="project-img" />
            <div className="project-item-info">
              <div className="project-item-info-content">
                <button
                  type="button"
                  className="btn"
                  data-bs-toggle="modal"
                  data-bs-target="#exampleModal"
                >
                  <h6 className="project-item-title">
                    IPCA - Indian Pest Control Association
                  </h6>
                </button>
              </div>
            </div>
          </div>
          <div
            className="modal fade"
            id="exampleModal"
            aria-labelledby="exampleModalLabel"
            aria-hidden="true"
          >
            <div className="modal-dialog modal-dialog-centered">
              <img className="img-fluid" src={fb} alt="project-img" />
            </div>
          </div>
        </div>
        <div className="col-lg-3 ">
          <div className="project-img-container">
            <img className="img-fluid" src={insta} alt="project-img" />
            <div className="project-item-info">
              <div className="project-item-info-content">
                <button
                  type="button"
                  className="btn"
                  data-bs-toggle="modal"
                  data-bs-target="#exampleModal1"
                >
                  <h6 className="project-item-title">
                    IPCA - Indian Pest Control Association
                  </h6>
                </button>
              </div>
            </div>
          </div>
          <div
            className="modal fade"
            id="exampleModal1"
            aria-labelledby="exampleModalLabel"
            aria-hidden="true"
          >
            <div className="modal-dialog modal-dialog-centered">
              <img className="img-fluid" src={insta} alt="project-img" />
            </div>
          </div>
        </div>
        <div className="col-lg-3 ">
          <div className="project-img-container">
            <img className="img-fluid" src={what} alt="project-img" />
            <div className="project-item-info">
              <div className="project-item-info-content">
                <button
                  type="button"
                  className="btn"
                  data-bs-toggle="modal"
                  data-bs-target="#exampleModal2"
                >
                  <h6 className="project-item-title">
                    IPCA - Indian Pest Control Association
                  </h6>
                </button>
              </div>
            </div>
          </div>
          <div
            className="modal fade"
            id="exampleModal2"
            aria-labelledby="exampleModalLabel"
            aria-hidden="true"
          >
            <div className="modal-dialog modal-dialog-centered">
              <img className="img-fluid" src={what} alt="project-img" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Awards;

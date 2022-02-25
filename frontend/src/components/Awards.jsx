import React from "react";
import { awards } from "../context/data";

const Awards = () => {
  

  return (
    <div className="container">
      <h2 className="text-center">Awards &amp; Affiliations</h2>
      <div className="heading-underline" />
      <div className="row my-5">
        {awards.map((award) => {
          return (
            <div className="col-lg-3 col-md-4" key={award.id}>
              <div className="project-img-container">
                <img className="img-fluid" src={award.img} alt="project-img" />
                <div className="project-item-info">
                  <div className="project-item-info-content">
                    <button
                      type="button"
                      className="btn"
                      data-bs-toggle="modal"
                      data-bs-target="#exampleModal"
                    >
                      <h6 className="project-item-title">
                        {award.name}
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
                  <img
                    className="img-fluid"
                    src={award.img}
                    alt="project-img"
                  />
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Awards;

import React from "react";
import img1 from "../images/cat-1.jpg";
import img4 from "../images/cat-4.jpg";
import img2 from "../images/cat-2.jpg";
import img3 from "../images/cat-3.jpg";
import "animate.css";

const Products = () => {
  return (
    <div className="container category">
      <div className="row g-3">
        <div className="col-md-7">
          <div className="row g-3">
            <div className="col-md-12 animate__animated animate__zoomIn ">
              <a
                className="position-relative d-block overflow-hidden border border-dark border-2 rounded"
                href=""
              >
                <img className="img-fluid" src={img1} alt="" />
                <div className="bg-white text-center position-absolute bottom-0 end-0 py-1 px-1">
                  <h5 className="m-0">Rodein Box</h5>
                  <small className="text-primary">200 ₹</small>
                </div>
              </a>
            </div>
            <div className="col-md-6 animate__animated animate__zoomIn">
              <a
                className="position-relative d-block overflow-hidden border border-dark border-2 rounded"
                href=""
              >
                <img className="img-fluid" src={img2} alt="" />
                <div className="bg-white text-center position-absolute bottom-0 end-0 py-1 px-1">
                  <h5 className="m-0">Rodein Box</h5>
                  <small className="text-primary">200 ₹</small>
                </div>
              </a>
            </div>
            <div className="col-md-6 animate__animated animate__zoomIn">
              <a
                className="position-relative d-block overflow-hidden border border-dark border-2 rounded"
                href=""
              >
                <img className="img-fluid" src={img3} alt="" />
                <div className="bg-white text-center position-absolute bottom-0 end-0 py-1 px-1">
                  <h5 className="m-0">Rodein Box</h5>
                  <small className="text-primary">200 ₹</small>
                </div>
              </a>
            </div>
          </div>
        </div>
        <div
          className="col-md-5 animate__animated animate__zoomIn"
          style={{ minHeight: 350 }}
        >
          <a
            className="position-relative d-block h-100 overflow-hidden border border-dark border-2 rounded"
            href=""
          >
            <img
              className="img-fluid position-absolute w-100 h-100"
              src={img4}
              alt=""
              style={{ objectFit: "cover" }}
            />
            <div className="bg-white text-center position-absolute bottom-0 end-0 py-1 px-1">
              <h5 className="m-0">Rodein Box</h5>
              <small className="text-primary">200 ₹</small>
            </div>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Products;

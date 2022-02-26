import React from "react";
import fb from "../images/facebook.png";
import next from "../images/next.png";

const Horizontalimages = ({ images = [{ url: "" }] }) => {
  return (
    <div className="container my-3">
      <div className="row">
        {images.map((image, index) => {
          return (
            <div className="col-md-4" key={index}>
              <div className="row">
                <div className="col-md-10">
                  <img
                    src={image.url}
                    alt=""
                    style={{ height: 250 }}
                    className="img-fluid"
                  />
                </div>
                {index !== 2 ? (
                  <div className="col-md-2 d-flex align-items-center">
                    <img src={next} alt="" className="img-fluid " />
                  </div>
                ) : null}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Horizontalimages;

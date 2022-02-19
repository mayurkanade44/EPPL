import React from "react";

const CaseStudyCard = ({ data }) => {
  return (
    <div>
      <h1>Case Studies</h1>
      <div className="row">
        {data &&
          data.map((item, index) => {
            return (
              <div className="col-md-4" key={item.id}>
                <div className="card-flip">
                  <div className="flip">
                    <div className="front">
                      <div className="card">
                        <img
                          src={item.img}
                          className="card-img-top"
                          alt="img"
                        />
                        <div className="card-body">
                          <h5 className="text-center m-2">{item.name}</h5>
                        </div>
                      </div>
                    </div>
                    <div className="back">
                      <div className="card">
                        <div className="card-body">
                          <h5 className="card-title mb-2">{item.name}</h5>
                          <p className="card-text mb-4">{item.descriptions}</p>
                          <button className="btn btn-dark">
                            <a
                              style={{
                                textDecoration: "none",
                                color: "white",
                              }}
                              href={item.file}
                            >
                              Download
                            </a>
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
      </div>
    </div>
  );
};

export default CaseStudyCard;

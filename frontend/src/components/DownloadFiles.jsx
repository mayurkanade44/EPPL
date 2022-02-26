import React from "react";

const DownloadFiles = ({ msds, sop, works }) => {
  return (
    <div>
      <div className="row my-3">
        <div className="col-md-2 d-flex align-items-center">
          <h5>Resources:</h5>
        </div>
        {msds && (
          <div className="col-md-2 ">
            <button type="button" className="btn btn-outline-success btn-lg">
              <a
                style={{
                  color: "black",
                }}
                target="_blank"
                rel="noreferrer"
                href={msds[0].url}
              >
                MSDS
              </a>
            </button>
          </div>
        )}
        {sop && (
          <div className="col-md-2 ">
            <button type="button" className="btn btn-outline-success btn-lg">
              <a
                style={{
                  color: "black",
                }}
                target="_blank"
                rel="noreferrer"
                href={sop[0].url}
              >
                SOP
              </a>
            </button>
          </div>
        )}
        {works && (
          <div className="col-md-2 ">
            <button type="button" className="btn btn-outline-success btn-lg">
              <a
                target="_blank"
                style={{
                  color: "black",
                }}
                rel="noreferrer"
                href={works[0].url}
              >
                Similar Works
              </a>
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default DownloadFiles;

import React from "react";

const ServiceNavbar = () => {
  return (
    <div>
      <ul className="nav nav-tabs bg-dark">
        <li className="nav-item">
          <a className="nav-link active" data-bs-toggle="tab" href="#home">
            Grren Shield
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link" data-bs-toggle="tab" href="#profile">
            Ratrid
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link" data-bs-toggle="tab" href="#termi">
            Termiproof
          </a>
        </li>
      </ul>
      {/* <div id="myTabContent" className="tab-content">
        <div className="tab-pane fade show active mt-3" id="home">
          <h1 className="text-center">Green Shield</h1>
        </div>
        <div className="tab-pane fade mt-3" id="profile">
          <h1 className="text-center">Ratrid</h1>
        </div>
        <div className="tab-pane fade mt-3" id="termi">
          <h1 className="text-center">Termiproof</h1>
        </div>
      </div> */}
    </div>
  );
};

export default ServiceNavbar;

import React from "react";

const Awards = () => {
  return (
    <div className="container">
      <h2 className="text-center">Awards &amp; Affiliations</h2>
      <div className="heading-underline" />
      <div className="row">
        <div class="col-lg-4 col-sm-6 shuffle-item">
          <div class="project-img-container">
            <a
              class="gallery-popup"
              href="images/projects/project1.jpg"
              aria-label="project-img"
            >
              <img
                class="img-fluid"
                src="images/projects/project1.jpg"
                alt="project-img"
              />
              <span class="gallery-icon">
                <i class="fa fa-plus"></i>
              </span>
            </a>
            <div class="project-item-info">
              <div class="project-item-info-content">
                <h3 class="project-item-title">Capital Teltway Building</h3>
                <p class="project-cat">Commercial, Interiors</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Awards;

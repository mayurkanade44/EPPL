import React, { useState } from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowDown } from "@fortawesome/free-solid-svg-icons";

const FAQ = ({ data }) => {
  const [showInfo, setShowInfo] = useState(false);

  return (
    <div className="container">
      <div className="row">
        {data.map((d) => {
          return (
            <div className="col-md-6" key={d.id}>
              <div className="faq-container">
                <div className={showInfo ? "faq active" : "faq"}>
                  <h5 className="faq-title ">{d.ques}</h5>
                  <p className="faq-text">{d.ans}</p>
                  <button
                    className="faq-toggle"
                    onClick={() => {
                      setShowInfo(!showInfo);
                    }}
                  >
                    <FontAwesomeIcon icon={faArrowDown} size="lg" />
                  </button>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default FAQ;

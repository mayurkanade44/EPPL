import React, { useState } from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowDown } from "@fortawesome/free-solid-svg-icons";

const FAQ = ({ ques, ans, index }) => {
  const [showInfo, setShowInfo] = useState(false);

  return (
    <div className="container">
      <div className="faq-container">
        <div className={showInfo ? "faq active" : "faq"}>
          <h5 className="faq-title ">{ques}</h5>
          <button
            className="faq-toggle"
            onClick={() => {
              setShowInfo(!showInfo);
            }}
          >
            <FontAwesomeIcon icon={faArrowDown} size="lg" />
          </button>
          <p className="faq-text">{ans}</p>
        </div>
      </div>
    </div>
  );
};

export default FAQ;

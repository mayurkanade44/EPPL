import React, { useState } from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMinus, faArrowDown } from "@fortawesome/free-solid-svg-icons";

const FAQ = ({ques, ans}) => {
  const [showInfo, setShowInfo] = useState(false);
  const toggleClass = () => {
    setShowInfo(!showInfo);
  };
  return (
    <div className="container-fluid">
      <div class="faq-container">
        <div class={showInfo ? "faq active" : "faq"}>
          <h3 class="faq-title">{ques}</h3>

          <p class="faq-text">{ans}</p>

          <button class="faq-toggle" onClick={toggleClass}>
            <FontAwesomeIcon icon={faArrowDown} size="lg" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default FAQ;

import React, { useState } from "react";
import call from "../images/call-center.png";
import whatsapp from "../images/whatsapp1.png";
import telephone from "../images/telephone.png";
import email from "../images/email.png";
import facebook from "../images/facebook1.png";

const ContactButton = () => {
  const [toggle, setToggle] = useState(false);

  return (
    <div>
      <div
        className="main-btn"
        id="main-btn"
        onClick={() => {
          setToggle(!toggle);
        }}
      >
        <img src={call} style={{ height: 50 }} alt="" />
      </div>

      <div className="sub-btns">
        <div className={toggle ? `active-btn1 touch` : `btn1`}>
          <center>
            <a
              href="https://web.whatsapp.com/send?phone=919223187122"
              target="_blank"
              rel="noreferrer"
            >
              <img src={whatsapp} style={{ height: 60 }} alt="" />
            </a>
          </center>
        </div>
        <div className={toggle ? `active-btn2 touch` : `btn2`}>
          <center>
            <a href="https://www.facebook.com" target="_blank" rel="noreferrer">
              <img src={facebook} style={{ height: 60 }} alt="" />
            </a>
          </center>
        </div>
        <div className={toggle ? `active-btn3 touch` : `btn3`}>
          <center>
            <a href="mailto:epcorn@yahoo.in">
              <img src={email} style={{ height: 60 }} alt="" />
            </a>
          </center>
        </div>
        <div className={toggle ? `active-btn4 touch` : `btn4`}>
          <center>
            <a href="tel://123456789">
              <img src={telephone} style={{ height: 65 }} alt="" />
            </a>
          </center>
        </div>
      </div>
    </div>
  );
};

export default ContactButton;

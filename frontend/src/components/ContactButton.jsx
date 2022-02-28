import React, { useState } from "react";
import call from "../images/call-center.png";
import whatsapp from "../images/whatsapp1.png";
import telephone from "../images/telephone.png";
import email from "../images/email.png";
import facebook from "../images/facebook1.png";

const ContactButton = () => {
  const [toggle, setToggle] = useState(false);

  return (
    <>
      <div className="position-relative">
        <div className="position-absolute bottom-0 end-0">
          <h1>Mayur</h1>
        </div>
      </div>
      <div className="position-absolute bottom-0 end-0">
        <div
          className="main-btn"
          id="main-btn"
          onClick={() => {
            setToggle(!toggle);
          }}
        >
          <img src={call} className="fa" style={{ height: 50 }} alt="" />
        </div>

        <div className="sub-btns">
          <div className={toggle ? `active-btn1` : `btn1`}>
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
          <div className={toggle ? `active-btn2` : `btn2`} id="btn2">
            <center>
              <a
                href="https://www.facebook.com"
                target="_blank"
                rel="noreferrer"
              >
                <img src={facebook} style={{ height: 60 }} alt="" />
              </a>
            </center>
          </div>
          <div className={toggle ? `active-btn3` : `btn3`} id="btn3">
            <center>
              <a href="mailto:epcorn@yahoo.in">
                <img src={email} style={{ height: 60 }} alt="" />
              </a>
            </center>
          </div>
          <div className={toggle ? `active-btn4` : `btn4`} id="btn4">
            <center>
              <a href="tel://123456789">
                <img src={telephone} style={{ height: 60 }} alt="" />
              </a>
            </center>
          </div>
          <div className={toggle ? `active-btn5 touch` : `btn5`} id="btn5">
            <center>
              <h2>L</h2>
            </center>
          </div>
          <div className={toggle ? `active-btn6 touch` : `btn6`} id="btn6">
            <center>
              <h2>P</h2>
            </center>
          </div>
          <div className={toggle ? `active-btn7 touch` : `btn7`} id="btn7">
            <center>
              <h2>P</h2>
            </center>
          </div>
          <div className={toggle ? `active-btn8 touch` : `btn8`} id="btn8">
            <center>
              <h2>E</h2>
            </center>
          </div>
          {/* <div className={toggle ? `active-btn9 touch` : `btn9`} id="btn9">
          <center>
            <h4>E</h4>
          </center>
        </div> */}
        </div>
      </div>
    </>
  );
};

export default ContactButton;

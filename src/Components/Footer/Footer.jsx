import React from "react";
import "./Footer.css";
import footer_logo from "../../assets/media21twologo.svg";
import email_icon from "../../assets/mail-open-alt-svgrepo-com.svg";
const Footer = (props) => {
  return (
    <div className="footer">
      <div className="footer-top">
        <div className="footer-top-left">
          <img src={footer_logo} alt="" />
          <p>
            I'm Xolane Shabalala, front-end developer based in SA.
          </p>
        </div>
        <div className="footer-top-right">
          <div className="footer-email-input">
            <img src={email_icon} alt="" />
            <input
              type="email"
              name="email"
              id=""
              placeholder="Enter your email"
            />
          </div>
          <div className="footer-subscribe">Subscribe</div>
        </div>
      </div>
      <hr />
      <div className="footer-bottom">
        <p className="footer-bottom-left">
          Copyright © 2024 . All rights
          reserved.
        </p>
        <div className="footer-bottom-right">
          <p>Term of Service</p>
          <p>Privacy Policy</p>
          <p>Connect with me</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;

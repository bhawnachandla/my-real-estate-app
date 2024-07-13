import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-left">
          <img src="./logo2.png" alt="Logo" width={120} />
          <p className="footer-text">
            Our vision is to make the best place to live for everyone.
          </p>
        </div>
        <div className="footer-right">
          <div className="footer-info">
            <h3 className="footer-heading">Information</h3>
            <p className="footer-text">145 New York, FL 45717, USA</p>
          </div>
          <div className="footer-links">
            <h3 className="footer-heading">Quick Links</h3>
            <ul className="footer-menu">
              <li className="footer-menu-item">Property</li>
              <li className="footer-menu-item">Services</li>
              <li className="footer-menu-item">Product</li>
              <li className="footer-menu-item">About Us</li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

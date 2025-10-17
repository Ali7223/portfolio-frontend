// src/components/Footer.js
import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <p style={{margin : 10 }}>© 2025 Ali Saad | Built with React & Spring Boot</p>
        <div className="contact-info">
          <a href="mailto:abc@example.com">saadali@example.com</a>
          <span> | </span>
          <a href="tel:+1234567890">+1 234 567 890</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
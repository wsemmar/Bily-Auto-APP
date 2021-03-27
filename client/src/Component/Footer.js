import React from "react";
import "./Styles/Footer.css";
const Footer = () => {
  return (
    <div className="footer">
      <div className="copyright">
        <p>&copy;2021 WALIDSPROD ALL RIGHTS RESERVED</p>
        <p></p>
      </div>
      <div className="contact">
        <a
          className="icon"
          href="callto:+213774133223"
          target="_blank"
          rel="noreferrer"
        >
          <i className="fas fa-phone"></i>
        </a>
        <a
          className="icon"
          href="https://www.instagram.com/bily_auto/"
          target="_blank"
          rel="noreferrer"
        >
          <i className="fab fa-instagram"></i>
        </a>
        <a
          className="icon"
          href="https://www.facebook.com/pg/Bilys-Auto-111085737291608/community/?mt_nav=0&msite_tab_async=0"
          target="_blank"
          rel="noreferrer"
        >
          <i className="fab fa-facebook-f"></i>
        </a>
        <a
          className="icon"
          href="mailto:walidsprod@gmail.com"
          target="_blank"
          rel="noreferrer"
        >
          <i className="far fa-envelope"></i>
        </a>
      </div>
    </div>
  );
};

export default Footer;

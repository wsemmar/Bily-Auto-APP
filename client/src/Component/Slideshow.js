import React from "react";
import { Fade } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";
import "./Styles/Slide.css";
const proprietes = {
  duration: 1500,
  prevArrow: (
    <div style={{ width: "30px", marginRight: "-30px" }}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 512 512"
        fill="#2cdb38"
      >
        <path d="M242 180.6v-138L0 256l242 213.4V331.2h270V180.6z" />
      </svg>
    </div>
  ),
  nextArrow: (
    <div style={{ width: "30px", marginLeft: "-30px" }}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 512 512"
        fill="#2cdb38"
      >
        <path d="M512 256L270 42.6v138.2H0v150.6h270v138z" />
      </svg>
    </div>
  ),
};
const fadeImages = [
  "./Slide1.jpeg",
  "./Slide2.jpeg",
  "./Slide3.jpeg",
  "./Slide4.jpeg",
  "./Slide5.jpeg",
];
const Slideshow = () => {
  return (
    <div className="slide-container">
      <Fade {...proprietes}>
        <div className="each-fade">
          <div className="image-container">
            <img src={fadeImages[3]} alt="img1" />
          </div>
        </div>
        <div className="each-fade">
          <div className="image-container">
            <img src={fadeImages[4]} alt="img2" />
          </div>
        </div>

        <div className="each-fade">
          <div className="image-container">
            <img src={fadeImages[1]} alt="img3" />
          </div>
        </div>
        <div className="each-fade">
          <div className="image-container">
            <img src={fadeImages[0]} alt="img4" />
          </div>
        </div>
      </Fade>
    </div>
  );
};

export default Slideshow;

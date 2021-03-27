import React from "react";
import Slideshow from "./Slideshow";
import "./Styles/Home.css";
const Home = () => {
  return (
    <div>
      <div className="Title">
        <h1>Bienvenue chez</h1>
        <img src="../Artboard 1.png" alt="logo-BilyAuto" />
      </div>
      <div>
        <Slideshow />
      </div>
    </div>
  );
};

export default Home;

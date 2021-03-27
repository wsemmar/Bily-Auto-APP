import React from "react";

import "./Styles/Boutique.css";

import Products from "./Products";
import Filter from "./Filter";
const Boutique = ({ islogin }) => {
  return (
    <div>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          marginTop: "1em",
        }}
      >
        <img
          style={{ width: "62em", borderRadius: "2em" }}
          src="../LIVRAISON-FCX-BANNER.png"
          alt="Livraison-ad"
        />
      </div>
      <Filter />
      <Products islogin={islogin} />
    </div>
  );
};
export default Boutique;

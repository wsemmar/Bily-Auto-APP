import React from "react";
import Login from "./Login";
import Register from "./Register";
import "./Styles/Compte.css";
const Compte = ({ setisLogin, isadmin }) => {
  return (
    <div className="log-regist">
      <div>
        <Login setisLogin={setisLogin} isadmin={isadmin} />
      </div>
      <div className="ask-container">
        <div className="ask">
          <i
            className="fas fa-user"
            style={{
              fontSize: "5em",
              color: "#2cdb38",
            }}
          ></i>
        </div>

        <div className="ask">
          <h2>Don't have an account?</h2>
          <div>
            <i
              className="fas fa-arrow-right"
              style={{
                fontSize: "2em",
              }}
            />
          </div>
        </div>
        <div className="ask">
          <div>
            <i
              className="fas fa-arrow-left"
              style={{
                fontSize: "2em",
              }}
            />
          </div>
          <h2>Do you already have an account?</h2>
        </div>
      </div>
      <div>
        <Register setisLogin={setisLogin} />
      </div>
    </div>
  );
};

export default Compte;

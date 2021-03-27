import React from "react";
import axios from "axios";
import { useState, useEffect } from "react";

const CommandesRdv = () => {
  const [rdv, setrdv] = useState("");
  useEffect(() => {
    const GetRdv = async () => {
      const res = await axios.get("http://localhost:5000/api/rdv");
      console.log(res.data);
      setrdv(res.data.rdv);
    };
    GetRdv();
  }, []);
  console.log(rdv);
  return (
    <div>
      {rdv &&
        rdv.map((elem) => {
          return (
            <div
              style={{
                display: "flex",
                border: "3px solid rgba(74, 73, 73, 0.25)",
                borderRadius: "40px",
                alignItems: "center",
                margin: "1em",
                height: "5em",
                justifyContent: "space-around",
              }}
            >
              <h4 className="product-name">Nom</h4>
              <p>{elem.name}</p>
              <h4 className="product-number">Numero/Telephone</h4>
              <p>{elem.number}</p>
              <h4 className="product-date"> Date </h4>
              <p>{new Date(elem.date).toString()}</p>
              <h4 className="product-comment">commentaire</h4>
              <p>{elem.comment}</p>
            </div>
          );
        })}
    </div>
  );
};

export default CommandesRdv;

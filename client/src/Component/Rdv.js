import React from "react";
import "./Styles/Rdv.css";
import { useState } from "react";
import axios from "axios";

const Rdv = () => {
  const [name, setname] = useState("");
  const [number, setnumber] = useState("");
  const [date, setdate] = useState("");
  const [comment, setcomment] = useState("");
  const [message, setMessage] = useState("");

  const HandleSubmit = async (e) => {
    e.preventDefault();
    await axios.post("http://localhost:5000/api/rdv", {
      name: name,
      number: number,
      date: date,
      comment: comment,
    });
    setMessage(
      `Merci ${name} pour votre reservation, on vous contactera dans les plus brefs délais`
    );
  };
  return (
    <div className="background">
      <div className="all">
        <div className="Resume-container">
          <div>
            <h2>Prendre rendez-vous en atelier Bily Auto</h2>
            <p className="Resume">
              Besoin d’un rendez-vous en atelier Bily Auto pour l’entretien de
              votre véhicule ? C’est facile ! Une voiture bien entretenue, c’est
              un véhicule plus sûr, qui dure plus longtemps. Spécialiste de
              l’équipement et l’entretien automobile, Bily Auto vous propose un
              très grand choix de prestations en atelier pour vous assurer des
              interventions de qualité, au meilleur prix. Notre objectif :
              allier sécurité et budget ! Pour rouler en toute sérénité, pensez
              à prendre rendez-vous en atelier Bily Auto.
            </p>
          </div>
        </div>
        <div className="rdv-container">
          <img
            className="Photo"
            src="./FD679488-9CB9-4470-B732-4BAF5D43220D.png"
            alt="atelier-img"
          />

          <div className="section-rdv">
            <h1>Rendez-vous atelier</h1>
            {message}
            <form>
              <label>Nom complet</label>
              <input
                className="inpt"
                type="text"
                placeholder="Nom et prenom"
                onChange={(e) => setname(e.target.value)}
              />
              <label>Téléphone / Mobile</label>
              <input
                className="inpt"
                type="tel"
                placeholder="Numero téléphone"
                onChange={(e) => setnumber(e.target.value)}
              />
              <label>Date du rendez-vous</label>
              <input
                className="inpt"
                type="datetime-local"
                placeholder="Exemple : 20/12/2021"
                onChange={(e) => setdate(e.target.value)}
              />
              <br />
              <input
                className="inpt-com"
                type="text"
                placeholder="Commentaire"
                onChange={(e) => setcomment(e.target.value)}
              />
              <br />
              <button
                className="btn"
                style={{
                  backgroundColor: "#4a4949",
                  borderRadius: "40px",
                  marginLeft: "12em",
                  width: "5em",
                  color: "#2cdb38",
                }}
                onClick={HandleSubmit}
              >
                Valider
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Rdv;

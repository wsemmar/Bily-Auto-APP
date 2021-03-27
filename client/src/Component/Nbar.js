import React from "react";
import "./Styles/Nbar.css";
import { Link } from "react-router-dom";
import axios from "axios";
import { useHistory } from "react-router-dom";
import { connect } from "react-redux";
import { ADDCART } from "../Redux/Actions/cartAction";

const Nbar = (props, islogin, setisLogin, isadmin, setisAdmin) => {
  const history = useHistory();
  const HandleSubmit = async (e) => {
    e.preventDefault();

    await axios.get("http://localhost:5000/user/logout");
    localStorage.clear();
    history.push("/Compte");
    props.setisAdmin(false);
    props.setisLogin(false);
  };
  return (
    <div className="all-container">
      <div className="nav-container">
        {props.isadmin ? (
          <Link to="/">
            <i
              style={{ fontSize: "2em", color: "#2cdb38" }}
              className="fas fa-tools"
            ></i>
          </Link>
        ) : (
          <Link to="/">
            <img src="../Artboard 1.png" alt="Logo BilyAuto" />
          </Link>
        )}
        {props.isadmin ? (
          <Link className="route" to="/CreateProduct">
            <i className="fas fa-plus"></i> Produits
          </Link>
        ) : (
          <Link className="route" to="/Rdv">
            Rendez-vous
          </Link>
        )}
        {props.isadmin ? (
          <Link className="route" to="/Category">
            <i className="fas fa-plus"></i> Category
          </Link>
        ) : (
          ""
        )}
        {props.isadmin ? (
          <Link className="route" to="/DevBoutique">
            <i class="far fa-edit"></i> / <i class="fas fa-trash"></i> Produits
          </Link>
        ) : (
          <Link className="route" to="/Boutique">
            Boutique
          </Link>
        )}

        {props.isadmin ? (
          <Link className="route" to="/CommandesRdv">
            <i className="fas fa-shopping-cart"></i> Commandes / RDV
          </Link>
        ) : (
          <Link className="route" to="/Panier">
            {props.islogin ? (
              <span className="cart-count">{props.countCartProps}</span>
            ) : (
              ""
            )}
            <i className="fas fa-shopping-cart"></i> Panier
          </Link>
        )}
        {props.islogin ? (
          <Link onClick={(e) => HandleSubmit(e)} className="route" to="/">
            <i className="far fa-user-circle"></i> Logout
          </Link>
        ) : (
          <Link className="route" to="/Compte">
            <i className="far fa-user-circle"></i> Connextion
          </Link>
        )}
      </div>
    </div>
  );
};
const mapStateToProps = (state) => ({
  countCartProps: state.cartCount,
});

export default connect(mapStateToProps, { ADDCART })(Nbar);

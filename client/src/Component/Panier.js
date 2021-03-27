import React, { Fragment } from "react";
import { useHistory } from "react-router-dom";
import Button from "react-bootstrap/Button";
import { connect } from "react-redux";
import "./Styles/Panier.css";
import StripeCheckout from "react-stripe-checkout";
const Panier = (props) => {
  const history = useHistory();

  function HandleToken(token, addresses) {
    console.log({ token, addresses });
  }
  if (props.CartCost === 0)
    return (
      <div className="empty-cart">
        <h1 style={{ textAlign: "center", fontSize: "4rem" }}>Panier Vide</h1>
        <Button
          variant="primary"
          style={{
            backgroundColor: "#2cdb38",
            borderColor: "#2cdb38",
            width: "12em",
          }}
          onClick={() => history.push("/Boutique")}
        >
          Vers Boutique
        </Button>
      </div>
    );
  return (
    <div className="panier-container">
      <div className="product-header">
        <h4 className="product-title">Produits</h4>
        <h4 className="product-price">Prix</h4>
      </div>
      {props.CartProps.map((item) => {
        return (
          <Fragment key={item.id}>
            <div className="products">
              <div className="product">
                <img src={item.image} alt="" />
                <span className="product-name">{item.name}</span>
              </div>
              <div className="price">{item.price} DA</div>
            </div>
          </Fragment>
        );
      })}
      <div className="total">
        <h4 className="total-price">Total: {props.CartCost} DA</h4>
      </div>
      <div className="checkout">
        <Button
          variant="primary"
          style={{
            backgroundColor: "#2cdb38",
            borderColor: "#2cdb38",
            marginRight: "1em",
          }}
          onClick={() => history.push("/Boutique")}
        >
          Poursuivre vos achat
        </Button>
        <StripeCheckout
          token={HandleToken}
          stripeKey="pk_test_51IZQc4Gef1vC2kXE1pBkYwz8taL48dZOoqzXjbaEl7zoJ7p87G71tCbCealDE3HNVRDzpJanZJ571PlI0Yw5Ke6a00x4l16ezX"
          amount={props.CartCost}
          currency="dzd"
        />
      </div>
    </div>
  );
};
const mapStateToProps = (state) => ({
  CartProps: state.Cart,
  CartCost: state.CartCost,
});
export default connect(mapStateToProps)(Panier);

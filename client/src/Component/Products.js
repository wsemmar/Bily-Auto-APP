import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { ADDCART } from "../Redux/Actions/cartAction";

const Products = (props) => {
  const [artices, setarticles] = useState("");
  useEffect(() => {
    const GetArticles = async () => {
      const response = await axios.get("http://localhost:5000/api/products");
      setarticles(response.data);
    };
    GetArticles();
  }, []);

  return (
    <div>
      <div className="Articles">
        {artices &&
          artices.map((elem) => {
            return (
              <Card
                style={{
                  width: "18rem",
                }}
                key={elem._id}
              >
                <Card.Img variant="top" src={elem.image.url} />
                <Card.Body>
                  <Card.Title>{elem.title}</Card.Title>{" "}
                  <Button
                    style={{
                      backgroundColor: "#4A4949",
                      borderColor: "#4A4949",
                    }}
                  >
                    <Link
                      style={{
                        color: "white",
                      }}
                      to={`detail/${elem.product_id}`}
                    >
                      Voir Plus
                    </Link>
                  </Button>
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      marginTop: "4em",
                    }}
                  >
                    <Button
                      variant="primary"
                      style={{
                        backgroundColor: "#2cdb38",
                        borderColor: "#2cdb38",
                        marginRight: "1em",
                      }}
                      onClick={() =>
                        props.ADDCART(
                          elem.image.url,
                          elem.title,
                          elem.price,
                          elem._id,
                          elem.quantity
                        )
                      }
                    >
                      Ajouter Au Panier
                    </Button>
                    <Card.Text
                      style={{
                        fontSize: "28px",
                      }}
                    >
                      {elem.price}DA
                    </Card.Text>{" "}
                  </div>
                </Card.Body>
              </Card>
            );
          })}
      </div>
    </div>
  );
};
const mapStateToProps = (state) => ({
  CartProps: state.Cart,
  CartCost: state.CartCost,
});

export default connect(mapStateToProps, { ADDCART })(Products);

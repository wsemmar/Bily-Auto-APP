import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { useState, useEffect } from "react";
import axios from "axios";
import { Link, useParams } from "react-router-dom";

const DevBoutique = () => {
  const param = useParams();
  const [articles, setarticles] = useState("");
  const [reload, setreload] = useState(false);
  const [image, setimage] = useState("");
  useEffect(() => {
    const GetArticles = async () => {
      const response = await axios.get("http://localhost:5000/api/products");
      setarticles(response.data);
    };
    GetArticles();
  }, [reload]);
  const deleteProduct = async (id, image) => {
    try {
      await axios.post(
        "http://localhost:5000/api/destroy",
        { public_id: image.public_id },
        {
          headers: {
            Authorization: localStorage.getItem("Accesstoken"),
          },
        }
      );
      await axios.delete(`http://localhost:5000/api/products/${id}`, {
        headers: { Authorization: localStorage.getItem("Accesstoken") },
      });
      setreload(!reload);
    } catch (error) {
      alert(error.response.data.msg);
    }
  };

  return (
    <div>
      <div className="Articles">
        {articles &&
          articles.map((elem) => {
            return (
              <Card
                style={{
                  width: "18rem",
                }}
                key={elem._id}
              >
                <Card.Img variant="top" src={elem.image.url} />
                <Card.Body>
                  <Card.Title>{elem.title}</Card.Title>
                  <Card.Text>{elem.price}</Card.Text>
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
                      }}
                      onClick={() => deleteProduct(elem._id, elem.image)}
                    >
                      Effacer
                    </Button>
                    <Button
                      style={{
                        backgroundColor: "#2cdb38",
                        borderColor: "#2cdb38",
                      }}
                    >
                      <Link
                        style={{
                          color: "white",
                        }}
                        to={`/EditProduct/${elem.product_id}`}
                      >
                        Modifier
                      </Link>
                    </Button>
                  </div>
                </Card.Body>
              </Card>
            );
          })}
      </div>
    </div>
  );
};

export default DevBoutique;

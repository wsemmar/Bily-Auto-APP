import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import Button from "react-bootstrap/Button";

const Category = () => {
  const [categories, setcategories] = useState("");
  const [categorie, setcategorie] = useState("");
  const [reload, setreload] = useState(false);
  const [onedit, setonedit] = useState(false);
  const [id, setid] = useState("");
  useEffect(() => {
    const getCategories = async () => {
      const response = await axios.get("http://localhost:5000/api/category");
      setcategories(response.data);
    };
    getCategories();
  }, [reload]);
  const createCategory = async (e) => {
    e.preventDefault();
    try {
      if (onedit) {
        const response = await axios.put(
          `http://localhost:5000/api/category/${id}`,
          { name: categorie },
          { headers: { Authorization: localStorage.getItem("Accesstoken") } }
        );
        alert(response.data.msg);
      } else {
        const response = await axios.post(
          "http://localhost:5000/api/category",
          { name: categorie },
          { headers: { Authorization: localStorage.getItem("Accesstoken") } }
        );
        alert(response.data.msg);
      }
      setonedit(false);
      setcategorie("");
      setreload(!reload);
    } catch (error) {
      alert(error.response.data.msg);
      setcategorie("");
    }
  };
  const editcategory = (name, id) => {
    setid(id);
    setcategorie(name);
    setonedit(true);
  };
  const deletecategory = async (id) => {
    try {
      const response = await axios.delete(
        `http://localhost:5000/api/category/${id}`,
        { headers: { Authorization: localStorage.getItem("Accesstoken") } }
      );
      setreload(!reload);
      alert(response.data.msg);
    } catch (error) {
      alert(error.response.data.msg);
    }
  };
  return (
    <div style={{ display: "flex", justifyContent: "space-evenly" }}>
      <div style={{ display: "flex" }}>
        <form onSubmit={createCategory}>
          <label style={{ fontSize: "3em" }}>Categorie :</label>
          <input
            type="text"
            value={categorie}
            onChange={(e) => {
              setcategorie(e.target.value);
            }}
          ></input>
          <Button
            variant="primary"
            type="submit"
            style={{
              backgroundColor: "#2cdb38",
              borderColor: "#2cdb38",
              width: "6em",
            }}
          >
            {onedit ? "Update" : "Create"}
          </Button>
        </form>
      </div>
      <div>
        {categories &&
          categories.map((elem) => (
            <div className="" key={elem._id}>
              <p>{elem.name}</p>
              <div>
                <Button
                  variant="primary"
                  onClick={() => deletecategory(elem._id)}
                  style={{
                    backgroundColor: "#2cdb38",
                    borderColor: "#2cdb38",
                    marginRight: "0.5em",
                  }}
                >
                  delete
                </Button>
                <Button
                  variant="primary"
                  onClick={() => editcategory(elem.name, elem._id)}
                  style={{
                    backgroundColor: "#2cdb38",
                    borderColor: "#2cdb38",
                    marginRight: "0.5em",
                  }}
                >
                  edit
                </Button>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};

export default Category;

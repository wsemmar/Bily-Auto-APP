import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import { useHistory, useParams } from "react-router-dom";
import Button from "react-bootstrap/Button";

const initialState = {
  product_id: "",
  title: "",
  price: 0,
  description: "",
  content: "",
  category: "",
  _id: "",
};
const CreateProduct = ({ isadmin }) => {
  const history = useHistory();
  const param = useParams();
  const [product, setproduct] = useState(initialState);
  const [categories, setcategories] = useState("");
  const [image, setimage] = useState("");
  const [articles, setarticles] = useState("");
  const [onedit, setonedit] = useState(false);

  useEffect(() => {
    const GetArticles = async () => {
      const response = await axios.get("http://localhost:5000/api/products");
      setarticles(response.data);
    };
    GetArticles();
  }, []);
  useEffect(() => {
    if (param.id) {
      articles &&
        articles.forEach((item) => {
          setonedit(true);
          if (item.product_id === param.id) {
            setproduct(item);
            setimage(item.image);
          }
        });
    } else {
      setonedit(false);
      setproduct(initialState);
      setimage(false);
    }
  }, [articles, param.id]);
  useEffect(() => {
    const getCategory = async () => {
      const response = await axios.get("http://localhost:5000/api/category");
      setcategories(response.data);
    };
    getCategory();
  }, []);
  const handleUpload = async (e) => {
    e.preventDefault();
    try {
      if (!isadmin) return alert("you are not an admin");
      const file = e.target.files[0];
      if (!file) return alert("File not exist.");
      if (file.size > 1024 * 1042) return alert("Size too large!");
      if (file.type !== "image/jpeg" && file.type !== "image/png")
        return alert("File format is incorrect.");
      let formData = new FormData();
      formData.append("file", file);
      const response = await axios.post(
        "http://localhost:5000/api/upload",
        formData,
        {
          headers: {
            "content-type": "multipart/form-data",
            Authorization: localStorage.getItem("Accesstoken"),
          },
        }
      );

      setimage(response.data);
    } catch (error) {
      alert(error.response.data.msg);
    }
  };
  const handleDestroy = async () => {
    try {
      if (!isadmin) return alert("you are not an admin");
      await axios.post(
        "http://localhost:5000/api/destroy",
        { public_id: image.public_id },
        {
          headers: {
            Authorization: localStorage.getItem("Accesstoken"),
          },
        }
      );
      setimage("");
    } catch (error) {
      alert(error.response.data.msg);
    }
  };
  const handleChangeInput = (e) => {
    const { name, value } = e.target;
    setproduct({ ...product, [name]: value });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (!isadmin) return alert("you are not an admin");
      if (!image) return alert("No image upload");
      if (onedit) {
        await axios.put(
          `http://localhost:5000/api/products/${product._id}`,
          { ...product, image },
          {
            headers: {
              Authorization: localStorage.getItem("Accesstoken"),
            },
          }
        );
      } else {
        await axios.post(
          "http://localhost:5000/api/products",
          { ...product, image },
          {
            headers: {
              Authorization: localStorage.getItem("Accesstoken"),
            },
          }
        );
      }

      setimage(false);
      setproduct(initialState);
      history.push("/DevBoutique");
    } catch (error) {
      alert(error.response.data.msg);
    }
  };
  return (
    <div style={{ display: "flex", justifyContent: "center" }}>
      <div
        className="upload"
        style={{
          display: "flex",
          flexDirection: "column-reverse",
          justifyContent: "space-around",
        }}
      >
        <input type="file" name="file" onChange={handleUpload} />
        <div style={{ display: "flex", flexDirection: "row" }}>
          <img style={{ width: "33em" }} src={image ? image.url : ""} alt="" />
          <button
            style={{
              height: "2em",
              textDecoration: "none",
              borderRadius: "26px",
              border: "1px solid",
              background: "none",
            }}
            onClick={handleDestroy}
          >
            X
          </button>
        </div>
      </div>
      <form style={{ alignItems: "center" }} onSubmit={handleSubmit}>
        <div className="">
          <label>Product ID</label>
          <textarea
            type="text"
            name="product_id"
            value={product.product_id}
            onChange={handleChangeInput}
            required
          />
        </div>
        <div className="">
          <label>Title</label>
          <textarea
            type="text"
            name="title"
            value={product.title}
            onChange={handleChangeInput}
            required
          />
        </div>
        <div className="">
          <label>Price</label>
          <textarea
            type="number"
            name="price"
            value={product.price}
            onChange={handleChangeInput}
            required
          />
        </div>
        <div className="">
          <label>Description</label>
          <textarea
            type="text"
            name="description"
            value={product.description}
            onChange={handleChangeInput}
            required
          />
        </div>
        <div className="">
          <label>Content</label>
          <textarea
            type="text"
            name="content"
            value={product.content}
            onChange={handleChangeInput}
            required
          />
        </div>
        <div className="">
          <label>Category</label>
          <select
            name="category"
            value={product.category}
            onChange={handleChangeInput}
          >
            <option value="">Please select a category</option>
            {categories &&
              categories.map((category) => (
                <option value={category._id} key={category._id}>
                  {category.name}
                </option>
              ))}
          </select>
        </div>
        <Button
          type="submit"
          variant="primary"
          style={{
            backgroundColor: "#2cdb38",
            borderColor: "#2cdb38",
          }}
        >
          {onedit ? "Upadate" : "Create"}
        </Button>
      </form>
    </div>
  );
};

export default CreateProduct;

import React from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { useState } from "react";
import axios from "axios";
import { useHistory } from "react-router-dom";

const Register = ({ setisLogin }) => {
  const history = useHistory();

  const [name, setname] = useState("");
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");

  const HandleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post("http://localhost:5000/user/register", {
        name: name,
        email: email,
        password: password,
      });

      localStorage.setItem("Accesstoken", response.data.accesstoken);
      setisLogin(true);
      history.push("/Boutique");
    } catch (error) {
      alert(error.response.data.msg);
    }
  };
  return (
    <div>
      <h1 style={{ marginTop: "1em" }}>Register Now</h1>
      <Form>
        <Form.Label controlid="Name">Name</Form.Label>
        <Form.Control
          className="mb-2"
          id="inlineFormInput"
          placeholder="Steve Jobs"
          onChange={(e) => setname(e.target.value)}
        />
        <Form.Group controlid="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            type="email"
            placeholder="Enter email"
            onChange={(e) => setemail(e.target.value)}
          />
          <Form.Text className="text-muted">
            We'll never share your email with anyone else.
          </Form.Text>
        </Form.Group>
        <Form.Group controlid="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            placeholder="Password"
            onChange={(e) => setpassword(e.target.value)}
          />
        </Form.Group>
        <Form.Group controlid="formBasicCheckbox">
          <Form.Check type="checkbox" label="Check me out" />
        </Form.Group>
        <Button variant="primary" type="submit" onClick={HandleSubmit}>
          Submit
        </Button>
      </Form>
    </div>
  );
};

export default Register;

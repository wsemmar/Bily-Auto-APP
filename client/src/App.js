import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Nbar from "./Component/Nbar";
import Rdv from "./Component/Rdv";
import Boutique from "./Component/Boutique";
import Footer from "./Component/Footer";
import Home from "./Component/Home";
import Compte from "./Component/Compte";
import DetailProduct from "./Component/DetailProduct";
import { useState, useEffect } from "react";
import axios from "axios";
import Panier from "./Component/Panier";
import DevBoutique from "./Component/DevBoutique";
import Category from "./Component/Category";
import CreateProduct from "./Component/CreateProduct";
import CommandesRdv from "./Component/CommandesRdv";

function App() {
  const [islogin, setisLogin] = useState(false);
  const [isadmin, setisAdmin] = useState(false);

  useEffect(() => {
    const getUsers = async () => {
      const response = await axios.get("http://localhost:5000/user/infor", {
        headers: { Authorization: localStorage.getItem("Accesstoken") },
      });
      response.data.role === 1 ? setisAdmin(true) : setisAdmin(false);
    };
    getUsers();
  }, [islogin]);

  return (
    <Router>
      <div className="App" style={{ backgroundColor: "whitesmoke" }}>
        <Nbar
          islogin={islogin}
          setisLogin={setisLogin}
          isadmin={isadmin}
          setisAdmin={setisAdmin}
        />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/Rdv">
            <Rdv />
          </Route>
          <Route path="/Boutique">
            <Boutique islogin={islogin} />
          </Route>
          <Route path="/DevBoutique">
            <DevBoutique />
          </Route>
          <Route path="/Category">
            <Category />
          </Route>
          <Route path="/CommandesRdv">
            <CommandesRdv />
          </Route>
          <Route path="/CreateProduct">
            <CreateProduct isadmin={isadmin} />
          </Route>
          <Route path="/EditProduct/:id">
            <CreateProduct isadmin={isadmin} />
          </Route>
          <Route path="/Panier" component={Panier} />
          <Route path="/Compte">
            <Compte setisLogin={setisLogin} isadmin={isadmin} />
          </Route>
          <Route path="/detail/:id" exact component={DetailProduct} />
        </Switch>

        <Footer />
      </div>
    </Router>
  );
}

export default App;

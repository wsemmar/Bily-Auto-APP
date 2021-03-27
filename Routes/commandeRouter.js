const router = require("express").Router();
const commandeCtrl = require("../Controllers/commandeCtrl");
const auth = require("../Middleware/auth");
const authAdmin = require("../Middleware/authAdmin");

router
  .route("/commande")
  .get(auth, authAdmin, commandeCtrl.getCommandes)
  .post(auth, authAdmin, commandeCtrl.createCommande);

module.exports = router;

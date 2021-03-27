const router = require("express").Router();
const rdvCtrl = require("../Controllers/rdvCtrl");

router.route("/rdv").get(rdvCtrl.getRdv).post(rdvCtrl.CreateRdv);

module.exports = router;

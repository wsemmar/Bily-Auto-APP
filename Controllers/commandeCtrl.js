const Commandes = require("../Models/commandeModel");
const Users = require("../Models/userModel");
const Products = require("../Models/productModel");

const commandeCtrl = {
  getCommandes: async (req, res) => {
    try {
      const commandes = await Commandes.find();
      res.json(commandes);
    } catch (error) {
      return res.status(500).json({ msg: error.message });
    }
  },
  createCommande: async (req, res) => {
    try {
      const user = await Users.findById(req.user.id).select("name email");
      if (!user) return res.status(400).json({ msg: "user does not exist." });
      const { cart, paymentID, address } = req.body;
      const { _id, name, email } = user;
      const newCommande = new Commandes({
        user_id: _id,
        name,
        email,
        cart,
        paymentID,
        address,
      });
      res.json(newCommande);
    } catch (error) {
      return res.status(500).json({ msg: error.message });
    }
  },
};
module.exports = commandeCtrl;

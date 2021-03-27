const Rdv = require("../Models/rdvModel");

const rdvCtrl = {
  getRdv: async (req, res, next) => {
    try {
      const rdv = await Rdv.find();
      res.json({ rdv });
    } catch (error) {
      res.send({ message: error.message });
    }
  },
  CreateRdv: async (req, res, next) => {
    const { name, number, date, comment } = req.body;
    try {
      const rdv = new Rdv({
        name,
        number,
        date,
        comment,
      });
      await rdv.save();
      res.status(200);
      res.send(rdv);
    } catch (error) {
      res.status(400);
      res.send({ message: error.message });
    }
  },
  deleteRdv: async (req, res, next) => {
    const { id } = req.body;
    try {
      const rdv = await Rdv.findByIdAndDelete(id);
      res.send(rdv);
    } catch (error) {
      res.send({ message: error.message });
    }
  },
  updateRdv: async (req, res, next) => {
    try {
      const rdv = await Rdv.findByIdAndUpdate(
        req.body.id,
        req.body.updatedRdv,
        {
          new: true,
        }
      );
      await rdv.save();
      res.send(rdv);
    } catch (error) {
      res.send({ message: error.message });
    }
  },
};

module.exports = rdvCtrl;

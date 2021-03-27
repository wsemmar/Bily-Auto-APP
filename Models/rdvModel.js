const mongoose = require("mongoose");

const rdvSchema = new mongoose.Schema({
  name: {
    type: String,
  },
  number: {
    type: String,
    required: true,
  },
  date: {
    type: Date,
    required: true,
  },

  comment: { type: String },
});
module.exports = mongoose.model("rdv", rdvSchema);

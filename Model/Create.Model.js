const mongoose = require("mongoose");

const createSchema = mongoose.Schema({
  Name: {
    type: String,
    required: true,
  },
  Image: {
    type: String,
    required: true,
  },
  Specialization: {
    type: String,
    required: true,
  },
  Experience: {
    type: Number,
    required: true,
  },
  Location: {
    type: String,
    required: true,
  },
  Date: {
    type: String,
    required: true,
  },

  Slots: {
    type: Number,
    required: true,
  },
  Fees: {
    type: Number,
    required: true,
  }
});

const Createmodel = mongoose.model("Create", createSchema);
module.exports = Createmodel;
const mongoose = require("mongoose");

const createSchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  image: {
    type: String,
    required: true,
  },
  specialization: {
    type: String,
    required: true,
  },
  experience: {
    type: Number,
    required: true,
  },
  location: {
    type: String,
    required: true,
  },
  date: {
    type: String,
    required: true,
  },

  slots: {
    type: Number,
    required: true,
  },
  fee: {
    type: Number,
    required: true,
  },
});

const Createmodel = mongoose.model("Create", createSchema);
module.exports = Createmodel;

// {
// 	  "name": "Jane Doe",
// 	  "image": "https://example.com/doctor-image.jpg",
// 	  "specialization": "Dermatologist",
// 	  "experience": 10,
// 	  "location": "Los Angeles",
// 	  "date": "2023-04-05T12:00:00.000Z",
// 		"slots" : 2,
// 	  "fee": 150
// 	}
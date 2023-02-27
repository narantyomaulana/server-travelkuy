const mongoose = require("mongoose");

const memberSchema = new mongoose.Schema({
  firstName: {
    type : String,
    required: true // validasi mongoose
  },
  lastName: {
    type : String,
    required: true // validasi mongoose
  },
  email: {
    type : String,
    required: true // validasi mongoose
  },
  phoneNumber: {
    type : String,
    required: true // validasi mongoose
  }
})

module.exports = mongoose.model('Member', memberSchema)
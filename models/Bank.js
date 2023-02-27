const mongoose = require("mongoose");

const bankSchema = new mongoose.Schema({
  nameBank: {
    type : String,
    required: true // validasi mongoose
  },
  nomorRekening: {
    type : String,
    required: true // validasi mongoose
  },
  name: {
    type : String,
    required: true // validasi mongoose
  },
  imageUrl : {
    type : String,
    required: true
  }
})

module.exports = mongoose.model('Bank', bankSchema)
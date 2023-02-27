const mongoose = require("mongoose");
const {ObjectId} = mongoose.Schema;

const featureSchema = new mongoose.Schema({
  name: {
    type : String,
    required: true // validasi mongoose
  },
  qty: {
    type : Number,
    required: true // validasi mongoose
  },
  imageUrl: {
    type : String,
    required: true // validasi mongoose
  },
  itemId : {
    type : ObjectId,
    ref : 'Item'
  }
})

module.exports = mongoose.model('Feature', featureSchema)
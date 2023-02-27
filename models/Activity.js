const mongoose = require("mongoose");
const {ObjectId} = mongoose.Schema;

const activitySchema = new mongoose.Schema({
  name: {
    type : String,
    required: true // validasi mongoose
  },
  type: {
    type : String,
    required: true // validasi mongoose
  },
  imageUrl: {
    type : String,
    required: true // validasi mongoose
  },
  isPopular: {
    type : Boolean,
  },
  itemId : {
    type : ObjectId,
    ref : 'Item'
  }
})

module.exports = mongoose.model('Activity', activitySchema)
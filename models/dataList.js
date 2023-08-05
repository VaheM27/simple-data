const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const dataSchema = new Schema({
  name: {
    type: String,
    required: false,
  },
  img: {
    type: String,
    required: false,
  },
  id: {
    type: Number,
    required: false,
  },
});

module.exports = mongoose.model("data", dataSchema);

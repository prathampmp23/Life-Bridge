const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const campSchema = new Schema({
  name: String,
  place: String,
  date: String,
  time: String,
});

module.exports = mongoose.model("Camp", campSchema);

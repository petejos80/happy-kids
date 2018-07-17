const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ItemSchema = new Schema({
  name: { type: String, required: true },
  price: { type: String, required: true },
  description: String,
  date: { type: Date, default: Date.now }
});

const Item = mongoose.model("Item", ItemSchema);

module.exports = Item;

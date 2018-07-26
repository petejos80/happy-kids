const mongoose = require("mongoose");
const db = require("../models");
mongoose.Promise = global.Promise;

// This file empties the Books collection and inserts the books below

mongoose.connect(
  process.env.MONGODB_URI || "mongodb://localhost/happykids",
  {
    useMongoClient: true
  }
);

const itemSeed = [
  {
    name: "beads 1",
    image: "www.image.com",
    price: "111",
    category: "Beads",
    description: "Beads galore",
    date: new Date(Date.now())
  },
  
  {
    name: "beads 222",
    image: "www.image222.com",
    price: "222",
    category: "Beads",
    description: "Beads galore",
    date: new Date(Date.now())
  },

];


db.Item
  .remove({})
  .then(() => db.Item.collection.insertMany(itemSeed))
  .then(data => {
    console.log(data.insertedIds.length + " records inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });

const mongoose = require("mongoose");
const db = require("../models");
// mongoose.Promise = global.Promise;

// This file empties the Books collection and inserts the books below

mongoose.connect(
  process.env.MONGODB_URI || "mongodb://localhost/happykids",
  // { useNewUrlParser: true }
);

const itemSeed = [
  {
    name: "PACIFIER HOLDER",
    image: "https://scontent.ffcm1-1.fna.fbcdn.net/v/t1.0-9/28055832_324404991381078_8035239833306901251_n.jpg?_nc_cat=0&oh=e7d1fb602937a82721b986a8a1915104&oe=5BCB4663",
    price: "$12",
    category: "Pacifierholders",
    description: "✅You will never loose the pacifier again!",
    date: new Date(Date.now())
  },
  
  {
    name: "BRACELET",
    image: "https://scontent.ffcm1-1.fna.fbcdn.net/v/t1.0-9/28166653_324404981381079_1022978304039791748_n.jpg?_nc_cat=0&oh=9e0b4483d30ada13378d5c77d68a234f&oe=5BCAE5C0",
    price: "$8",
    category: "Bracelets",
    description: "✨Measure your little girl’s wrist to order one",
    date: new Date(Date.now())
  },

  {
    name: "",
    image: "",
    price: "",
    category: "",
    description: "",
    date: new Date(Date.now())
  },

  {
    name: "",
    image: "",
    price: "",
    category: "",
    description: "",
    date: new Date(Date.now())
  },

  {
    name: "",
    image: "",
    price: "",
    category: "",
    description: "",
    date: new Date(Date.now())
  },

  {
    name: "",
    image: "",
    price: "",
    category: "",
    description: "",
    date: new Date(Date.now())
  },

];


db.Item
  .remove({})
  .then(() => db.Item.collection.insertMany(itemSeed))
  .then(data => {
    console.log(data.result.n + " records inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });

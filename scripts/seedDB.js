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
    name: "KEY CHAIN",
    image: "https://scontent.ffcm1-1.fna.fbcdn.net/v/t1.0-9/28167315_324405028047741_1848136023893733710_n.jpg?_nc_cat=0&oh=dff2e5b8ed8ddf51b838518fd4fe3a1d&oe=5BDA532E",
    price: "$7",
    category: "Keychains",
    description: "✅Personalize it with any name or word (“home”, “house”, “garage”, etc)",
    date: new Date(Date.now())
  },

  {
    name: "TEETHER WITH SENSORY LOOP",
    image: "https://scontent.ffcm1-1.fna.fbcdn.net/v/t1.0-9/28276418_324405004714410_8704849844905985608_n.jpg?_nc_cat=0&oh=3f5eeda3582c05a823cfa06406e68a00&oe=5BD58347",
    price: "$15",
    category: "Teethers",
    description: "✅The wooden ring is a natural teether. Your little one will love to chew on it.",
    date: new Date(Date.now())
  },

  {
    name: "RATTLING TEETHER",
    image: "https://scontent.ffcm1-1.fna.fbcdn.net/v/t1.0-9/27867696_324405048047739_8624340297793119802_n.jpg?_nc_cat=0&oh=3057259ddc853b3fe0972e388ea7701c&oe=5BCE26E5",
    price: "$18",
    category: "Rattlers",
    description: "✅The most popular toy. Unique and so special, made with love. All the knots securely sealed.",
    date: new Date(Date.now())
  },

  {
    name: "TEETHER BEADS",
    image: "https://scontent.ffcm1-1.fna.fbcdn.net/v/t1.0-9/28059215_325633197924924_8483100059065651402_n.jpg?_nc_cat=0&oh=526e69f6a42a3dc09ba57b7470d9b67d&oe=5C08C15E",
    price: "$3",
    category: "Beads",
    description: "You can add extra beeads or teethers to any toy.",
    date: new Date(Date.now())
  },

  // {
  //   name: "",
  //   image: "",
  //   price: "",
  //   category: "",
  //   description: "",
  //   date: new Date(Date.now())
  // },

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

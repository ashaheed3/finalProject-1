const mongoose = require('mongoose');
const db = require('../models');
const config = require('config');
const mongodb = config.get('MONGODB_URI');

// Connect to the Mongo DB
mongoose.connect(mongodb, {
  useUnifiedTopology: true,
  useNewUrlParser: true,
  useCreateIndex: true,
});

const favoriteSeed = [
  {
    id: '1',
    videoID: '1',
    image: 'http://img.recipepuppy.com/152332.jpg',
    sourceUrl: 'http://www.recipezaar.com/BBQd-Cheeseburger-Pizza-299376',
    ingredients: [
      {
        id: '11',
        name: 'worcestershire sauce',
      },
      { id: '12', name: 'chili sauce' },
      { id: '13', name: 'mustard' },
    ],
    title: "BBQ'd Cheeseburger Pizza ",
    user: '',
  },
];
db.Favorites.remove({})
  .then(() => db.Favorites.collection.insertMany(favoriteSeed))
  .then((data) => {
    console.log(data.result.n + ' records inserted in Favorites!');
    process.exit(0);
  })
  .catch((err) => {
    console.error(err);
    process.exit(1);
  });

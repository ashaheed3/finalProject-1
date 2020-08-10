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
    user: '5f2f08c9faa0321d34b61e8a',
    id: '1',
    videoID: '1',
    image: 'http://img.recipepuppy.com/360322.jpg',
    sourceUrl:
      'http://www.recipezaar.com/Deviled-Beef-Hamburger-Patties-277747',
    ingredients: [
      {
        id: '11',
        name: 'worcestershire sauce',
      },
      { id: '12', name: 'chili sauce' },
      { id: '13', name: 'mustard' },
    ],
    title: 'Deviled Beef Hamburger Patties ',
  },
  {
    user: '5f2f08c9faa0321d34b61e8b',
    id: '2',
    videoID: '2',
    image: 'http://img.recipepuppy.com/16323.jpg',
    sourceUrl:
      'http://allrecipes.com/Recipe/Tomato-Mint-Quinoa-Salad/Detail.aspx',
    ingredients: [
      {
        id: '11',
        name: 'worcestershire sauce',
      },
      { id: '12', name: 'chili sauce' },
      { id: '13', name: 'mustard' },
    ],
    title: 'Tomato-Mint Quinoa Salad ',
  },
  {
    id: '3',
    videoID: '3',
    image: 'http://img.recipepuppy.com/33726.jpg',
    sourceUrl: 'http://www.recipezaar.com/Quinoa-Salad-331992',
    ingredients: [
      {
        id: '11',
        name: 'worcestershire sauce',
      },
      { id: '12', name: 'chili sauce' },
      { id: '13', name: 'mustard' },
    ],
    title: 'Quinoa Salad ',
  },
  {
    id: '4',
    videoID: '4',
    image: 'http://img.recipepuppy.com/43199.jpg',
    sourceUrl: 'http://www.recipezaar.com/Quinoa-Pilaf-103775',
    ingredients: [
      {
        id: '11',
        name: 'worcestershire sauce',
      },
      { id: '12', name: 'chili sauce' },
      { id: '13', name: 'mustard' },
    ],
    title: 'Quinoa Pilaf ',
  },
  {
    id: '5',
    videoID: '5',
    image: 'http://img.recipepuppy.com/267093.jpg',
    sourceUrl: 'http://www.grouprecipes.com/11241/home-fried-chicken.html',
    ingredients: [
      {
        id: '11',
        name: 'worcestershire sauce',
      },
      { id: '12', name: 'chili sauce' },
      { id: '13', name: 'mustard' },
    ],
    title: 'Home Fried Chicken Recipe ',
  },
  {
    id: '6',
    videoID: '6',
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
  },
];

const userSeed = [
  {
    firstName: 'Aja',
    lastName: 'Reeves',
    emailAddress: 'areeves@gmail.com',
    username: 'areeves',
    password: '123345',
    avatar: 'avatar',
    preferences: ['pescatarian', 'gluten-free'],
    date: '',
  },
  {
    firstName: 'Ayanna',
    lastName: 'Shaheed',
    emailAddress: 'ashaheed@gmail.com',
    username: 'ashaheed',
    password: '673310',
    avatar: 'avatar',
    preferences: [],
    date: '',
  },
  {
    firstName: 'Danielle',
    lastName: 'Beaty',
    emailAddress: 'dbeaty@gmail.com',
    username: 'dbeaty',
    password: '674510',
    avatar: 'avatar',
    preferences: ['pescatarian', 'vegetarian'],
    date: '',
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

/*db.User.remove({})
  .then(() => db.User.collection.insertMany(userSeed))
  .then((data) => {
    console.log(data.result.n + ' records inserted in User!');
    process.exit(0);
  })
  .catch((err) => {
    console.error(err);
    process.exit(1);
  });*/

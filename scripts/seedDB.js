const mongoose = require('mongoose');
const db = require('../models');

const mongodb =
  'mongodb+srv://clemsontigress:clemsontigress@saucecode.ibpgg.mongodb.net/favoriteRecipes?retryWrites=true&w=majority';
// Connect to the Mongo DB
mongoose.connect(mongodb, {
  useUnifiedTopology: true,
  useNewUrlParser: true,
  useCreateIndex: true,
});

const favoriteSeed = [
  {
    thumbnail: '',
    href: 'http://www.recipezaar.com/Baked-Turkey-Sausage-Penne-327796',
    ingredients: [
      'mozzarella cheese',
      'red pepper flakes',
      'tomato',
      'basil',
      'oregano',
      'thyme',
      'penne',
      'garlic',
      'green pepper',
      'black pepper',
      'kosher salt',
      'olive oil',
      'pasta sauce',
      'red onions',
      'red pepper',
      'turkey sausage',
    ],
    title: 'Baked Turkey Sausage Penne ',
  },
  {
    thumbnail: '',
    href:
      'http://allrecipes.com/Recipe/Homemade-Italian-Turkey-Sausage/Detail.aspx',
    ingredients: [
      'oregano',
      'fennel seed',
      'garlic powder',
      'turkey',
      'black pepper',
      'salt',
      'sugar',
    ],
    title: 'Homemade Italian Turkey Sausage ',
  },
  {
    thumbnail: 'http://img.recipepuppy.com/3130.jpg',
    href: 'http://allrecipes.com/Recipe/Turkey-Sausage-Breakfast/Detail.aspx',
    ingredients: [
      'cheddar cheese',
      'eggs',
      'green onion',
      'milk',
      'turkey sausage',
    ],
    title: 'Turkey Sausage Breakfast ',
  },
  {
    thumbnail: '',
    href: 'http://allrecipes.com/Recipe/Tuscan-Turkey-Sausage-Soup/Detail.aspx',
    ingredients: [
      'caraway seed',
      'fennel seed',
      'italian seasoning',
      'turkey sausage',
      'leek',
      'onions',
      'chicken broth',
      'seasoning',
    ],
    title: 'Tuscan Turkey Sausage Soup ',
  },
  {
    thumbnail: '',
    href: 'http://allrecipes.com/Recipe/Turkey-Sausage-Pie/Detail.aspx',
    ingredients: ['green pepper', 'olive oil', 'onions', 'turkey sausage'],
    title: 'Turkey Sausage Pie ',
  },
  {
    thumbnail: 'http://img.recipepuppy.com/234741.jpg',
    href:
      'http://www.grouprecipes.com/74096/turkey-sausage-stuffed-zucchini.html',
    ingredients: [
      'bread crumbs',
      'chicken broth',
      'garlic',
      'turkey',
      'onions',
      'tomato',
      'parmesan cheese',
      'fennel seed',
      'basil',
      'olive oil',
      'red pepper flakes',
      'salt',
      'poultry seasoning',
      'thyme',
      'sage',
      'oregano',
      'black pepper',
      'garlic powder',
      'zucchini',
    ],
    title: 'Turkey Sausage Stuffed Zucchini Recipe ',
  },
  {
    thumbnail: '',
    href:
      'http://allrecipes.com/Recipe/Potato-and-Turkey-Sausage-Soup/Detail.aspx',
    ingredients: [
      'celery',
      'half and half',
      'margarine',
      'onions',
      'potato',
      'salt',
      'water',
    ],
    title: 'Potato and Turkey Sausage Soup ',
  },
  {
    thumbnail: 'http://img.recipepuppy.com/8496.jpg',
    href:
      'http://allrecipes.com/Recipe/Moms-Turkey-Sausage-Patties/Detail.aspx',
    ingredients: [
      'black pepper',
      'cayenne',
      'sage',
      'ginger',
      'salt',
      'turkey',
    ],
    title: "Mom's Turkey Sausage Patties ",
  },
  {
    thumbnail: 'http://img.recipepuppy.com/128166.jpg',
    href:
      'http://www.epicurious.com/recipes/food/views/Turkey-Sausage-Patties-350914',
    ingredients: [
      'cayenne',
      'cinnamon',
      'cloves',
      'bread crumbs',
      'turkey',
      'egg yolks',
      'milk',
      'nutmeg',
      'onions',
      'olive oil',
    ],
    title: 'Turkey Sausage Patties ',
  },
  {
    thumbnail: 'http://img.recipepuppy.com/34541.jpg',
    href:
      'http://www.recipezaar.com/EAZY-PEEZY-PIZZA-DOUGH-Bread-Machine-Pizza-Dough-35805',
    ingredients: [
      'bread flour',
      'yeast',
      'olive oil',
      'salt',
      'sugar',
      'water',
    ],
    title: 'Easy Peezy Pizza Dough (Bread Machine Pizza Dough) ',
  },
];

db.Favorites.remove({})
  .then(() => db.Favorites.collection.insertMany(favoriteSeed))
  .then((data) => {
    console.log(data.result.n + ' records inserted!');
    process.exit(0);
  })
  .catch((err) => {
    console.error(err);
    process.exit(1);
  });

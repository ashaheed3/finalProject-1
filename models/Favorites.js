const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const favoritesSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },

  thumbnail: {
    type: String,
    default: '',
  },

  href: {
    type: String,
    default: '',
    unique: true,
  },

  ingredients: [String],
});

const Favorites = mongoose.model('Favorites', favoritesSchema);

module.exports = Favorites;

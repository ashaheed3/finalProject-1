const mongoose = require('mongoose');

const FavoritesSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
  },

  id: {
    type: String,
  },

  title: {
    type: String,
  },

  sourceUrl: {
    type: String,
    default: '',
  },

  videoID: {
    type: String,
  },

  image: {
    type: String,
    default: '',
  },

  ingredients: [
    {
      id: {
        type: String,
      },

      name: {
        type: String,
      },
    },
  ],
});

module.exports = Favorites = mongoose.model('favorites', FavoritesSchema);

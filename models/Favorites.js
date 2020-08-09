const mongoose = require('mongoose');

const FavoritesSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'user',
  },

  id: {
    type: String,
  },

  title: {
    type: String,
  },

  sourceUrl: {
    type: String,
  },

  videoID: {
    type: String,
  },

  image: {
    type: String,
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

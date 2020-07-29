const router = require('express').Router();
const Favorites = require('../models/Favorites.js');

router.post('/api/favorites', ({ body }, res) => {
  Favorites.create(body)
    .then((dbFavorites) => {
      res.json(dbFavorites);
    })
    .catch((err) => {
      res.status(400).json(err);
    });
});

router.get('/api/favorites', (req, res) => {
  Favorites.find({})
    .then((dbFavorites) => {
      res.json(dbFavorites);
    })
    .catch((err) => {
      res.status(400).json(err);
    });
});

module.exports = router;

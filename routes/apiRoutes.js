const router = require('express').Router();
const Favorites = require('../models/Favorites.js');
const user = require('../models/user.js');

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

//how to search for one user?
router.get('/api/user', (req, res) => {
  user
    .findOne({ name: { $regex: new RegExp(req.query.q, 'i') } })
    .then((dbuser) => {
      res.json(dbuser);
    })
    .catch((err) => {
      res.status(400).json(err);
    });
});

router.post('/api/user', ({ body }, res) => {
  user
    .create(body)
    .then((dbuser) => {
      res.json(dbuser);
    })
    .catch((err) => {
      res.status(400).json(err);
    });
});

module.exports = router;

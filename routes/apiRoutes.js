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

//how to search for one user?? this is just a test without auth token
router.get('/api/user/test', (req, res) => {
  user
    .findOne({ firstName: 'Danielle' })
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

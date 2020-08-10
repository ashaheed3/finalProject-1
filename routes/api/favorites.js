const express = require('express');
const router = express.Router();
const auth = require('../../middleware/auth');
const Favorites = require('../../models/Favorites');
const User = require('../../models/user');



//@route GET api/favorites/myfavorites
//@desc Get favorites of current user 
//@access Protected

router.get('/myfavorites', auth,
    async (req, res) => {
    
    try{
        const favorites = await Favorites.find({user: req.user.id}).populate( 'user', ['firstName', 'lastName', 'username', 'emailAddress', 'preferences', 'avatar', 'date']);

        if(!favorites){
            return res.status(400).json({msg: "This user doesn't have any favorites"});
        }

        res.json(favorites);
        
    } catch(err){
        console.error(err.message);
        res.status(500).send('Server Error');
    }
});

//@route POST api/favorites/myfavorites
//@desc Add to favorites 
//@access Protected
router.post('/myfavorites', auth,
    async (req, res) =>{

        const {
            id,
            title,
            sourceUrl,
            videoID,
            image,
            ingredients
        } = req.body;

        const favoritesFields ={};

        favoritesFields.user = req.user.id;
        favoritesFields.id = id;
        favoritesFields.title = title;
        favoritesFields.sourceUrl = sourceUrl;
        favoritesFields.videoID = videoID;
        favoritesFields.image = image;
        favoritesFields.ingredients = ingredients;

        try{

            favorite = new Favorites(favoritesFields);

            await favorite.save();
            res.json(favorite);
        }catch(err) {
            console.error(err.message);
            res.status(500).send('Server Error')
        }
});

//@route DELETE api/favorites/myfavorites/:id
//@desc Deletes a favorite 
//@access Protected
router.delete('/myfavorites/:id', auth,
    async (req, res) => {

        try{
            await Favorites.findOneAndRemove({id: req.params.id });

            res.json({msg: 'Recipe deleted'})
        }catch (err){
            console.error(err.messsage);
            res.status(500).send('Server Error');
        }
    })

module.exports = router;
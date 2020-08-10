const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const config = require('config');
const gravatar = require('gravatar')
const {check, validationResult} = require('express-validator');

const User = require('../../models/user');
const { JsonWebTokenError } = require('jsonwebtoken');



router.post(
    '/',
    [
        check('firstName', 'Last name is required').not().isEmpty(),
        check('lastName', "First name is required").not().isEmpty(),
        check('emailAddress', 'Email address is required').isEmail(),
        check('username', 'Username is required').not().isEmpty(),
        check('password', 'Please enter a password with 6 or more characters').isLength({min: 6})
    ],
    async (req, res) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()){
            return res.status(400).json({errors:errors.array()});
        }

        const {firstName, lastName, username, emailAddress, password, preferences} = req.body;

        try {

        // See if user exists
            let user = await User.findOne({username});

            if(user){
                return res.status(400).json({errors: [{msg: 'User already exists'}]})  
          }

          const avatar = gravatar.url(emailAddress, {
              s: '200',
              r: 'pg',
              d:'mm'
          })

        // Encrypt password
          user = new User({
              firstName,
              lastName,
              username,
              emailAddress,
              password,
              preferences,
              avatar
          });

          const salt = await bcrypt.genSalt(10);

          user.password = await bcrypt.hash(password, salt);

          await user.save();

        // Return jsonwebtoken
          const payload = {
              user: {
                  id: user.id
              }
          }

          jwt.sign(
              payload, 
              config.get('jwtSecret'),
              {expiresIn:360000},
              (err, token) => {
                  if (err) throw err;
                  res.json({token});
              });
        
        } catch(err){
            console.error(err.message);
            res.status(500).send('Server error');
        }
})

module.exports = router;
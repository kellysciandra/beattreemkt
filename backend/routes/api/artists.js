const express = require("express");
const router = express.Router();
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const keys = require("../../config/keys");
const passport = require("passport");

// image 
const multer = require('multer');
const path = require('path');

// Load input validation
const validateRegisterInput = require("../../validation/register");
const validateLoginInput = require("../../validation/login");
// Load Artist model
const Artist = require("../../models/Artist");


// @route POST api/artists/register
// @desc Register artist
// @access Public
router.post("/register", (req, res) => {
    // Form validation
  const { errors, isValid } = validateRegisterInput(req.body);
  // Check validation
    if (!isValid) {
      return res.status(400).json(errors);
    }
  Artist.findOne({ email: req.body.email }).then(artist => {
      if (artist) {
        return res.status(400).json({ email: "Email already exists" });
      } else {
        const newArtist = new Artist({
          name: req.body.name,
          email: req.body.email,
          password: req.body.password
        });
  // Hash password before saving in database
        bcrypt.genSalt(10, (err, salt) => {
          bcrypt.hash(newArtist.password, salt, (err, hash) => {
            if (err) throw err;
            newArtist.password = hash;
            newArtist
              .save()
              .then(artist => res.json(artist))
              .catch(err => console.log(err));
          });
        });
      }
    });
  });



  // @route POST api/artists/login
// @desc Login urtist and return JWT token
// @access Public
router.post("/login", (req, res) => {
    // Form validation
  const { errors, isValid } = validateLoginInput(req.body);
  // Check validation
    if (!isValid) {
      return res.status(400).json(errors);
    }
    const email = req.body.email;
    const password = req.body.password;
  // Find artist by email
    Artist.findOne({ email }).then(artist => {
      // Check if user exists
      if (!artist) {
        return res.status(404).json({ emailnotfound: "Email not found" });
      }
  // Check password
      bcrypt.compare(password, artist.password).then(isMatch => {
        if (isMatch) {
          // User matched
          // Create JWT Payload
          const payload = {
            id: artist.id,
            email: artist.email,
            name: artist.name,
            spotify_url: artist.spotify_url,
            instagram_url: artist.instagram_url,
            bio: artist.bio,
            software: artist.software, 
            genre: artist.genre, 
            image: artist.image, 
            beat: artist.beat
          };
          console.log(payload)
  // Sign token
          jwt.sign(
            payload,
            keys.secretOrKey,
            {
              expiresIn: 31556926 // 1 year in seconds
            },
            (err, token) => {
              res.json({
                success: true,
                token: "Bearer " + token
              });
            }
          );
        } else {
          return res
            .status(400)
            .json({ passwordincorrect: "Password incorrect" });
        }
      });
    });
  });
  
  router.get('/', async (req, res) => {
    try {
      const artist = await Artist.find()
        res.json(artist)
    } catch (err) {
      res.status(500).json({ message: err.message })
    }
  })


  router.patch( 
    "/update/",
    passport.authenticate("jwt", { session: false }),
    (req, res) => { console.log('hit')
      let artistFields = {};
        artistFields.spotify_url = req.body.spotify_url;
        artistFields.instagram_url = req.body.instagram_url;
        artistFields.software = req.body.software;
        artistFields.genre = req.body.genre;
        artistFields.bio = req.body.bio;
        artistFields.image = req.body.image;
        artistFields.beat = req.body.beat;

      Artist.findOneAndUpdate( 
        { _id: req.body._id },
        { $set: artistFields },
        { new: true, useFindAndModify: false }
      )
        .then(artist => { console.log(artist)
          return res.json(artist)
        })
        .catch(err => console.log(err))
    }
  )



// images 

var storage = multer.diskStorage({
    destination: function (req, file, cb) {
      console.log(file) 
      cb(null, 'public/uploads')
    },
    filename: function (req, file, cb) {
      cb(null, file.fieldname + '-' + Date.now())
    }
});
var upload = multer({dest: '../public/uploads'});


  router.post( "/image/upload", upload.single('image'), function (req, res, err) {
    console.log("success");
    console.log(req.body);
    let artistFields = {};
    artistFields.image = req.body.file;

    Artist.findOneAndUpdate( 
      { _id: req.body._id },
      { $set: artistFields },
      { new: true, useFindAndModify: false }
    )
      .then(artist => { console.log(artist)
        return res.json(artist)
      })
      .catch(err => console.log(err))
  })


  
  module.exports = router;



const mongoose = require("mongoose");
const Schema = mongoose.Schema;
// Create Schema
const ArtistSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true
  },
  spotify_url: {
    type: String,
    required: false
  },
  instagram_url: {
    type: String,
    required: false
  },
  software: {
    type: String, 
    required: false
  },
  genre: {
    type: String, 
    required: false
  },
  bio: {
    type: String, 
    required: false
  }
});
module.exports = Artist = mongoose.model("artists", ArtistSchema);
const JwtStrategy = require("passport-jwt").Strategy;
const ExtractJwt = require("passport-jwt").ExtractJwt;
const mongoose = require("mongoose");
const Artist = mongoose.model("artists");

const keys = require("../config/keys");
const opts = {};
opts.jwtFromRequest = ExtractJwt.fromAuthHeaderAsBearerToken();
opts.secretOrKey = keys.secretOrKey;

module.exports = passport => {
  passport.use(
    new JwtStrategy(opts, (jwt_payload, done) => {
      Artist.findById(jwt_payload.id)
        .then(artist => {
          if (artist) {
            return done(null, artist);
          }
          return done(null, false);
        })
        .catch(err => console.log(err));
    })
  );
};


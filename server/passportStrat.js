const passport = require("passport");
const FacebookStrategy = require("passport-facebook");

const User = require("./models/userModel");
const keys = require("./keys");

passport.serializeUser((user, done) => {
  done(null, user.id);
});

passport.deserializeUser((id, done) => {
  User.findById(id).then(user => {
    done(null, user);
  });
});

// Facebook Strategy
passport.use(
  new FacebookStrategy(
    {
      // options for the facebook strategy
      callbackURL: "/auth/facebook/redirect",
      clientID: keys.facebook.clientID,
      clientSecret: keys.facebook.clientSecret,
      profileFields: ["id", "name", "email", "picture.type(large)"],
      enableProof: true
    },
    (accessToken, refreshToken, profile, done) => {
      profile = profile._json;
      // console.log(profile);
      // check if user already exists
      User.findOne({ facebookId: profile.id }).then(currentUser => {
        if (currentUser) {
          // user exists
          console.log(profile.displayName + " logged in");
          done(null, currentUser);
        } else {
          // user doesn't exist
          new User({
            username: profile.first_name + " " + profile.last_name,
            firstName: profile.first_name,
            lastName: profile.last_name,
            email: profile.email,
            imageUrl: profile.picture.data.url,
            facebookId: profile.id
          })
            .save()
            .then(newUser => {
              console.log(
                newUser.username + " created a HiveMind account using Facebook"
              );
              done(null, newUser);
            });
        }
      });
    }
  )
);

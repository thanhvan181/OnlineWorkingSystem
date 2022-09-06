const GoogleStrategy = require('passport-google-oauth20').Strategy;
const passport = require('passport');
const environment = require('./environment.config');

passport.use(
  new GoogleStrategy(
    {
      clientID: environment.google.clientID,
      clientSecret: environment.google.clientSecret,
      callbackURL: '/v1/auth/google/callback',
    },
    (accessToken, refreshToken, profile, done) => {
      console.log({googleId: profile.id});
      return done(null, profile);
    }
  )
);

passport.serializeUser((user, done) => {
  done(null, user);
});

passport.deserializeUser((user, done) => {
  done(null, user);
});

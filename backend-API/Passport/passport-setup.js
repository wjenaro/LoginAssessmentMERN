const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const User = require('./models/User');
require('dotenv').config();

// Configure Passport to use Google OAuth
passport.use(new GoogleStrategy({
    clientID: process.env.GOOGLE_CLIENT_ID,
    clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    callbackURL: '/auth/google/callback'
  },
  async (accessToken, refreshToken, profile, done) => {
    // Check if user already exists in our DB
    const existingUser = await User.findOne({ googleId: profile.id });
    if (existingUser) {
      // Already have the user
      return done(null, existingUser);
    }
    
    // If not, create a new user in our DB
    const newUser = await new User({
      googleId: profile.id,
      username: profile.displayName,
      email: profile.emails[0].value
    }).save();

    done(null, newUser);
  }
));

// Serialize user to store in session
passport.serializeUser((user, done) => {
  done(null, user.id);
});

// Deserialize user from session
passport.deserializeUser(async (id, done) => {
  const user = await User.findById(id);
  done(null, user);
});

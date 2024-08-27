
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const cookieParser = require('cookie-parser');
const session = require('express-session');
const passport = require('passport'); // Import passport from passport library
const userRouter = require('./Routers/userAuth');
const userProfile = require('./Routers/profile');
require('dotenv').config();
require('./Passport/passport-setup');

const app = express();

// Middleware

app.use(cors({
  origin: 'http://localhost:5173', 
  methods: 'GET,POST,PUT,DELETE',
  credentials: true, 
}));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

// Session middleware
app.use(session({
  secret: process.env.SESSION_SECRET, // Ensure you have a session secret in your .env file
  resave: false,
  saveUninitialized: false,
  cookie: { secure: process.env.NODE_ENV === 'production' } // Set cookie to secure in production
}));

// Initialize Passport and restore authentication state from session
app.use(passport.initialize());
app.use(passport.session());

// Routes
app.use('/api', userRouter);
app.use('/api', userProfile);

// Database connection and server startup
const PORT = process.env.PORT || 4000;

async function connectToDatabase() {
  try {
    await mongoose.connect(process.env.MONGOOSE_URL);
    console.log('Database connected successfully');
  } catch (error) {
    console.error('Error connecting to the database:', error);
    process.exit(1);
  }
}

function startServer() {
  app.listen(PORT, (err) => {
    if (err) {
      console.error(`Error starting server: ${err}`);
    } else {
      console.log(`Server running at http://localhost:${PORT}`);
    }
  });
}

connectToDatabase().then(startServer);

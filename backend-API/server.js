// server.js
const express = require('express');
const mongoose = require('mongoose');
const userRouter = require('./Routers/userAuth');
require('dotenv').config();

const app = express();

// Middleware to parse JSON bodies and URL-encoded data
app.use(express.json()); // For parsing application/json
app.use(express.urlencoded({ extended: true })); // For parsing application/x-www-form-urlencoded

const PORT = process.env.PORT || 3000; // Default to 3000 if PORT is not defined

async function connectToDatabase() {
  try {
    await mongoose.connect(process.env.MONGOOSE_URL, {
    
    });
    console.log('Database connected successfully');
  } catch (error) {
    console.error('Error connecting to the database:', error);
    process.exit(1);
  }
}

// Use the user routes
app.use('/api', userRouter);

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

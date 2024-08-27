// Import the express and mongoose packages
const express = require('express');
const mongoose = require('mongoose');
const userRouter = require('./Routers/userAuth');
require('dotenv').config();

// Create an instance of the express application
const app = express();

// Middleware to parse JSON bodies
app.use(express.json());

// Define the port number from environment variables
const PORT = process.env.PORT || 3000; // Default to 3000 if PORT is not defined

// Connect to the MongoDB database
async function connectToDatabase() {
  try {
    await mongoose.connect(process.env.MONGOOSE_URL, {
  
    });
    console.log('Database connected successfully');
  } catch (error) {
    console.error('Error connecting to the database:', error);
    process.exit(1); // Exit process with failure code
  }
}

// Middleware to parse JSON bodies
app.use(express.json());
app.use(express.urlencoded({ extended: true }));


// Use the user routes
app.use('/api', userRouter);

// Start the server and listen on the specified port
function startServer() {
  app.listen(PORT, (err) => {
    if (err) {
      console.error(`Error starting server: ${err}`);
    } else {
      console.log(`Server running at http://localhost:${PORT}`);
    }
  });
}

// Run database connection and start the server
connectToDatabase().then(startServer);

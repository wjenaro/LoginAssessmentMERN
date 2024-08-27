// Import the express package
const express = require('express');
require('dotenv').config();

// Create an instance of the express application
const app = express();

// Define the port number
const PORT = process.env.PORT;

// Start the server and listen on the specified port
app.listen(PORT, (err) => {
  if (err) {
    // Log an error message if the server fails to start
    console.error(`Error starting server: ${err}`);
  } else {
    // Log a success message if the server starts successfully
    console.log(`Server running at http://localhost:${PORT}`);
  }
});

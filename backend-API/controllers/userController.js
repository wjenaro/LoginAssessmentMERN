// controllers/userController.js
const bcrypt = require('bcrypt');
const User = require('../models/User'); // Ensure the path is correct

// Signup controller function
const signup = async (req, res) => {
  const { email, username, password } = req.body;

  // Log incoming data for debugging
  console.log('Received data:', { email, username, password });

  try {
    // Check if user already exists
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ message: 'User already exists' });
    }

    // Check if password is provided
    if (!password) {
      return res.status(400).json({ message: 'Password is required' });
    }

    // Hash the password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Create a new user
    const newUser = new User({
      email,
      username,
      password: hashedPassword
    });

    // Save the user to the database
    await newUser.save();

    res.status(201).json({ message: 'User registered successfully' });

  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Server error' });
  }
};

module.exports = {
  signup
};

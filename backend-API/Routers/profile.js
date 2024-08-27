// // In your server.js or a routes file
// const express = require('express');
// const router = express.Router();
// const jwt = require('jsonwebtoken');
// const User = require('../models/User'); 

// // Middleware to authenticate user based on JWT
// const authenticate = (req, res, next) => {
//   const token = req.cookies.token;
//   if (!token) return res.status(401).json({ message: 'Unauthorized' });

//   jwt.verify(token, process.env.JWT_SECRET, async (err, decoded) => {
//     if (err) return res.status(401).json({ message: 'Unauthorized' });

//     req.userId = decoded.userId;
//     next();
//   });
// };

// // GET /api/profile - Fetch user profile
// router.get('/profile', authenticate, async (req, res) => {
//   try {
//     const user = await User.findById(req.userId).select('username'); 
//     if (!user) return res.status(404).json({ message: 'User not found' });

//     res.status(200).json(user);
//   } catch (err) {
//     console.error(err);
//     res.status(500).json({ message: 'Server error' });
//   }
// });

// module.exports = router;


const express = require('express');
const router = express.Router();
const jwt = require('jsonwebtoken');
const User = require('../models/User'); 

// Middleware to authenticate user based on JWT
const authenticate = (req, res, next) => {
  const token = req.cookies.token;
  if (!token) return res.status(401).json({ message: 'Unauthorized' });

  jwt.verify(token, process.env.JWT_SECRET, async (err, decoded) => {
    if (err) return res.status(401).json({ message: 'Unauthorized' });

    req.userId = decoded.userId;
    next();
  });
};

// GET /api/profile - Fetch user profile
router.get('/profile', authenticate, async (req, res) => {
  try {
    const user = await User.findById(req.userId).select('username email'); 
    if (!user) return res.status(404).json({ message: 'User not found' });

    res.status(200).json(user);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Server error' });
  }
});

module.exports = router;

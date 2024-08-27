// const express = require('express');
// const passport = require('passport');
// const { signup, login } = require('../controllers/userController');
// const router = express.Router();

// // Signup route
// router.post('/signup', signup);

// // Login route
// router.post('/login', login);

// // Route to start Google authentication
// router.get('/google', passport.authenticate('google', {
//   scope: ['profile', 'email']
// }));

// // Google callback route
// router.get('/google/callback', passport.authenticate('google'), (req, res) => {
//   res.redirect('/profile'); 
// });

// // Logout route
// router.get('/logout', (req, res) => {
//   req.logout();
//   res.redirect('/');
// });

// // Profile route (example)
// router.get('/profile', (req, res) => {
//   if (req.isAuthenticated()) {
//     res.json(req.user);
//   } else {
//     res.status(401).json({ message: 'Not authenticated' });
//   }
// });

// module.exports = router;
const express = require('express');
const passport = require('passport');
const { signup, login } = require('../controllers/userController');
const router = express.Router();

// Signup route
router.post('/signup', signup);

// Login route
router.post('/login', login);

// Route to start Google authentication
router.get('/google', passport.authenticate('google', {
  scope: ['profile', 'email']
}));

// Google callback route
router.get('/google/callback', passport.authenticate('google', { session: true }), (req, res) => {
  res.redirect('/profile'); 
});

// Logout route
router.get('/logout', (req, res) => {
  req.logout();
  res.redirect('/');
});

// Profile route (example)
router.get('/profile', (req, res) => {
  if (req.isAuthenticated()) {
    res.json(req.user);
  } else {
    res.status(401).json({ message: 'Not authenticated' });
  }
});

module.exports = router;

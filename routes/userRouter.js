const express = require('express');
const userController = require('../controllers/userControllers');
const auth = require('../middleware/auth');

const router = express.Router();

// Public route: GET /api/users
router.route('/')
  .get(userController.getAllUsers);

// Protect all routes below this line (Step 6)
router.use(auth);

// Protected routes
router.route('/')
  .post(userController.createUser);

router.route('/:id')
  .delete(userController.deleteUser);

module.exports = router;
const express = require('express');
const tourController = require('../controllers/tourControllers');
const auth = require('../middleware/auth');

const router = express.Router();

// Public route: GET /api/tours
router.route('/')
  .get(tourController.getAllTours);

// Protect all routes below this line (Step 6)
router.use(auth);

// Protected routes (POST, DELETE, etc.)
router.route('/')
  .post(tourController.createTour);

router.route('/:id')
  .delete(tourController.deleteTour);

module.exports = router;
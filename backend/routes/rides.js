// routes/rides.js

const express = require('express');
const router = express.Router();
const Ride = require('../models/Ride');
const auth = require('../middleware/auth');

// Fetch user ride history.
router.get('/history', auth, async (req, res) => {
  try {
    const rides = await Ride.find({ riderId: req.user.id }).sort({ createdAt: -1 });
    res.status(200).json(rides);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching ride history', error });
  }
});

module.exports = router;

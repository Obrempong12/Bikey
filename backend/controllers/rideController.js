// controllers/rideController.js
const { createRide } = require('../models/Ride');

// Book a new ride.
const bookRide = async (req, res) => {
    const { passenger_id, rider_id, start_location, destination, fare } = req.body;

    try {
        const ride = await createRide(passenger_id, rider_id, start_location, destination, fare);
        res.status(201).json(ride);
    } catch (error) {
        res.status(500).json({ message: 'Server error' });
    }
};

module.exports = { bookRide };

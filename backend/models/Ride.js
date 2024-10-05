// models/Ride.js
const pool = require('../config/db');

// Create the Ride table if it doesn't exist.
const createRideTable = async () => {
    const query = `
    CREATE TABLE IF NOT EXISTS rides (
        id SERIAL PRIMARY KEY,
        passenger_id INTEGER REFERENCES users(id),
        rider_id INTEGER REFERENCES users(id),
        start_location VARCHAR(255) NOT NULL,
        destination VARCHAR(255) NOT NULL,
        fare NUMERIC NOT NULL,
        status VARCHAR(50) DEFAULT 'pending',
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
    )`;
    await pool.query(query);
};

// Insert new ride.
const createRide = async (passenger_id, rider_id, start_location, destination, fare) => {
    const query = `
    INSERT INTO rides (passenger_id, rider_id, start_location, destination, fare)
    VALUES ($1, $2, $3, $4, $5) RETURNING *`;
    const values = [passenger_id, rider_id, start_location, destination, fare];
    const result = await pool.query(query, values);
    return result.rows[0];
};

module.exports = {
    createRideTable,
    createRide,
};

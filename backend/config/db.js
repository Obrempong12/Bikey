// config/db.js
const { Pool } = require('pg');
const dotenv = require('dotenv');

// Load environment variables.
dotenv.config();

// Create a connection pool for PostgreSQL
const pool = new Pool({
    user: process.env.DB_USER,
    host: process.env.DB_HOST,
    database: process.env.DB_NAME,
    password: process.env.DB_PASS,
    port: process.env.DB_PORT,
});

// Connect to the database.
const connectDB = async () => {
    try {
        await pool.connect();
        console.log('PostgreSQL database connected');
    } catch (error) {
        console.error(`Error: ${error.message}`);
        process.exit(1);
    }
};

module.exports = connectDB;

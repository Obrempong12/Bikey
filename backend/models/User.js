// models/User.js
const pool = require('../config/db');

// Create the User table if it doesn't exist.
const createUserTable = async () => {
    const query = `
    CREATE TABLE IF NOT EXISTS users (
        id SERIAL PRIMARY KEY,
        name VARCHAR(100),
        email VARCHAR(100) UNIQUE NOT NULL,
        phone VARCHAR(20) UNIQUE NOT NULL,
        password VARCHAR(100) NOT NULL,
        role VARCHAR(20) NOT NULL,
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
    )`;
    await pool.query(query);
};

// Insert new user
const createUser = async (name, email, phone, password, role) => {
    const query = `INSERT INTO users (name, email, phone, password, role) VALUES ($1, $2, $3, $4, $5) RETURNING *`;
    const values = [name, email, phone, password, role];
    const result = await pool.query(query, values);
    return result.rows[0];
};

// Find user by email.
const findUserByEmail = async (email) => {
    const query = `SELECT * FROM users WHERE email = $1`;
    const result = await pool.query(query, [email]);
    return result.rows[0];
};

module.exports = {
    createUserTable,
    createUser,
    findUserByEmail,
};

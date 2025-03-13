// server.js
const express = require('express');
const dotenv = require('dotenv');
const connectDB = require('./config/db');

// Load environment variables
dotenv.config();

// Initialize express app
const app = express();

// Middleware to parse incoming JSON requests
app.use(express.json());

// Connect to the database
connectDB();

// Import route
const userRoutes = require('./routes/userRoutes');
const rideRoutes = require('./routes/rideRoutes');

// Routes
app.use('/api/users', userRoutes);
app.use('/api/rides', rideRoutes);

// Error handling middleware
const { errorHandler } = require('./utils/errorHandler');
app.use(errorHandler);

// Server listener
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});

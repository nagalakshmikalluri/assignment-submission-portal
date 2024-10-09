const express = require('express'); // Importing express to create the server and handle routes
const cors = require('cors'); // Importing cors to enable Cross-Origin Resource Sharing
const mongoose = require('mongoose'); // Importing mongoose to interact with MongoDB
const userRoutes = require('./routes/user'); // Importing user routes
const adminRoutes = require('./routes/admin'); // Importing admin routes
const app = express(); // Creating an instance of an Express application

app.use(cors()); // Enabling CORS for all routes
app.use(express.json()); // Middleware to parse JSON request bodies

// MongoDB connection URI
const mongoURI = 'mongodb://localhost:27017/GrowthX'; 
// Connecting to MongoDB
mongoose.connect(mongoURI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('MongoDB connected')) // Logging success message
    .catch(err => console.log(err)); // Logging any connection errors

// Setting up routes for users and admins
app.use('/api/users', userRoutes); // User routes under /api/users
app.use('/api/admins', adminRoutes); // Admin routes under /api/admins

// Starting the server on port 5000
app.listen(5000, () => {
    console.log('Server is running on port 5000'); // Logging server start message
});

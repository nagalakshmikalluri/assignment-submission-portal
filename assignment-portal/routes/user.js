const express = require('express'); // Importing express to create routes
const User = require('../models/user'); // Importing the User model to interact with the User collection in MongoDB
const router = express.Router(); // Creating a router object for handling requests

// Route for user registration
router.post('/register', async (req, res) => {
    const { username, password } = req.body; // Extract username and password from request body
    try {
        // Check if a user with the same username already exists
        const existingUser = await User.findOne({ username, role: 'user' });
        if (existingUser) {
            return res.status(400).json({ message: 'User already exists' }); // If user exists, return an error
        }

        // If not, create a new user
        const newUser = new User({ username, password });
        await newUser.save(); // Save the new user to the database
        return res.status(201).json({ message: 'User registered successfully' }); // Return success response
    } catch (error) {
        return res.status(500).json({ message: 'Server error', error }); // Handle server errors
    }
});

// Route for user login
router.post('/login', async (req, res) => {
    const { username, password } = req.body; // Extract username and password from request body
    try {
        const user = await User.findOne({ username }); // Find user by username
        if (!user) {
            return res.status(404).json({ message: 'User not found' }); // If user not found, return error
        }

        // Check if password matches
        if (user.password !== password) {
            return res.status(401).json({ message: 'Invalid credentials' }); // If password is wrong, return error
        }

        return res.status(200).json({ message: 'Login successful', user }); // If login successful, return success response
    } catch (error) {
        return res.status(500).json({ message: 'Server error', error }); // Handle server errors
    }
});

// Route for uploading assignments
router.post('/upload', async (req, res) => {
    const { userId, task, admin } = req.body; // Extract userId, task, and admin from request body
    return res.status(201).json({ message: 'Assignment uploaded successfully' }); // Return success response (upload functionality should be implemented later)
});

// Route to fetch all admins
router.get('/admins', async (req, res) => {
    try {
        const admins = await User.find({ role: 'admin' }); // Find all users with the role of admin
        return res.status(200).json(admins); // Return the list of admins
    } catch (error) {
        return res.status(500).json({ message: 'Server error', error }); // Handle server errors
    }
});

module.exports = router; // Exporting the router to be used in other parts of the application

const express = require('express'); // Importing express to create routes
const User = require('../models/user'); // Importing the User model to interact with the User collection in MongoDB
const router = express.Router(); // Creating a router object for handling requests

// Route for admin registration
router.post('/register', async (req, res) => {
    const { username, password } = req.body; // Extract username and password from request body
    try {
        // Check if an admin with the same username already exists
        const existingAdmin = await User.findOne({ username, role: 'admin' });
        if (existingAdmin) {
            return res.status(400).json({ message: 'Admin already exists' }); // If admin exists, return an error
        }

        // If not, create a new admin user
        const newAdmin = new User({ username, password, role: 'admin' });
        await newAdmin.save(); // Save the new admin to the database
        return res.status(201).json({ message: 'Admin registered successfully' }); // Return success response
    } catch (error) {
        return res.status(500).json({ message: 'Server error', error }); // Handle server errors
    }
});

// Route for admin login
router.post('/login', async (req, res) => {
    const { username, password } = req.body; // Extract username and password from request body
    try {
        const admin = await User.findOne({ username }); // Find admin by username
        if (!admin) {
            return res.status(404).json({ message: 'Admin not found' }); // If admin not found, return error
        }

        // Check if password matches
        if (admin.password !== password) {
            return res.status(401).json({ message: 'Invalid credentials' }); // If password is wrong, return error
        }

        return res.status(200).json({ message: 'Login successful', admin }); // If login successful, return success response
    } catch (error) {
        return res.status(500).json({ message: 'Server error', error }); // Handle server errors
    }
});

// Route to fetch all assignments for an admin
router.get('/assignments', async (req, res) => {
    // Return a success response with a message (assignment fetching functionality should be implemented later)
    return res.status(200).json({ message: 'Assignments fetched successfully' });
});

// Route to accept an assignment by ID
router.post('/assignments/:id/accept', async (req, res) => {
    const { id } = req.params; // Extract assignment ID from request parameters
    // Return a success message indicating the assignment was accepted
    return res.status(200).json({ message: `Assignment ${id} accepted` });
});

// Route to reject an assignment by ID
router.post('/assignments/:id/reject', async (req, res) => {
    const { id } = req.params; // Extract assignment ID from request parameters
    // Return a success message indicating the assignment was rejected
    return res.status(200).json({ message: `Assignment ${id} rejected` });
});

module.exports = router; // Exporting the router to be used in other parts of the application

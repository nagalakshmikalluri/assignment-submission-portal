// // routes/userRoutes.js
// const express = require('express');
// const User = require('../models/user');
// const Assignment = require('../models/assignment'); // Import the Assignment model
// const router = express.Router();

// // Other routes remain the same...

// // User login
// router.post('/login', async (req, res) => {
//     const { username, password } = req.body;
//     try {
//         const user = await User.findOne({ username });
//         if (!user) return res.status(404).json({ message: 'User not found' });
//         if (user.password !== password) return res.status(401).json({ message: 'Invalid credentials' });

//         return res.status(200).json({ message: 'Login successful', user });
//     } catch (error) {
//         return res.status(500).json({ message: 'Server error', error });
//     }
// });

// // Route for users to upload an assignment
// router.post('/upload', async (req, res) => {
//     const { userId, task, admin } = req.body;
//     try {
//         const newAssignment = new Assignment({ userId, task, admin });
//         await newAssignment.save();
//         return res.status(201).json({ message: 'Assignment uploaded successfully', assignment: newAssignment });
//     } catch (error) {
//         return res.status(500).json({ message: 'Server error', error });
//     }
// });

// // Get all admins
// router.get('/admins', async (req, res) => {
//     try {
//         const admins = await User.find({ role: 'admin' });
//         return res.status(200).json(admins);
//     } catch (error) {
//         return res.status(500).json({ message: 'Server error', error });
//     }
// });

// module.exports = router;


const express = require('express');
const User = require('../models/user');
const router = express.Router();

// User Registration
router.post('/register', async (req, res) => {
    const { username, password } = req.body;
    try {
        const existingUser = await User.findOne({ username, role: 'user' });
        if (existingUser) {
            return res.status(400).json({ message: 'User already exists' });
        }

        const newUser = new User({ username, password }); // Consider hashing passwords in production
        await newUser.save();
        return res.status(201).json({ message: 'User registered successfully' });
    } catch (error) {
        return res.status(500).json({ message: 'Server error', error });
    }
});

// User Login
router.post('/login', async (req, res) => {
    const { username, password } = req.body;
    try {
        const user = await User.findOne({ username });
        if (!user) {
            return res.status(404).json({ message: 'User not found' });
        }

        // Password check logic goes here (hash comparison)
        if (user.password !== password) {
            return res.status(401).json({ message: 'Invalid credentials' });
        }

        return res.status(200).json({ message: 'Login successful', user });
    } catch (error) {
        return res.status(500).json({ message: 'Server error', error });
    }
});

// Upload Assignment
router.post('/upload', async (req, res) => {
    const { userId, task, admin } = req.body;
    // Implement logic to save the assignment (you might need to create an Assignment model)
    // Example:
    // const assignment = new Assignment({ userId, task, admin });
    // await assignment.save();
    return res.status(201).json({ message: 'Assignment uploaded successfully' });
});

// Fetch all admins
router.get('/admins', async (req, res) => {
    try {
        const admins = await User.find({ role: 'admin' });
        return res.status(200).json(admins);
    } catch (error) {
        return res.status(500).json({ message: 'Server error', error });
    }
});

// Export the router
module.exports = router;

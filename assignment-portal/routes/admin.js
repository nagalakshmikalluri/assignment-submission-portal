// // // routes/adminRoutes.js
// // const express = require('express');
// // const User = require('../models/user');
// // const Assignment = require('../models/assignment'); // Import the Assignment model
// // const router = express.Router();

// // // Other routes remain the same...

// // // Admin login
// // router.post('/login', async (req, res) => {
// //     const { username, password } = req.body;
// //     try {
// //         const admin = await User.findOne({ username, role: 'admin' }); // Ensure it's an admin
// //         if (!admin) return res.status(404).json({ message: 'Admin not found' });
// //         if (admin.password !== password) return res.status(401).json({ message: 'Invalid credentials' });
        
// //         return res.status(200).json({ message: 'Login successful', admin });
// //     } catch (error) {
// //         return res.status(500).json({ message: 'Server error', error });
// //     }
// // });

// // // Get assignments tagged to the admin
// // router.get('/assignments', async (req, res) => {
// //     const { adminId } = req.query; // Assuming you send adminId as a query parameter
// //     try {
// //         const assignments = await Assignment.find({ admin: adminId });
// //         return res.status(200).json(assignments);
// //     } catch (error) {
// //         return res.status(500).json({ message: 'Server error', error });
// //     }
// // });

// // // Accept an assignment
// // router.post('/assignments/:id/accept', async (req, res) => {
// //     const { id } = req.params;
// //     try {
// //         const assignment = await Assignment.findByIdAndUpdate(id, { status: 'accepted' }, { new: true });
// //         return res.status(200).json({ message: 'Assignment accepted', assignment });
// //     } catch (error) {
// //         return res.status(500).json({ message: 'Server error', error });
// //     }
// // });

// // // Reject an assignment
// // router.post('/assignments/:id/reject', async (req, res) => {
// //     const { id } = req.params;
// //     try {
// //         const assignment = await Assignment.findByIdAndUpdate(id, { status: 'rejected' }, { new: true });
// //         return res.status(200).json({ message: 'Assignment rejected', assignment });
// //     } catch (error) {
// //         return res.status(500).json({ message: 'Server error', error });
// //     }
// // });

// // module.exports = router;
// // routes/admin.js
// const express = require('express');
// const User = require('../models/user'); // Assuming you have a User model
// const router = express.Router();

// // Admin Registration
// router.post('/register', async (req, res) => {
//     const { username, password } = req.body;
//     try {
//         const existingAdmin = await User.findOne({ username, role: 'admin' });
//         if (existingAdmin) {
//             return res.status(400).json({ message: 'Admin already exists' });
//         }

//         const newAdmin = new User({ username, password, role: 'admin' }); // Ensure the role is set to admin
//         await newAdmin.save();
//         return res.status(201).json({ message: 'Admin registered successfully' });
//     } catch (error) {
//         return res.status(500).json({ message: 'Server error', error });
//     }
// });

// // Export the router
// module.exports = router;


const express = require('express');
const User = require('../models/user');
const router = express.Router();

// Admin Registration
router.post('/register', async (req, res) => {
    const { username, password } = req.body;
    try {
        const existingAdmin = await User.findOne({ username, role: 'admin' });
        if (existingAdmin) {
            return res.status(400).json({ message: 'Admin already exists' });
        }

        const newAdmin = new User({ username, password, role: 'admin' });
        await newAdmin.save();
        return res.status(201).json({ message: 'Admin registered successfully' });
    } catch (error) {
        return res.status(500).json({ message: 'Server error', error });
    }
});

// Admin Login
router.post('/login', async (req, res) => {
    const { username, password } = req.body;
    try {
        const admin = await User.findOne({ username });
        if (!admin) {
            return res.status(404).json({ message: 'Admin not found' });
        }

        // Password check logic goes here (hash comparison)
        if (admin.password !== password) {
            return res.status(401).json({ message: 'Invalid credentials' });
        }

        return res.status(200).json({ message: 'Login successful', admin });
    } catch (error) {
        return res.status(500).json({ message: 'Server error', error });
    }
});

// Get Assignments (You need to create an Assignment model first)
router.get('/assignments', async (req, res) => {
    // Implement logic to fetch assignments for this admin
    return res.status(200).json({ message: 'Assignments fetched successfully' });
});

// Accept Assignment
router.post('/assignments/:id/accept', async (req, res) => {
    const { id } = req.params;
    // Implement logic to accept the assignment with the given ID
    return res.status(200).json({ message: `Assignment ${id} accepted` });
});

// Reject Assignment
router.post('/assignments/:id/reject', async (req, res) => {
    const { id } = req.params;
    // Implement logic to reject the assignment with the given ID
    return res.status(200).json({ message: `Assignment ${id} rejected` });
});

// Export the router
module.exports = router;

const express = require('express');
const User = require('../models/user');
const router = express.Router();

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

router.post('/login', async (req, res) => {
    const { username, password } = req.body;
    try {
        const admin = await User.findOne({ username });
        if (!admin) {
            return res.status(404).json({ message: 'Admin not found' });
        }

        if (admin.password !== password) {
            return res.status(401).json({ message: 'Invalid credentials' });
        }

        return res.status(200).json({ message: 'Login successful', admin });
    } catch (error) {
        return res.status(500).json({ message: 'Server error', error });
    }
});


router.get('/assignments', async (req, res) => {
    
    return res.status(200).json({ message: 'Assignments fetched successfully' });
});


router.post('/assignments/:id/accept', async (req, res) => {
    const { id } = req.params;
    return res.status(200).json({ message: `Assignment ${id} accepted` });
});

router.post('/assignments/:id/reject', async (req, res) => {
    const { id } = req.params;
    return res.status(200).json({ message: `Assignment ${id} rejected` });
});


module.exports = router;

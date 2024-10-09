const express = require('express');
const User = require('../models/user');
const router = express.Router();

router.post('/register', async (req, res) => {
    const { username, password } = req.body;
    try {
        const existingUser = await User.findOne({ username, role: 'user' });
        if (existingUser) {
            return res.status(400).json({ message: 'User already exists' });
        }

        const newUser = new User({ username, password });
        await newUser.save();
        return res.status(201).json({ message: 'User registered successfully' });
    } catch (error) {
        return res.status(500).json({ message: 'Server error', error });
    }
});

router.post('/login', async (req, res) => {
    const { username, password } = req.body;
    try {
        const user = await User.findOne({ username });
        if (!user) {
            return res.status(404).json({ message: 'User not found' });
        }
        if (user.password !== password) {
            return res.status(401).json({ message: 'Invalid credentials' });
        }

        return res.status(200).json({ message: 'Login successful', user });
    } catch (error) {
        return res.status(500).json({ message: 'Server error', error });
    }
});


router.post('/upload', async (req, res) => {
    const { userId, task, admin } = req.body;
    return res.status(201).json({ message: 'Assignment uploaded successfully' });
});

router.get('/admins', async (req, res) => {
    try {
        const admins = await User.find({ role: 'admin' });
        return res.status(200).json(admins);
    } catch (error) {
        return res.status(500).json({ message: 'Server error', error });
    }
});


module.exports = router;

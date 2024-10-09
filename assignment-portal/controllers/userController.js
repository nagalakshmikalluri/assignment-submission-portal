const User = require('../models/user'); // Import the User model

// Controller function to register a new user
exports.register = async (req, res) => {
    try {
        const { username, password } = req.body; // Extract username and password from the request body
        const hashedPassword = await bcrypt.hash(password, 10); // Hash the password using bcrypt with a salt of 10 rounds
        const newUser = await User.create({ username, password: hashedPassword }); // Create a new user in the database with hashed password
        res.status(201).json({ message: 'User registered', userId: newUser._id }); // Send success response with user ID
    } catch (error) {
        // If an error occurs, return a 500 status and the error message
        res.status(500).json({ error: error.message });
    }
};

// Controller function to upload an assignment
exports.uploadAssignment = async (req, res) => {
    try {
        const { userId, task, admin } = req.body; // Extract assignment details from the request body
        const newAssignment = new Assignment({ userId, task, admin }); // Create a new assignment with userId, task, and admin
        await newAssignment.save(); // Save the new assignment to the database
        res.status(201).json({ message: 'Assignment uploaded successfully' }); // Send success response
    } catch (error) {
        // If an error occurs, return a 500 status and the error message
        res.status(500).json({ error: error.message });
    }
};

const Assignment = require('../models/assignment'); // Import the Assignment model

// Controller function to retrieve assignments for the logged-in admin
exports.getAssignments = async (req, res) => {
    try {
        // Find all assignments tagged to the logged-in admin (based on username)
        const assignments = await Assignment.find({ admin: req.user.username });
        // Send the assignments in the response with status 200 (OK)
        res.status(200).json(assignments);
    } catch (error) {
        // If an error occurs, return a 500 status and the error message
        res.status(500).json({ error: error.message });
    }
};

// Controller function to accept an assignment
exports.acceptAssignment = async (req, res) => {
    try {
        // Find the assignment by its ID (from the request parameters)
        const assignment = await Assignment.findById(req.params.id);
        if (!assignment) return res.status(404).json({ message: 'Assignment not found' }); // If no assignment found, return 404
        
        // Update the assignment status to 'accepted' and set the admin as the current user
        assignment.status = 'accepted';
        assignment.admin = req.user.username;
        await assignment.save(); // Save the changes to the database
        res.status(200).json({ message: 'Assignment accepted' }); // Send success response
    } catch (error) {
        // If an error occurs, return a 500 status and the error message
        res.status(500).json({ error: error.message });
    }
};

// Controller function to reject an assignment
exports.rejectAssignment = async (req, res) => {
    try {
        // Find the assignment by its ID (from the request parameters)
        const assignment = await Assignment.findById(req.params.id);
        if (!assignment) return res.status(404).json({ message: 'Assignment not found' }); // If no assignment found, return 404
        
        // Update the assignment status to 'rejected' and set the admin as the current user
        assignment.status = 'rejected';
        assignment.admin = req.user.username;
        await assignment.save(); // Save the changes to the database
        res.status(200).json({ message: 'Assignment rejected' }); // Send success response
    } catch (error) {
        // If an error occurs, return a 500 status and the error message
        res.status(500).json({ error: error.message });
    }
};

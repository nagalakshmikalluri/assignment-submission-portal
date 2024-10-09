const mongoose = require('mongoose'); // Import Mongoose for MongoDB interactions

// Define the schema for the Assignment model
const assignmentSchema = new mongoose.Schema({
    // User ID associated with the assignment (required field)
    userId: { type: String, required: true }, 
    
    // Task or content of the assignment (required field)
    task: { type: String, required: true },
    
    // Admin to whom the assignment is tagged (required field)
    admin: { type: String, required: true },   
    
    // Status of the assignment, which can be 'pending', 'accepted', or 'rejected', default is 'pending'
    status: { type: String, enum: ['pending', 'accepted', 'rejected'], default: 'pending' }
}, { timestamps: true }); // Automatically adds createdAt and updatedAt timestamps

// Create the Assignment model using the schema defined above
const Assignment = mongoose.model('Assignment', assignmentSchema);

// Export the Assignment model for use in other parts of the application
module.exports = Assignment;

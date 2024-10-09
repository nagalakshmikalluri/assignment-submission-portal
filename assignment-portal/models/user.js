const mongoose = require('mongoose'); // Import Mongoose for MongoDB interactions

// Define the schema for the User model
const userSchema = new mongoose.Schema({
    // Username of the user, must be unique and is a required field
    username: { type: String, required: true, unique: true }, 
    
    // Password for the user, required field
    password: { type: String, required: true }, 
    
    // Role of the user, which can either be 'user' or 'admin', default is 'user'
    role: { type: String, enum: ['user', 'admin'], default: 'user' } 
}, { timestamps: true }); // Automatically adds createdAt and updatedAt timestamps

// Create the User model using the schema defined above
const User = mongoose.model('User', userSchema);

// Export the User model for use in other parts of the application
module.exports = User;

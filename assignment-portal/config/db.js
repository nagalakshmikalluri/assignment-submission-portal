const mongoose = require('mongoose'); // Importing the Mongoose library to interact with MongoDB

// Function to connect to the MongoDB database
const connectDB = async () => {
    try {
        // Attempt to connect to the MongoDB database using the connection string
        await mongoose.connect('mongodb://localhost:27017/GrowthX', {
            useNewUrlParser: true,  // Use new URL parser (MongoDB driver option)
            useUnifiedTopology: true,  // Use the unified topology (MongoDB driver option)
        });
        console.log('MongoDB connected');  // Log a success message when connected
    } catch (error) {
        // Log an error message and exit the process if connection fails
        console.error('MongoDB connection error:', error);
        process.exit(1);  // Exit the process with failure (code 1)
    }
};

module.exports = connectDB; // Export the connectDB function to be used in other parts of the application

// // const express = require('express');
// // const cors = require('cors');
// // const mongoose = require('mongoose');
// // const User = require('./models/user'); // Adjust the path if needed
// // const Assignment = require('./models/assignment'); // Adjust the path as needed
// // const userRoutes = require('./routes/user'); // Adjust path as needed
// // const adminRoutes = require('./routes/admin'); // Adjust path as needed


// // const app = express();

// // // Middleware
// // app.use(cors());
// // app.use(express.json());

// // // MongoDB connection
// // const mongoURI = 'mongodb://localhost:27017/GrowthX'; // Replace with your connection string
// // mongoose.connect(mongoURI, { useNewUrlParser: true, useUnifiedTopology: true })
// //     .then(() => console.log('MongoDB connected'))
// //     .catch(err => console.log('MongoDB connection error:', err));

// // // Login route
// // app.post('/login', async (req, res) => {
// //     const { username, password } = req.body;

// //     try {
// //         const user = await User.findOne({ username });
// //         if (!user) {
// //             return res.status(404).json({ message: 'User not found' });
// //         }

// //         // Simple password check (remember to hash passwords in a real app!)
// //         if (user.password !== password) {
// //             return res.status(401).json({ message: 'Invalid credentials' });
// //         }

// //         return res.status(200).json({ message: 'Login successful', user });
// //     } catch (error) {
// //         return res.status(500).json({ message: 'Server error', error });
// //     }
// // });

// // // Register route
// // app.post('/register', async (req, res) => {
// //     const { username, password } = req.body;

// //     try {
// //         const existingUser = await User.findOne({ username });
// //         if (existingUser) {
// //             return res.status(400).json({ message: 'User already exists' });
// //         }

// //         // Create a new user without hashing (for simplicity in the assignment)
// //         const newUser = new User({ username, password });
// //         await newUser.save();
// //         return res.status(201).json({ message: 'User registered successfully' });
// //     } catch (error) {
// //         return res.status(500).json({ message: 'Server error', error });
// //     }
// // });

// // // Start server
// // app.listen(5000, () => {
// //     console.log('Server is running on port 5000');
// // });


// // app.post('/assignments', async (req, res) => {
// //     const { userId, task, admin } = req.body;

// //     try {
// //         const newAssignment = new Assignment({ userId, task, admin });
// //         await newAssignment.save();
// //         return res.status(201).json({ message: 'Assignment uploaded successfully', assignment: newAssignment });
// //     } catch (error) {
// //         return res.status(500).json({ message: 'Server error', error });
// //     }
// // });


// // app.js or server.js
// const express = require('express');
// const cors = require('cors');
// const mongoose = require('mongoose');
// const userRoutes = require('./routes/user'); // Adjust path as needed
// const adminRoutes = require('./routes/admin'); // Adjust path as needed

// const app = express();

// // Middleware
// app.use(cors());
// app.use(express.json());

// // MongoDB connection
// const mongoURI = 'mongodb://localhost:27017/GrowthX'; // Replace with your connection string
// mongoose.connect(mongoURI, { useNewUrlParser: true, useUnifiedTopology: true })
//     .then(() => console.log('MongoDB connected'))
//     .catch(err => console.log(err));

// // Register routes
// app.use('/api/users', userRoutes); // Register user routes
// app.use('/api/admins', adminRoutes); // Register admin routes

// app.listen(5000, () => {
//     console.log('Server is running on port 5000');
// });


const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const userRoutes = require('./routes/user'); // Adjust path as needed
const adminRoutes = require('./routes/admin'); // Adjust path as needed

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// MongoDB connection
const mongoURI = 'mongodb://localhost:27017/GrowthX';
mongoose.connect(mongoURI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('MongoDB connected'))
    .catch(err => console.log(err));

// Register routes
app.use('/api/users', userRoutes);
app.use('/api/admins', adminRoutes);

app.listen(5000, () => {
    console.log('Server is running on port 5000');
});

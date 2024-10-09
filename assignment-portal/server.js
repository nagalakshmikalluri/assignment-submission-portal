const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const userRoutes = require('./routes/user'); 
const adminRoutes = require('./routes/admin');
const app = express();

app.use(cors());
app.use(express.json());


const mongoURI = 'mongodb://localhost:27017/GrowthX';
mongoose.connect(mongoURI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('MongoDB connected'))
    .catch(err => console.log(err));

app.use('/api/users', userRoutes);
app.use('/api/admins', adminRoutes);

app.listen(5000, () => {
    console.log('Server is running on port 5000');
});

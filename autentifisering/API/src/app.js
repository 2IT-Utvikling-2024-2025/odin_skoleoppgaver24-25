const express = require('express');
const cors = require('cors');

const authRoutes = require('./v1/routes/authRoutes');

const app = express();

//Middleware
app.use(cors());
app.use(express.json());


//Routes
app.use('/api/v1/auth', authRoutes);
app.use('/api/v1/dash', require('./v1/routes/dashRoutes'));

//Start server
app.listen(3000, () => {
    console.log('Server is running on port 3000');
});

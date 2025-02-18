const express = require('express');
const routRoutes = require('./v1/routes/routRoutes');


const app = express();
const cors = require('cors');

app.use(cors());
app.use(express.json());

//Define Routes
app.use('/v1/routes', routRoutes);


//Routes
app.listen(3000, () => 
    console.log('Server running on port 3000')
);

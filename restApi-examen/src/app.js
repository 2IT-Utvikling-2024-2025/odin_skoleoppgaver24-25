const express = require('express');
const productRoutes = require('./v1/routes/productRoutes');
const app = express();
const cors = require('cors');


//Middlewares
app.use(express.json());
app.use(cors());

//Setup Routes | www.localhost:3000/api/v1/products
app.use('/api/v1/products', productRoutes);

app.listen(3000, () => {
    console.log('Server is running on port 3000');
});
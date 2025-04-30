const express = require('express');
const app = express();
const cors = require('cors');
const productRoutes = require('./v1/routes/productRoutes');
const orderRoutes = require('./v1/routes/orderRoutes');

app.use(cors());
app.use(express.json());


//Define Main routs
app.use('/v1/products', productRoutes);
app.use('/v1/orders', orderRoutes);

//Routes
app.listen(3000,()=>{
    console.log('Server is running on port 3000');
})


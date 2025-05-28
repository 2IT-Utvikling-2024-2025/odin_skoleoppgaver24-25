const express = require('express');
const app = express();
app.use(express.json());
const cors = require('cors');
app.use(cors());

const productRoutes = require('./SRC/productRoutes');
app.use('/api/v1/products', productRoutes);


app.listen(3000, () => {
  console.log('Server is running on port 3000');
});

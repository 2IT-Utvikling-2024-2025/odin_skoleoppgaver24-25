const {pool} = require('./db');


//GET all products
const getProducts = async (req, res) => {
    try {
        const [resoult] = await pool.execute('SELECT * FROM products');
        res.status(200).json({success: true, data: resoult});

    } catch (error) {
        console.error(error);
        res.status(500).json({success: false, error: error.message});
    }
}

//GET product by id
const getProductById = async (req, res) => {
    try {
        const [resoult] = await pool.execute('SELECT * FROM products WHERE productID = ?', [req.params.id]);
       
        res.status(200).json({success: true, data: resoult});

    } catch (error) {

        console.error(error);
        res.status(500).json({success: false, error: error.message});
    }
}

//POST create product
const createProduct = async (req, res) => {
    try {
        console.log("Hei");
        const [resoult] = await pool.execute(
            'INSERT INTO products (productName, productPrice) VALUES (?, ?)', 
            [req.body.productName, req.body.productPrice]
        );
        
        res.status(200).json({success: true, data: resoult});
    } catch (error) {

        console.error(error);
        res.status(500).json({success: false, error: error.message});
    }
    console.log("Test");

}
//DELETE product by id
const deleteProduct = async (req, res) => {
    try {
        const [resoult] = await pool.execute('DELETE FROM products WHERE productID = ?', [req.params.id]);
        
        if (resoult.affectedRows === 0) {
            res.status(404).json({success: false, error: 'Product not found'});
        }
        else {
            res.status(200).json({success: true, data: resoult});
        }
    } catch (error) {

        console.error(error);
        res.status(500).json({success: false, error: error.message});
    }
}


module.exports = {
    getProducts,
    getProductById,
    createProduct,
    deleteProduct
};
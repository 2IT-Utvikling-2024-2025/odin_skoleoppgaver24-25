const {getAllObjects, addObject, getObjectById, deleteObjectById, updateObjectById} = require('../data/databaseGeneric');

const getAllProducts = async (req, res) => {
    try {
        const products = await getAllObjects();

        res.status(200).json({success: true, data: products});
    } catch (error) {
        res.status(500).json({success: false, message: 'something went wrong' });
    }
};

const getSingleProduct = async (req, res) => {
    try {
        const product = await getObjectById(req.params.id);

        res.status(200).json({success: true, data: product});
    } catch (error) {
        res.status(500).json({success: false, message: 'something went wrong' });
    }
};

const createProduct = async (req, res) => {
    try {
        const {productName, price, description} = req.body;
        const newProduct = await addObject({productName, price, description});

        res.status(201).json({success: true, data: newProduct});
    } catch (error) {
        res.status(500).json({success: false, message: 'something went wrong' });
    }
};  

const updateProduct = async (req, res) => {
    try {
        const {id} = req.params;
        const {productName, price, description} = req.body;
        const updatedObject = await updateObjectById(id, {productName, price, description});

        res.status(200).json({success: true, data: updatedObject});
    } catch (error) {
        res.status(500).json({success: false, message: 'something went wrong' });
    }
};

const deleteProduct = async (req, res) => {
    try {
        const {id} = req.params;
        const deleted = await deleteObjectById(id);

        res.status(200).json({success: true, message: 'product deleted'});
    } catch (error) {
        res.status(500).json({success: false, message: 'something went wrong' });
    }
};  

module.exports = {getAllProducts, getSingleProduct, createProduct, updateProduct, deleteProduct};
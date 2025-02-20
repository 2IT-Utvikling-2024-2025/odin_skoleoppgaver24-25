const express = require('express');

const { getAllWallets, getWalletById, createWallet, updateWallet, deleteWallet} = require('../controllers/WalletController');

const router = express.Router();

//Define Routes
router.get('/', getAllWallets);
router.get('/:id', getWalletById);
router.post('/', createWallet);
router.put('/:id', updateWallet);
router.delete('/:id', deleteWallet);

module.exports = router;
const express = require('express');

//GET
const getAllWallets = (req, res) => {
    res.send('Get all Wallets');
}

const getWalletById = (req, res) => {
    res.send('Get Wallet by id');
}


//POST
const createWallet = (req, res) => {
    res.send('Create Wallet');
}


//PUT
const updateWallet = (req, res) => {
    res.send('Update Wallet');
}


//DELETE
const deleteWallet = (req, res) => {
    res.send('Delete Wallet');
}


module.exports = {
    getAllWallets,
    getWalletById,
    createWallet,
    updateWallet,
    deleteWallet,
}
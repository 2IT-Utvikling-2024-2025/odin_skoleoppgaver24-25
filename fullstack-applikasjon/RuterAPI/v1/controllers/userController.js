const express = require('express');

//GET
const getAllUsers = (req, res) => {
    res.send('Get all users');
}

const getUserById = (req, res) => {
    res.send('Get user by id');
}


//POST
const createUser = (req, res) => {
    res.send('Create user');
}


//PUT
const updateUser = (req, res) => {
    res.send('Update user');
}


//DELETE
const deleteUser = (req, res) => {
    res.send('Delete User');
}


module.exports = {
    getAllUsers,
    getUserById,
    createUser,
    updateUser,
    deleteUser,
}
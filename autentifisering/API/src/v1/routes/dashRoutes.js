const express = require('express');
const {admin} = require('../Controllers/dashController.js')
const {authenticateToken, authorizeRoles} = require('../middleware/authMiddleware.js')

const router = express.Router();

router.get('/admin', admin, authenticateToken, authorizeRoles('admin'), admin);


module.exports = router;
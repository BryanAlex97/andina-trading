const express = require('express');
const router = express.Router();
const paisController = require('../controllers/paisController');

router.get('/', paisController.getAllPaises);
router.post('/', paisController.createPais);

module.exports = router;

const express = require('express');
const router = express.Router();
const contratoController = require('../controllers/contratoController');

router.get('/', contratoController.getAllContratos);
router.post('/', contratoController.createContrato);

module.exports = router;
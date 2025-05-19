const express = require('express');
const router = express.Router();
const investorController = require('../controllers/investorController');

// Ruta para obtener todos los inversionistas
router.get('/', investorController.getAllInvestors);

// Ruta para crear un nuevo inversionista
router.post('/', investorController.createInvestor);

module.exports = router;

const express = require('express');
const router = express.Router();
const reporteController = require('../controllers/reporteController');

router.get('/resumen', reporteController.getResumen);

module.exports = router;
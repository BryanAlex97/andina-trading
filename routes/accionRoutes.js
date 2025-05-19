const express = require('express');
const router = express.Router();
const accionController = require('../controllers/accionController');

router.get('/', accionController.getAllAcciones);
router.post('/', accionController.createAccion);

module.exports = router;
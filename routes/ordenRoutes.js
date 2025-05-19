const express = require('express');
const router = express.Router();
const ordenController = require('../controllers/ordenController');

router.get('/', ordenController.getAllOrdenes);
router.post('/', ordenController.createOrden);

module.exports = router;
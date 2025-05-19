const express = require('express');
const router = express.Router();
const comisionistaController = require('../controllers/comisionistaController');

router.get('/', comisionistaController.getAllComisionistas);
router.post('/', comisionistaController.createComisionista);

module.exports = router;
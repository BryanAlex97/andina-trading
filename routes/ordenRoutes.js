const express = require('express');
const router = express.Router();
const ordenController = require('../controllers/ordenController');

router.get('/', (req, res) => {
  if (req.query.contrato_ids) {
    return ordenController.getOrdenesPorContratos(req, res);
  }
  ordenController.getAllOrdenes(req, res);
});

router.post('/', ordenController.createOrden);

module.exports = router;

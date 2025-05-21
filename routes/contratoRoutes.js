const express = require('express');
const router = express.Router();
const contratoController = require('../controllers/contratoController');

router.get('/', (req, res) => {
  if (req.query.inversionista_id) {
    return contratoController.getContratosPorInversionista(req, res);
  }
  contratoController.getAllContratos(req, res);
});

router.post('/', contratoController.createContrato);

module.exports = router;

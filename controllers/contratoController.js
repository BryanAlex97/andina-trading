const pool = require('../models/db');

exports.getAllContratos = async (req, res) => {
  try {
    const result = await pool.query(`
      SELECT c.id, i.nombre AS inversionista, com.nombre AS comisionista, c.fecha_creacion
      FROM contratos c
      JOIN inversionistas i ON i.id = c.inversionista_id
      JOIN comisionistas com ON com.id = c.comisionista_id
    `);
    res.json(result.rows);
  } catch (error) {
    console.error('Error al obtener contratos:', error);
    res.status(500).json({ error: 'Error al obtener contratos' });
  }
};

exports.createContrato = async (req, res) => {
  const { inversionista_id, comisionista_id } = req.body;
  try {
    await pool.query(
      'INSERT INTO contratos (inversionista_id, comisionista_id) VALUES ($1, $2)',
      [inversionista_id, comisionista_id]
    );
    res.status(201).json({ message: 'Contrato creado exitosamente' });
  } catch (error) {
    console.error('Error al crear contrato:', error);
    res.status(500).json({ error: 'Error al crear contrato' });
  }
};
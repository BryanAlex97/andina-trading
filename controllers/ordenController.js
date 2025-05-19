const pool = require('../models/db');

exports.getAllOrdenes = async (req, res) => {
  try {
    const result = await pool.query(`
      SELECT o.id, o.tipo, o.cantidad, o.fecha,
             a.simbolo AS accion, i.nombre AS inversionista, c.fecha_creacion
      FROM ordenes o
      JOIN contratos c ON o.contrato_id = c.id
      JOIN inversionistas i ON c.inversionista_id = i.id
      JOIN acciones a ON o.accion_id = a.id
    `);
    res.json(result.rows);
  } catch (error) {
    console.error('Error al obtener órdenes:', error);
    res.status(500).json({ error: 'Error al obtener órdenes' });
  }
};

exports.createOrden = async (req, res) => {
  const { contrato_id, accion_id, tipo, cantidad } = req.body;
  try {
    await pool.query(
      'INSERT INTO ordenes (contrato_id, accion_id, tipo, cantidad) VALUES ($1, $2, $3, $4)',
      [contrato_id, accion_id, tipo, cantidad]
    );
    res.status(201).json({ message: 'Orden registrada exitosamente' });
  } catch (error) {
    console.error('Error al crear orden:', error);
    res.status(500).json({ error: 'Error al crear orden' });
  }
};
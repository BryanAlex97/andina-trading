const pool = require('../models/db');

exports.getAllAcciones = async (req, res) => {
  try {
    const result = await pool.query('SELECT * FROM acciones');
    res.json(result.rows);
  } catch (error) {
    console.error('Error al obtener acciones:', error);
    res.status(500).json({ error: 'Error al obtener acciones' });
  }
};

exports.createAccion = async (req, res) => {
  const { empresa, simbolo, precio } = req.body;
  try {
    await pool.query(
      'INSERT INTO acciones (empresa, simbolo, precio) VALUES ($1, $2, $3)',
      [empresa, simbolo, precio]
    );
    res.status(201).json({ message: 'Acción creada exitosamente' });
  } catch (error) {
    console.error('Error al crear acción:', error);
    res.status(500).json({ error: 'Error al crear acción' });
  }
};
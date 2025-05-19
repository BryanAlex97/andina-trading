const pool = require('../models/db');

exports.getAllComisionistas = async (req, res) => {
  try {
    const result = await pool.query('SELECT * FROM comisionistas');
    res.json(result.rows);
  } catch (error) {
    console.error('Error al obtener comisionistas:', error);
    res.status(500).json({ error: 'Error al obtener comisionistas' });
  }
};

exports.createComisionista = async (req, res) => {
  const { nombre, cedula, email } = req.body;
  try {
    await pool.query(
      'INSERT INTO comisionistas (nombre, cedula, email) VALUES ($1, $2, $3)',
      [nombre, cedula, email]
    );
    res.status(201).json({ message: 'Comisionista creado exitosamente' });
  } catch (error) {
    console.error('Error al crear comisionista:', error);
    res.status(500).json({ error: 'Error al crear comisionista' });
  }
};
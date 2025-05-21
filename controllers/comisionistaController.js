const pool = require('../models/db');

exports.getAllComisionistas = async (req, res) => {
  try {
    const result = await pool.query(`
      SELECT com.id, com.nombre, com.cedula, com.email, p.nombre AS pais
      FROM comisionistas com
      LEFT JOIN paises p ON com.pais_id = p.id
    `);
    res.json(result.rows);
  } catch (error) {
    console.error('Error al obtener comisionistas:', error);
    res.status(500).json({ error: 'Error al obtener comisionistas' });
  }
};


exports.createComisionista = async (req, res) => {
  const { nombre, cedula, email, pais_id } = req.body;
  try {
    await pool.query(
      'INSERT INTO comisionistas (nombre, cedula, email, pais_id) VALUES ($1, $2, $3, $4)',
      [nombre, cedula, email, pais_id]
    );
    res.status(201).json({ message: 'Comisionista creado exitosamente' });
  } catch (error) {
    console.error('Error al crear comisionista:', error);
    res.status(500).json({ error: 'Error al crear comisionista' });
  }
};
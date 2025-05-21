const pool = require('../models/db');

// Obtener todos los países
exports.getAllPaises = async (req, res) => {
  try {
    const result = await pool.query('SELECT * FROM paises ORDER BY nombre ASC');
    res.json(result.rows);
  } catch (error) {
    console.error('Error al obtener países:', error);
    res.status(500).json({ error: 'Error al obtener países' });
  }
};

// Crear un nuevo país
exports.createPais = async (req, res) => {
  const { nombre } = req.body;
  try {
    await pool.query('INSERT INTO paises (nombre) VALUES ($1)', [nombre]);
    res.status(201).json({ message: 'País agregado exitosamente' });
  } catch (error) {
    console.error('Error al agregar país:', error);
    res.status(500).json({ error: 'Error al agregar país' });
  }
};

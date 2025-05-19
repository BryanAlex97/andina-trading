const pool = require('../models/db');

// Obtener todos los inversionistas
exports.getAllInvestors = async (req, res) => {
    try {
      const result = await pool.query('SELECT * FROM inversionistas');
      res.json(result.rows);
    } catch (error) {
      console.error('Error real:', error);  // 👈 esto mostrará el error en consola
      res.status(500).json({ error: 'Error al obtener inversionistas' });
    }
  };

// Crear un nuevo inversionista
exports.createInvestor = async (req, res) => {
  const { nombre, email } = req.body;
  try {
    await pool.query(
      'INSERT INTO inversionistas (nombre, email) VALUES ($1, $2)',
      [nombre, email]
    );
    res.status(201).json({ message: 'Inversionista creado exitosamente' });
  } catch (error) {
    console.error('Error al crear inversionista:', error);
    res.status(500).json({ error: 'Error al crear inversionista' });
  }
};

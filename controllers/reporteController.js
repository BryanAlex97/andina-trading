const pool = require('../models/db');

exports.getResumen = async (req, res) => {
  try {
    const [inversionistas, contratos, ordenesCompra, ordenesVenta] = await Promise.all([
      pool.query('SELECT COUNT(*) FROM inversionistas'),
      pool.query('SELECT COUNT(*) FROM contratos'),
      pool.query('SELECT COUNT(*) AS total, COALESCE(SUM(cantidad), 0) AS total_cantidad FROM ordenes WHERE tipo = $1', ['compra']),
      pool.query('SELECT COUNT(*) AS total, COALESCE(SUM(cantidad), 0) AS total_cantidad FROM ordenes WHERE tipo = $1', ['venta']),
    ]);

    res.json({
      total_inversionistas: parseInt(inversionistas.rows[0].count),
      total_contratos: parseInt(contratos.rows[0].count),
      total_ordenes_compra: parseInt(ordenesCompra.rows[0].total),
      total_ordenes_venta: parseInt(ordenesVenta.rows[0].total),
      total_acciones_compradas: parseInt(ordenesCompra.rows[0].total_cantidad),
      total_acciones_vendidas: parseInt(ordenesVenta.rows[0].total_cantidad),
    });
  } catch (error) {
    console.error('Error al generar el reporte:', error);
    res.status(500).json({ error: 'Error al generar el reporte' });
  }
};

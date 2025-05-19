const express = require('express');
const cors = require('cors');
require('dotenv').config();

const investorRoutes = require('./routes/investorRoutes');
const comisionistaRoutes = require('./routes/comisionistaRoutes');
const accionRoutes = require('./routes/accionRoutes');
const contratoRoutes = require('./routes/contratoRoutes');
const ordenRoutes = require('./routes/ordenRoutes');
const reporteRoutes = require('./routes/reporteRoutes');




const app = express();
app.use(cors());
app.use(express.json()); // Permite leer JSON desde el body de las peticiones

// Rutas base
app.use('/api/inversionistas', investorRoutes);
app.use('/api/comisionistas', comisionistaRoutes);
app.use('/api/acciones', accionRoutes);
app.use('/api/contratos', contratoRoutes);
app.use('/api/ordenes', ordenRoutes);
app.use('/api/reportes', reporteRoutes);




const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});


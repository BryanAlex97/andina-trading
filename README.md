# Andina Trading - Backend

Proyecto  de Ingeniería de Software II  
Sistema de gestión para operaciones bursátiles en una casa de valores.

---

# Tecnologías

- Node.js
- Express.js
- PostgreSQL
- pg (módulo de conexión)
- dotenv
- CORS

---

# Estructura del Proyecto

├── controllers/ # Lógica de negocio por entidad
├── routes/ # Definición de rutas REST
├── models/db.js # Conexión central a la base de datos PostgreSQL
├── sql/ # Respaldo de la base de datos
├── server.js # Archivo principal del servidor Express
├── .env.example # Variables de entorno (sin credenciales reales)
├── package.json # Dependencias del proyecto
└── README.md # Este archivo

---

# Instalación y configuración

1. Clonar el repositorio:
```bash
git clone https://github.com/tu_usuario/andina-trading.git
cd andina-trading

2. Instala las dependecias del proyecto
npm install

3. Crea un archivo .env en la raiz del proyecto con los siguientes valores:

DB_HOST=localhost
DB_USER=postgres
DB_PASSWORD=su_contraseña
DB_NAME=andinatrading
DB_PORT=5432
Asegúrese de usar la contraseña real que configuró en su PostgreSQL.

4. Ejecuta el servidor
node server.js
El servidor iniciará en: http://localhost:3000

# Rutas disponibles (REST API)
Inversionistas

    GET /api/inversionistas – Obtener todos los inversionistas

    POST /api/inversionistas – Crear un nuevo inversionista

Comisionistas

    GET /api/comisionistas – Obtener todos los comisionistas

    POST /api/comisionistas – Crear un comisionista

Acciones

    GET /api/acciones – Ver todas las acciones disponibles

    POST /api/acciones – Crear una nueva acción

Contratos

    GET /api/contratos – Ver todos los contratos registrados

    POST /api/contratos – Crear un contrato entre inversionista y comisionista

Órdenes

    GET /api/ordenes – Ver todas las órdenes (compra y venta)

    POST /api/ordenes – Registrar una orden de compra o venta

Reportes

    GET /api/reportes/resumen – Ver resumen general del sistema (total de contratos, órdenes, etc.)

# Base de datos

Incluye respaldo en:
/sql/andinatrading_backup.sql

Contiene las tablas necesarias:

    inversionistas

    comisionistas

    acciones

    contratos

    ordenes


# Autor

Bryan Alexander Gafaro Espinosa
Jaime Aceros
Proyecto de Ingeniería de Software II
Universidad El Bosque
📝 Notas

    Este proyecto es solo la parte backend.

    Puede ser complementado con un frontend HTML/JS o React.

    Código listo para pruebas con Postman o conexión desde frontend."# andina-trading" 

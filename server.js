const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();
const PORT = process.env.PORT || 5000;

// Middlewares
app.use(cors()); // Enable CORS for all routes
app.use(bodyParser.json()); // Parse JSON request bodies

// Conexión a la base de datos
mongoose.connect('mongodb://localhost:27017/prueba-de-usuarios', { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('Base de datos conectada'))
  .catch(err => console.error('Error de conexión a la base de datos:', err));

// Manejo de errores de rutas
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send('Algo salió mal'); // Send a 500 error if something goes wrong
});

// Rutas
app.get('/', (req, res) => {
  res.send('API de Prueba de Usuarios App'); // Endpoint principal
});

app.listen(PORT, () => {
  console.log(`Servidor escuchando en el puerto ${PORT}`); // Log the server start
});
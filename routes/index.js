const express = require('express');
const app = express();

// Implementación de rutas
app.use('/libros', require('./libros'))

module.exports = app;
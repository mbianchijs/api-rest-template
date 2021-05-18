const express = require('express');
const app = express();

// Implementación de rutas según cada entidad
app.use('/libros', require('./libros'))

module.exports = app;
const router = require('express').Router();
const ctlLibros = require('../controllers/libros');

router.get('/', ctlLibros.librosGet);
router.get('/:id', ctlLibros.libroGet);

module.exports = router;
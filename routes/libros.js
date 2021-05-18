const router = require('express').Router();
const ctlLibros = require('../controllers/libros');

// Configuración de cada verbo HTTP (según sea el caso), 
// y enlace con su respectivo método del controlador

router.get('/', ctlLibros.librosGet);
router.get('/:id', ctlLibros.libroGet);
router.post('/', ctlLibros.librosPost);
router.put('/', ctlLibros.librosPut);
router.patch('/:id', ctlLibros.librosPatch);
router.delete('/:id', ctlLibros.librosDelete);

module.exports = router;
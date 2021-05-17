const router = require('express').Router();
const ctlLibros = require('../controllers/libros');

router.get('/', ctlLibros.librosGet);
router.get('/:id', ctlLibros.libroGet);
router.post('/', ctlLibros.librosPost);
router.put('/', ctlLibros.librosPut);
router.patch('/:id', ctlLibros.librosPatch);
router.delete('/:id', ctlLibros.librosDelete);

module.exports = router;
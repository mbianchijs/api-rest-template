const router = require('express').Router();

router.get('/', (req, res) => {

    res.send('Método GET para ruta libros');
})

module.exports = router;
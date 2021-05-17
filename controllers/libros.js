const { request, response} = require('express');

const librosGet = (req = request, res = response) => {

    const { method } = req;
    const { name, page = 1, limit = 10 } = req.query;

    res.json({
        msg: `Método usado: ${ method }`,
        nombre: name,
        pagina: page,
        limite: limit
    })

}

const libroGet = (req = request, res = response) => {

    const { method } = req;
    const idLibro = req.params.id;

    res.json({
        msg: `Método usado: ${ method }`,
        idLibro: `El libro a consultar tiene el ID ${ idLibro }`
    })

}

module.exports = {
    librosGet,
    libroGet
}
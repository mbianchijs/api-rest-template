const { request, response} = require('express');

const librosGet = (req = request, res = response) => {

    const { method } = req;
    const { name, page = 1, limit = 10 } = req.query;

    res.status(200).json({
        msg: `Método usado: ${ method }`,
        nombre: name,
        pagina: page,
        limite: limit
    })

}

const libroGet = (req = request, res = response) => {

    const { method } = req;
    const idLibro = req.params.id;

    res.status(200).json({
        msg: `Método usado: ${ method }`,
        idLibro: `El libro a consultar tiene el ID ${ idLibro }`
    })

}

const librosPost = (req = request, res = response) => {

    const { method } = req;
    const { nombre, autor, publicacion } = req.body;

    res.status(200).json({
        msg: `Método usado: ${ method }`,
        nombre,
        autor,
        publicacion
    })

}

const librosPut = (req = request, res = response) => {

    const { method } = req;
    const { id, state } = req.query;

    res.status(200).json({
        msg: `Método usado: ${ method }`,
        idModificado: id,
        nuevoEstado: state
    })

}

const librosPatch = (req = request, res = response) => {

    const { method } = req;
    const idLibro = req.params.id;
    const { nombre, autor, publicacion } = req.body;

    res.status(200).json({
        msg: `Método usado: ${ method }`,
        idModificado: idLibro,
        nuevoNombre: nombre,
        nuevoAutor: autor,
        nuevaPublicacion: publicacion
    })

}

const librosDelete = (req = request, res = response) => {

    const { method } = req;
    const idLibro = req.params.id;

    res.status(200).json({
        msg: `Método usado: ${ method }`,
        idEliminado: idLibro,
    })

}

module.exports = {
    librosGet,
    libroGet,
    librosPost,
    librosPut,
    librosPatch,
    librosDelete
}
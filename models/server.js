const express = require('express');
const rutas = require('../routes');

class Server {

    constructor() {

        this.app = express();
        this.port = process.env.PORT;

        // Rutas de la aplicación
        this.routes();
    }

    routes() {
        this.app.use('/', rutas);
    }

    listen() {
        this.app.listen(this.port, () => {
            console.log(`App corriendo en el puerto ${ this.port }`);
        })
    }

}

module.exports = Server;
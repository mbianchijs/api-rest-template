const express = require('express');
const cors = require('cors');
const rutas = require('../routes');

class Server {

    constructor() {

        this.app = express();
        this.port = process.env.PORT;

        // Middlewares
        this.middlewares();

        // Rutas de la aplicación
        this.routes();
    }
    
    middlewares() {   

        // CORS
        this.app.use(cors());
        
        // Parseo del body
        this.app.use(express.json());
        this.app.use(express.urlencoded({extended: false}));

        // Directorio público
        this.app.use(express.static('public'));
    
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
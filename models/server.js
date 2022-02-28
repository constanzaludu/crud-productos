const express = require('express');
const cors = require('cors');
const { dbConnection } = require('../database/config');

class Server {

    constructor(){
        this.app =express();
        this.port = process.env.PORT;
        this.productoPath = '/api/productos';

        this.middlewares();
        this.routes();
        this.conectarDB();
    }

    async conectarDB() {
        await dbConnection()
    }

    //metodos

    middlewares(){

        //cors
        this.app.use( cors() );

        //lectura y parseo de body
        this.app.use( express.json());

        //directorio publico
        this.app.use( express.static('public'));

    }


    routes(){
        this.app.use( this.productoPath, require('../routes/productos'))
    }

    listen(){
        this.app.listen( this.port, () => {
            console.log('Servidor corriendo en puerto', this.port);
        })
    }

}

module.exports = Server;

const express = require('express');
const cors = require('cors');

class Server {

    constructor() {
        this.app = express();
        this.host = process.env.HOST || '0.0.0.0';
        this.port = process.env.PORT || 8080;
        this.productsPath = "/api/v1/products";
        this.categoriesPath = "/api/v1/categories";

        // Middlewares
        this.middlewares();

        // Routes
        this.routes();
    }

    middlewares() {
        // CORS
        this.app.use( cors() );

        // Reading and Parsing Data
        this.app.use( express.json() );

        // Public directory
        this.app.use( express.static('public') );
    }

    routes() {
        this.app.use( this.productsPath, require('../routes/products') );
        this.app.use( this.categoriesPath, require('../routes/categories') );
    }
 
    listen() {
        this.app.listen( this.port, this.host, () => {
            console.log(`Server listening through port ${this.port}`)
        })
    }
}

module.exports = Server;
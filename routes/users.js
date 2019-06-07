const express = require('express');

let routes = express.Router();

routes.get('/', (req, res) => {

    res.statusCode = 200;
    res.setHeader('Content-type', 'application/json');
    res.json({

        users: [{
            nome: 'Flavian Ventura',
            email: 'flavian@ventura.com',
            id: 1
        }]
    });
});

module.exports = routes;
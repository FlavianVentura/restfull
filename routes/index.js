const express = require('express');
let routes = express.Router()

routes.get('/',(req, res) => {

    res.statusCode = 200;
    res.setHeader('Content-type', 'text/html');
    res.end('<h1>Olá Galera.</h1>')

});  

module.exports = routes;
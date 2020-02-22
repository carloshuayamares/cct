'use strict'

const express = require('express');

const server = express();
server.use(express.static('public'));

/*server.get('/', function(req, res) {

    res.send('HELLO WORLD¡¡¡');

});*/

server.listen(3001);
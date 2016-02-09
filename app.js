var http	= require('http');
var conf = require('./conf.json');
var expressServer = require('./app/ExpressServer.js');
//var mongoose = require('mongoose');
var socketIO= require('./app/socketIO.js');
 
//mongoose.connect('mongodb://'+ conf.db.host +'/'+ conf.db.name);
var app = new expressServer();


var server = http.createServer(app.expressServer);
var Io = new socketIO({server:server});

var port = Number(process.env.PORT || 5000)

server.listen(port);
console.log('escuchando el puerto', port);
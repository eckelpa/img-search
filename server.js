'use strict';

var express = require('express');
var routes = require('./app/routes/index.js');
var mongoose = require('mongoose');

var app = express();
var db = mongoose.connection;

app.use('/controllers', express.static(process.cwd() + '/app/controllers'));
app.use('/public', express.static(process.cwd() + '/public'));

var port = process.env.PORT || 8080;

routes(app, db);

app.listen(port,  function () {
	console.log('Node.js listening on port ' + port + '...');
});
'use strict';

//var path = process.cwd();

var dateFormat = require(process.cwd() + '/app/controllers/dateFormater.js');

module.exports = function (app) {
    
    app.route('/')
        .get(function(req, res) {
           res.sendFile(process.cwd() + '/public/index.html'); 
        });
    

    app.get('/*', function(req, res) {
  	    var query = req.params[0];
  		res.send(dateFormat(query));
    });

};

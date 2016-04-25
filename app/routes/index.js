'use strict';

var mongoose = require('mongoose');
var QueryHandler = require('../controllers/queryHandler.js');
var db = mongoose.connection;

module.exports = function (app) {
    
    var queryHandler = new QueryHandler();
    
        app.route('/latest/')
        .get(function(req,res) {
        
            queryHandler.getRecent(db, res);
            
        });
    
    app.route('/*')
        .get(function(req, res) {
            var query = req.query.q;
        
            if (query) {
                
                queryHandler.saveQuery(db, req, res);
                
            } else {
                
                res.sendFile(process.cwd() + '/public/index.html');
            
            }
        });
        
};

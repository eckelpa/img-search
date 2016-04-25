'use strict';

var mongoose = require('mongoose');
var request = require('request');
var LatestQueries = require('../models/latestQueries.js');
var key = "YOUR APP KEY";
var cx = 'YOUR APP ID';
var fields = "items(snippet,link,image/contextLink)";

function queryHandler () {
    
    this.saveQuery = function(db,req, res) {
        var query = req.query.q;
            var offset = req.query.offset;
            var start = 1;
            if (offset) start += (offset - 1) * 10;
            var time = new Date();
           // if (query) {
                request.get('https://www.googleapis.com/customsearch/v1?searchType=image&key=' + key + '&cx=' + cx + '&q=' + query + '&start=' + start + '&fields=' + fields, function(error, response, body) {
                    if (!error && response.statusCode === 200) {
                        db.on('error', console.error.bind(console, 'connection error:'));
			            db.once('open', function() {
  				            console.log('Connected to database');
                            var newRecord = new LatestQueries({
                                query: query,
                                time: time.toISOString()
                            });
                            newRecord.save(function (err, doc) {
                                if (err) return console.error(err);
                                console.log(doc);
                                mongoose.disconnect();                    
                            });
			            });
			            mongoose.connect('mongodb://localhost/url');
			            var arr = JSON.parse(body);
			            var results = [];
			            arr.items.forEach(function(val) {
			                results.push({link: val.link, snippet: val.snippet, context: val.image.contextLink});
			            });
                        res.json(JSON.parse(JSON.stringify(results)));
                    } else {
                       console.error(error);
                    }
                });
        //}
    };
    
    this.getRecent = function(db, res) {
        db.on('error', console.error.bind(console, 'connection error:'));
        db.once('open', function() {
            console.log('Connected to database');
            LatestQueries
                .find().
                select({query: 1, time: 1, _id: 0}).
                limit(10).
                exec(function(err, docs) {
                    if (err) return console.error(err);
                    mongoose.disconnect();
                    console.log(docs);
                    res.json(docs);
                });
            });
            mongoose.connect('mongodb://localhost/url');
    };
    
}

module.exports = queryHandler;
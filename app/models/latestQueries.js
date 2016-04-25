'use strict';

var mongoose = require('mongoose');

var Schema = mongoose.Schema({
    query : String,
    time: Date
});

module.exports = mongoose.model('latestQueries', Schema);
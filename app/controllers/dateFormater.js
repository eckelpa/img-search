'use strict';

var displayResult = require(process.cwd() + '/app/controllers/displayResult.js');

function dateFormat(date) {
    
    var d = new Date(date);
	    if (!isNaN(Number(date))) {
	        d = new Date(date * 1000);
	        var normal = d.toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: '2-digit' });
	        return displayResult(date, normal);
	    } else {
	        if (isNaN(d)) {return displayResult(null, null);}
	        var unixtime = d.getTime() / 1000;
	        return displayResult(unixtime, date);
	    }
}

module.exports = dateFormat;
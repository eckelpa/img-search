'use strict';

function displayResult(unixdate, normal) {
    var json = {unixdate: unixdate, normal: normal};
	return JSON.stringify(json);
}

module.exports = displayResult;
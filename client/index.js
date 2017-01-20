var request = require('request');
var dateformat = require('dateformat');
var config = require('./config.json');

_log = console.log;

var appToken;

function Logger(_appToken){
	appToken = _appToken;
}

console.log = function(msg){
	var now = dateformat(new Date(), "dd mmm yy | hh:MM:ss");
	//_log(now);
	request({
    	url: config.server.url + ':' + config.server.port + "/log",
    	method: "POST",
		json: {msg: now +": " + msg, token:appToken}
    },function(error, response, body){
    	if(error){_log("error")};
    });
}

module.exports = Logger;
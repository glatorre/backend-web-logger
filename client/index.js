var request = require('request');
//var dateformat = require('dateformat');
var config = require('./config.json');

_log = console.log;

var appToken;

function Logger(_appToken){
	appToken = _appToken;
}

console.log = function(msg, type, tags){
	_log(msg);
	if(tags == undefined){
		tags = [];
	}
	if(type == undefined)
		type = "log";

	request({
    	url: config.server.url + ':' + config.server.port + "/log",
    	method: "POST",
		json: {msg: msg, tags: tags, type:type, appToken:appToken}
    },function(error, response, body){
    	if(error){_log("Logger server is not available")};
    });
}

process.on('uncaughtException', function(err){
	console.log(err.message, "exc");
});

module.exports = Logger;
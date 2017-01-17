var request = require('request');
var config = require('./config.json');

_log = console.log;

var appToken;

function Logger(_appToken){
	appToken = _appToken;
}

console.log = function(msg){
	request({
    	url: config.server.url + ':' + config.server.port + "/log",
    	method: "POST",
    	//json: {msg:msg, token:config.app.token}
		json: {msg:msg, token:appToken}
    },function(error, response, body){
    	if(error){_log("error")};
    });
}

module.exports = Logger;
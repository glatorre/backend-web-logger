var request = require('request');
var config = require('./config.json');

_log = console.log;

console.log = function(msg){
	request({
    	url: config.server.url + ':' + config.server.port + "/log",
    	method: "POST",
    	json: {msg:msg, token:config.app.token}
    },function(error, response, body){
    	if(error){_log("error")};
    });
}
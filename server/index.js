var express = require('express'),
bodyParser = require('body-parser'),
methodOverride = require('method-override'),
http = require('http'),
path = require('path');

var app = module.exports = express();
app.set('port', process.env.PORT || 3600);
app.use(express.static(path.join(__dirname, 'public')));
app.use(bodyParser.json());

var faye = require('faye');
var server = http.createServer(app),
	bayeux = new faye.NodeAdapter({mount: '/faye', timeout: 45});

bayeux.attach(server);
server.listen(app.get('port'), function () {
	console.log('Express server listening on port ' + app.get('port'));
});

app.post('/log', function(req,res){
	console.log("Log received");
	bayeux.getClient().publish('/log/'+req.body.token, {content: req.body.msg});
	res.end();
});
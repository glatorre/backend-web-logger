var express = require('express'),
bodyParser = require('body-parser'),
methodOverride = require('method-override'),
http = require('http'),
path = require('path');

var app = module.exports = express();
app.set('port', process.env.PORT || 3600);
//app.set('views', __dirname + '/views');
app.use(express.static(path.join(__dirname, 'public')));
app.use(bodyParser.json());



//var server = require('http').Server(app);
//var io = require('socket.io')(server);
//server.listen(app.get('port'));

/*var sockets = {};
io.on('connection', function (socket) {
	console.log("client connected "+ socket.id);

	sockets[socket.id] = socket;

	socket.on('disconnect', function () {
		console.log("client disconnected : " + socket.id);
		delete sockets[socket.id];
	});
  	//socket.on('my other event', function (data) {
    //	console.log(data);
  	//});
});*/

var faye = require('faye');
var server = http.createServer(app),
	bayeux = new faye.NodeAdapter({mount: '/faye', timeout: 45});

bayeux.attach(server);
server.listen(app.get('port'), function () {
	console.log('Express server listening on port ' + app.get('port'));
});

//var client = new faye.Client('http://localhost:8000/faye');

app.post('/log', function(req,res){
	console.log("Log received");
	bayeux.getClient().publish('/log/'+req.body.token, {content: req.body.msg});
	res.end();
});
var express = require('express'),
bodyParser = require('body-parser'),
methodOverride = require('method-override'),
http = require('http'),
path = require('path');

var app = module.exports = express();
app.set('port', process.env.PORT || 3000);
//app.set('views', __dirname + '/views');
app.use(express.static(path.join(__dirname, 'public')));
app.use(bodyParser.json());

app.post('/log', function(req,res){
	console.log("Log : " + JSON.stringify(req.body));
	for (var key in sockets) {
   		if (sockets.hasOwnProperty(key)) {
      		sockets[key].emit('log', { msg: req.body.msg });
   		}
	}
	res.end();
});

var server = require('http').Server(app);
var io = require('socket.io')(server);
server.listen(app.get('port'));

var sockets = {};
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
});





//http.createServer(app).listen(app.get('port'), function () {
//  console.log('Express server listening on port ' + app.get('port'));
//});
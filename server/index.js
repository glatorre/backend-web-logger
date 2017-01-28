var config = require("./config/config")(),
express = require('express'),
bodyParser = require('body-parser'),
methodOverride = require('method-override'),
http = require('http'),
path = require('path'),
mongoose = require('mongoose');


mongoose.connect(config.mongodb.ENDPOINT);

var app = module.exports = express();
app.set('port', config.express.PORT);
app.use(express.static(path.join(__dirname, 'public')));
app.use(bodyParser.json());


var faye = require('faye');
var server = http.createServer(app),
	bayeux = new faye.NodeAdapter({mount: '/faye', timeout: 45});

bayeux.attach(server);

require("./routes")(app, bayeux.getClient());

server.listen(app.get('port'), function () {
	console.log('Express server listening on port ' + app.get('port'));
});




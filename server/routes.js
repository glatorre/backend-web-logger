var logController = require("./controllers/log.controller");

module.exports = function(expressApp, fayeClient){
    
    expressApp.get('/logs', function(req, res){
        logController.getLogs(req.query, function(logs){
            res.status(200);
            res.json(logs);
        })    
    });
    
    expressApp.post('/log', function(req, res){
        //fayeClient.publish('/log/'+req.body.token, {content: req.body.msg});
        fayeClient.publish('/log/'+req.body.appToken, req.body);
        logController.saveLog(req.body);
        res.end();
    });
    
}
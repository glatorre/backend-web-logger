var Log = require('../models/log.model');

exports.saveLog = function(logObj, cb){
    var log = new Log(logObj);
    log.save(function(err, data){
        if(err){
            console.log(err);
        }
        else{
            if(cb){
                cb(data);
            }
        }
    })
};

exports.getLogs = function(query, cb){
    Log.find({}, {_id:0, appToken:0, __v:0}, function(err, logs){
        if(err){
            console.log(err);
        }
        else{
            if(cb){
                cb(logs);
            }
        }
    })
}
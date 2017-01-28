var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var logSchema = new Schema({
    ts: { type: Date, default: Date.now },
    msg: String,
    tags: [String],
    type: String,
    appToken : { type: String, index: true}
});

var Log = mongoose.model('Log', logSchema, 'logs');
module.exports = Log;
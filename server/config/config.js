var env = process.env.NODE_ENV || 'development';
//var foo = require("./"+env+".js")();

module.exports = function(){
    return require("./"+env+".js")();
}
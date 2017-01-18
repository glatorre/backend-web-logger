new (require("../client"))("12345"); // 12345 is the appToken

setInterval(function(){
	console.log("Prova: " + new Date().getTime());
}, 5000);
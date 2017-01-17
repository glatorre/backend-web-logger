new (require("../client"))("12345");

setInterval(function(){
	console.log("Prova: " + new Date().getTime());
}, 5000);
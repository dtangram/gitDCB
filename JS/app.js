var http = require("http");
var fs = require("fs");
var hostname = "127.0.0.1";
var port = "8080";

fs.readFile("index.html", (err, html) => {
	if(err){
		throw err;
	}
	
	var server = http.createServer((req, res) => {
		res.statusCode = 200;
		res.setHeader("Content-type", "text/html");
		res.write(html);
		res.end();
	});
});
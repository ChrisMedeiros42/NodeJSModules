// File System allows the use of the local file system on the server
// - .readFile() reads files from the server

var http = require('http');
var fs = require('fs');

http.createServer(function(req, res) {
	fs.readFile('readfile.html', (err, data) => {
		res.writeHead(200, {'Content-type': 'text/html'});
		res.write(data);
		return res.end();
	});
}).listen(8080);
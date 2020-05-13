// File System allows the use of the local file system on the server
// - .unlink() deletes the specified file

var fs = require('fs');

// Delete the specified file
fs.unlink('myNewFile02.txt', function(err) {
	if (err) throw err;
	console.log('File deleted!');
});
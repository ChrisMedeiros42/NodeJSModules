// File System allows the use of the local file system on the server
// - .rename() renames the specified file with the specified name

var fs = require('fs');

// Rename the specified file with the specified file name
fs.rename('myNewFile01.txt', 'myRenamedFile.txt', function(err) {
	if (err) throw err;
	console.log('File renamed!');
});
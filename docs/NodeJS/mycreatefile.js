// File System allows the use of the local file system on the server
// - .appendFile() appends specified content to a file on the server

var fs = require('fs');

// Create a new file named myNewFile01.txt
fs.appendFile('myNewFile01.txt', 'Hello content!', function(err) {
	if (err) throw err;
	console.log('Saved!');
})
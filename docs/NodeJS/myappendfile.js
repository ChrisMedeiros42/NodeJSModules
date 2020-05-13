// File System allows the use of the local file system on the server
// - .appendFile() appends specified content to the end of a file on the server

var fs = require('fs');

// Append content to a file named myNewFile01.txt
fs.appendFile('myNewFile01.txt', 'Updated content!', function(err) {
	if (err) throw err;
	console.log('Updated!');
});
// File System allows the use of the local file system on the server
// - .open() takes a flag in the second argument, then opens the file
//   - If the file doesn't exist, it will be created
//   - w - Writes to the file
//   - r - Reads the contents of the file

var fs = require('fs');

// Open/create the file named myNewFile02.txt
fs.open('myNewFile02.txt', 'w', function(err, file) {
	if (err) throw err;
	console.log('Saved!');
})
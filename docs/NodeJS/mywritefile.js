// File System allows the use of the local file system on the server
// - .writeFile() replaces a file and its content if it exists
//   - If the file doesn't exist, it will be created

var fs = require('fs');

// Create/write over the file named myNewFile03.txt
fs.writeFile('myNewFile03.txt', 'Hello content!', function(err) {
	if (err) throw err;
	console.log('Saved!');
})
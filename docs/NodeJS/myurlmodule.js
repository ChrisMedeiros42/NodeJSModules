// URL Module splits up a web address into readable parts
// - .parse() returns a URL object with each part of the address as properties

var url = require('url');
var adr = 'http://localhost:8080/default.htm?year=2020&month=may';
var q = url.parse(adr, true);


console.log(`Host: ${q.host}`);		// Returns 'localhost:8080'
console.log(`Path: ${q.pathname}`);	// Returns '/default.htm'
console.log(`Search: ${q.search}`);	// Returns '?year=2020&month=may'

var qdata = q.query		// Returns an object: { year: 2020, month: may }
console.log(`Query(Month): ${qdata.month}`); // Returns may
console.log(`Query(Year): ${qdata.year}`); // Returns 2020
var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/";
var options = {useUnifiedTopology: true, useNewUrlParser: true};

MongoClient.connect(url, options, function(err, db) {
	if (err) throw err;
	var dbo = db.db("mydb");
	// deleteOne() - Delete the first occurrence of a document
	var myQuery = { address: 'Mountain 21' };
	dbo.collection("customers").deleteOne(myQuery, function(err, obj) {
		if (err) throw err;
		console.log("1 document deleted.");
		db.close();
	});
});
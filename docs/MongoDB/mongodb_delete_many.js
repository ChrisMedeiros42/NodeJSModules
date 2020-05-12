var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/";
var options = {useUnifiedTopology: true, useNewUrlParser: true};

MongoClient.connect(url, options, function(err, db) {
	if (err) throw err;
	var dbo = db.db("mydb");
	// deleteMany() - Delete all documents that match the query
	var myQuery = { address: /^O/ };
	dbo.collection("customers").deleteMany(myQuery, function(err, obj) {
		if (err) throw err;
		console.log(obj.result.n + " document(s) deleted.");
		db.close();
	});
});
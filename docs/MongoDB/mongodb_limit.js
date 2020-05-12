var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/";
var options = {useUnifiedTopology: true, useNewUrlParser: true};

MongoClient.connect(url, options, function(err, db) {
	if (err) throw err;
	var dbo = db.db("mydb");
	// limit(#) - Limit the result to return the desired number of documents
	dbo.collection("customers").find().limit(5).toArray(function(err, res) {
		if (err) throw err;
		console.log(res);
		db.close();
	});
});
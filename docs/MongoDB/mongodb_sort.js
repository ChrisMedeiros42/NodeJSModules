var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/";
var options = {useUnifiedTopology: true, useNewUrlParser: true};

MongoClient.connect(url, options, function(err, db) {
	if (err) throw err;
	var dbo = db.db("mydb");
	// Sort { <element>: <order> } | Order: -1 = descending, 1 = ascending
	var mySort = { name: 1 };
	dbo.collection("customers").find().sort(mySort).toArray(function(err, res) {
		if (err) throw err;
		console.log(res);
		db.close();
	});
});
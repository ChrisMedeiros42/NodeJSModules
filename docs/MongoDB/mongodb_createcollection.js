var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/";
var options = {useUnifiedTopology: true, useNewUrlParser: true};

MongoClient.connect(url, options, function(err, db) {
	if (err) throw err;
	var dbo = db.db("mydb");
	dbo.createCollection("customers", function(err, res) {
		if (err) throw err;
		console.log("Collection created!");
		db.close();
	});
});
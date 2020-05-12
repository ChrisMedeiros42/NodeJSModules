var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/";
var options = {useUnifiedTopology: true, useNewUrlParser: true};

MongoClient.connect(url, options, function(err, db) {
	if (err) throw err;
	var dbo = db.db("mydb");
	
	// Display list of all collections
	dbo.listCollections().toArray(function(err, res) {
		if (err) throw err;
		console.log(res);
		db.close(); // Now, close the connection
	});
});
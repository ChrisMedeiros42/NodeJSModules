var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/";
var options = {useUnifiedTopology: true, useNewUrlParser: true};

MongoClient.connect(url, options, function(err, db) {
	if (err) throw err;
	var dbo = db.db("mydb");
	// dropCollection() - Delete a table or collection
	dbo.dropCollection("products", function(err, delOK) {
		if (err) throw err;
		if (delOK) console.log("Collection deleted.");
		db.close();
	});
});
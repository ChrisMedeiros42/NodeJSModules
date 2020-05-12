var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/";
var options = {useUnifiedTopology: true, useNewUrlParser: true};

MongoClient.connect(url, options, function(err, db) {
	if (err) throw err;
	var dbo = db.db("mydb");
	// updateOne() - Update a record or document
	var myQuery = { address: "Valley 345" };
	var newValues = { $set: { name: "Mickey", address: "Canyon 123" } };
	dbo.collection("customers").updateOne(myQuery, newValues, function(err, res) {
		if (err) throw err;
		console.log("1 document updated.");
		db.close();
	});
});
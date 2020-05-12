var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/";
var options = {useUnifiedTopology: true, useNewUrlParser: true};

MongoClient.connect(url, options, function(err, db) {
	if (err) throw err;
	var dbo = db.db("mydb");
	var query = { address: "Park Lane 38" };
	dbo.collection("customers").find(query).toArray(function(err, res) {
		if (err) throw err;
		console.log(res);
		db.close();
	});
});
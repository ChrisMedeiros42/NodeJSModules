var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/";
var options = {useUnifiedTopology: true, useNewUrlParser: true};

MongoClient.connect(url, options, function(err, db) {
	if (err) throw err;
	var dbo = db.db("mydb");
	dbo.collection("customers").findOne({}, function(err, res) {
		if (err) throw err;
		console.log(res.name);
		db.close();
	});
});
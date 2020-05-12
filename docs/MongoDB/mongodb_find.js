var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/";
var options = {useUnifiedTopology: true, useNewUrlParser: true};

MongoClient.connect(url, options, function(err, db) {
	if (err) throw err;
	var dbo = db.db("mydb");

	// Display - Customers
	dbo.collection("customers").find({}).toArray(function(err, res) {
		if (err) throw err;
		console.log("Customers:");
		console.log(res);
		// db.close();
	});

	// Display - Products
	dbo.collection("products").find({}).toArray(function(err, res) {
		if (err) throw err;
		console.log("Products:");
		console.log(res);
		// db.close();
	});

	// Display - Orders
	dbo.collection("orders").find({}).toArray(function(err, res) {
		if (err) throw err;
		console.log("Orders:");
		console.log(res);
		db.close();
	});
});
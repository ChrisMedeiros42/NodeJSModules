var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/";
var options = {useUnifiedTopology: true, useNewUrlParser: true};

MongoClient.connect(url, options, function(err, db) {
	if (err) throw err;
	var dbo = db.db("mydb");
	
	// 0: Exclude | 1: Include | - Only one exclude allowed
	
	// - Exclude only the _id field
	dbo.collection("customers").find({}, { projection: { _id: 0, name: 1, address: 1 } }).toArray(function(err, res) {
		if (err) throw err;
		console.log("Hide ID and show name and address");
		console.log(res);
		db.close();
	}); 
	/*
	// - Exclude the address field
	dbo.collection("customers").find({}, { projection: { address: 0 } }).toArray(function(err, res) {
		if (err) throw err;
		console.log("Hide addess only");
		console.log(res);
		db.close();
	}); */
	
	// - Exclude _id and only display name
	dbo.collection("customers").find({}, { projection: { _id: 0, name: 1 } }).toArray(function(err, res) {
		if (err) throw err;
		console.log("Hide ID and show name");
		console.log(res);
		console.log("The result of the 3rd document is:\n" + res[2].name);
		db.close();
	}); 
});
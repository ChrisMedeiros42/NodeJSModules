var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/";
var options = {useUnifiedTopology: true, useNewUrlParser: true};

MongoClient.connect(url, options, function(err, db) {
	if (err) throw err;
	var dbo = db.db("mydb");
	var myobj = [
		{ name: "John", address: "Highway 71" },
		{ name: "Peter", address: "Lowstreet 4" },
		{ name: "Amy", address: "Apple St 652" },
		{ name: "Hannah", address: "Mountain 21" },
		{ name: "Michael", address: "Valley 345" },
		{ name: "Sandy", address: "Ocean Blvd 2" },
		{ name: "Betty", address: "Green Grass 1" },
		{ name: "Richard", address: "Sky St 331" },
		{ name: "Susan", address: "One Way 98" },
		{ name: "Vicky", address: "Yellow Garden 2" },
		{ name: "Ben", address: "Park Lane 38" },
		{ name: "William", address: "Central St 954" },
		{ name: "Chuck", address: "Main Road 989" },
		{ name: "Viola", address: "Sideway 1633" }
	];
	dbo.collection("customers").insertMany(myobj, function(err, res) {
		if (err) throw err;
		console.log("Number of documents inserted: " + res.insertedCount);
		db.close();
	});
});
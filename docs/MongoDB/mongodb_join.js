var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/";
var options = {useUnifiedTopology: true, useNewUrlParser: true};

MongoClient.connect(url, options, function(err, db) {
	if (err) throw err;
	var dbo = db.db("mydb");
	// MongoDB is non-relational, but the $lookup allows a left outer join
	// $lookup - Allows specification of which collection to join with current selection
	dbo.collection("orders").aggregate([
		{ $lookup:
			{
				from: 'products',
				localField: 'product_id',
				foreignField: '_id',
				as: 'orderdetails'
			}
		}
		]).toArray(function(err, res) {
		if (err) throw err;
		console.log(JSON.stringify(res));
		db.close();
	});
});
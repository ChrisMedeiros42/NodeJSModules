var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/";
var options = { useUnifiedTopology: true, useNewUrlParser: true };

function closeOpenConnections(client) {
	return new Promise(resolve => {
		console.log("<closeOpenConnections> Started");
		
		// Close Connection
		client.close();
		console.log("<closeOpenConnections> Finished");
		resolve('<closeOpenConnections> Closed Connection.');
	});
}

function displayItems(dbo) {
	return new Promise(resolve => {
		console.log("<displayItems> Started");

		dbo.collection("orders").find({}).toArray(function(err, res) {
			if (err) throw err;
			var jResult = JSON.stringify(res);
			resolve(`<displayItems> Finished with existing orders.\n${jResult}\n`);
		});
		
		console.log("<displayItems> Finished.");
	});
};

function displayCollections(dbo) {
	return new Promise(resolve => {
		console.log("<displayCollections> Started");

		var collectionList = [];
		var parsedList = "";

		dbo.listCollections({}).next(function(err, res) {
			if (err) throw err;
			var jResult = JSON.stringify(res);
			console.log("Size: " + collectionList.length);
			console.log(`<displayCollections>\n${jResult}`);
			collectionList.push(jResult);
			console.log("Size: " + collectionList.length);
		});

		

		for (x in collectionList.name) {
			parsedList += collectionList.name[x] + "\n";
			console.log(`TEST: ${collectionList.name[x]}`);
		}

		resolve(`<displayCollections> Collections:\n${parsedList}\n`);
		
		console.log("<displayCollections> Finished.");
	});
};

function dropIfExists(dbo) {
	return new Promise(resolve => {
		console.log("<dropIfExists> Started");

		dbo.listCollections({name: "orders"}).next(function(err, collInfo){
			if (err) throw err;
			if (collInfo) {
				console.log("Orders collection found.");
				try {
					dbo.collection("orders").drop(function(err, delOK) {
						if (err) throw err;
						if (delOK) console.log("Orders collection deleted.");
					});
				} catch (err) {
					throw err;
				}
			} else {
				console.log("Orders collection does not exist.");
			}

			resolve(`Finished with existing orders.`);
		});
		
		console.log("<dropIfExists> Finished");
	});
};

function createCollection (dbo) {
	return new Promise(resolve => {
		console.log("<createCollection> Started.");
		// Create Collection - Orders
		dbo.createCollection("orders", function(err, res) {
			if (err) throw err;
			resolve(`<createCollection> Orders collection created!\n${res}\n`);
		});

		console.log("<createCollection> Finished.");
	});
};

function insertItems(dbo) {
	return new Promise(resolve => {
		console.log("<insertItems> Started.");

		// Build an object with documents to add to the collection
		var myObj = [
			{ _id: 1, product_id: 154, status: 1 }
		];

		// Add all documents to the Orders collection
		dbo.collection("orders").insertMany(myObj, function(err, res) {
			if (err) throw err;
			var jResult = JSON.stringify(res);
			resolve(`Number of documents inserted: ${res.insertedCount}\n${jResult}\n`);
		});
		
		console.log("<insertItems> Finished.");
	});
	
};

async function asyncStuff() {
	console.log("Running async items...");

	// Connect to MongoDB
	const client = await MongoClient.connect(url, options);
	// Specify the DB
	const dbo = client.db('mydb');

	// Run everything synchronously
	// const res0 = await displayCollections(dbo).catch(error => { console.log("<Error:displayCollections>:"); throw error; });
	const res2 = await displayItems(dbo).catch(error => { console.log("<Error:displayItems>:"); throw error; });
	const res3 = await dropIfExists(dbo).catch(error => { console.log("<Error:dropIfExists>:"); throw error; });
	const res4 = await createCollection(dbo).catch(error => { console.log("<Error:createCollection>:"); throw error; });
	const res5 = await insertItems(dbo).catch(error => { console.log("<Error:insertItems>:"); throw error; });
	const res6 = await displayItems(dbo).catch(error => { console.log("<Error:displayItems>:"); throw error; });
	const res1 = await closeOpenConnections(client).catch(error => { console.log("<Error:closeOpenConnections>:"); throw error; });

	// Run everything async (All items will execute before the Promise is sent)
	/* const [res1] = await Promise.all([
		displayItems(dbo).catch(error => { console.log("<Error:displayItems>:"); throw error;	}),
		//dropIfExists(dbo).catch(error => { console.log("<Error:dropIfExists>:"); throw error; }),
		//createCollection(dbo).catch(error => { console.log("<Error:createCollection>:"); throw error; }),
		//insertItems(dbo).catch(error => { console.log("<Error:insertItems>:"); throw error; }),
		//displayItems(dbo).catch(error => { console.log("<Error:displayItems>:"); throw error;	})
		// closeOpenConnections(client).catch(error => { console.log("<Error:closeOpenConnections>:"); throw error;	})
	]).then(()=>{console.log("Finished")}); */

	console.log(`\n${res2}\n${res3}\n${res4}\n${res5}\n${res6}\n${res1}\n`);
};
asyncStuff();
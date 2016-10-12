var MongoClient = require('mongodb').MongoClient;

MongoClient.connect('mongodb://localhost:27017/test', function(err, db) {
    if (err) throw err;
    console.log("Successfully connected to the database!");

    var result = db.collection('movies').insertOne({'name': 'Star Wars', 'date': new Date()});

    console.log(result);

    db.close();
})

var MongoClient = require('mongodb').MongoClient;

MongoClient.connect('mongodb://localhost:27017/test', function(err, db) {
    if (err) throw err;
    console.log("Successfully connected to the database!");

    db.collection('movies').find().toArray(function(err, docs) {
        docs.forEach(function(doc) {
            console.log(doc);
        })
    });

    db.close();
})

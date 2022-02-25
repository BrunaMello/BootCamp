const MongoClient = require('mongodb').MongoClient;
const assert = require('assert');

//Conection URL
const url = 'mongodb://localhost:27017';

//Database Name
const dbName = 'fruitsDB';

//Create a new MongoClient
const client = new MongoClient(url, {useNewUrlParser: true});

//Use conect method to connect to the server
client.connect(function (err) {
    assert.equal(null, err);
    console.log('Conected to server');

    const db = client.db(dbName);

    findDocuments(db, function () {
        client.close();
    })
})

const insertDocuments = function (db, callback) {
    //get the docs collection
    const collection = db.collection('fruits');
    //insert some documents
    collection.insertMany([
        {
            name : 'Apple',
            score: 8,
            review: 'Great fruit'
        },
        {
            name : 'Orange',
            score: 6,
            review: 'Kinda sour'
        },
        {
            name : 'Banana',
            score: 9,
            review: 'Great stuff!'
        },
    ], function (err, result){
        assert.equal(err, null);
        assert.equal(3,result.insertedCount);
        assert.equal(3,Object.keys(result.insertedIds).length);
        console.log("Inserted 3 docs inside the collection");
        callback(result);
    })
}

const findDocuments = function (db, callback) {
    //get the docs collection
    const collection = db.collection('fruits');
    //find some documents
    collection.find({}).toArray( function (err, fruits) {
        assert.equal(err, null);
        console.log("Found the following records");
        console.log(fruits);
        callback(fruits);
    })
}



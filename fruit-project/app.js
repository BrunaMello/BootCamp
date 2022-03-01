const mongoose = require('mongoose');
//const {compareTopologyVersion} = require("mongodb/src/sdam/server_description");

//Conection Mongoose
mongoose.connect('mongodb://localhost:27017/fruitsDB', { useNewUrlParser: true });

//table/schemas  structure
const fruitsSchema = new mongoose.Schema ({
        name: {
            type: String,
            required: true,
        },
        rating: {
            //data validation
            type: Number,
            min: 1,
            max: 10,
    }, review: String
    });

const peopleSchema = mongoose.Schema ({
    name: String, age: Number,
    //relationships embeded
    favoriteFruit: fruitsSchema
})

//collection fruits models
const Fruit = mongoose.model('Fruit', fruitsSchema);

const Person = mongoose.model('Person', peopleSchema);

//objs
const fruit = new Fruit ({
    name:'',
    rating: 4,
    review: "Good fruit"
});

const pineapple = new Fruit ({
    name:'Pineapple',
    rating: 4,
    review: "Sour fruit",
});


const person = new Person ({
    name: 'Amy',
    age: 37,
    favoriteFruit: pineapple
})

//saves
fruit.save()
person.save();
pineapple.save();


//insert many objs
const kiwi = new Fruit ({
    name: 'Kiwi',
    rating: 10,
    review: "Best fruit"
});

const banana = new Fruit ({
    name: 'Banana',
    rating: 3,
    review: "Weird fruit"
});

Fruit.insertMany(
    [kiwi, banana], function (err) {
        if (err) {
            console.log(err)
        } else {
            console.log('Fruits inserted to DB');
        }
    });

//find/read database
Fruit.find(function (err, fruits) {
    if (err) {
        console.log(err);
    } else {

        //closing database
        //mongoose.connection.close();

        fruits.forEach(function (fruit) {
            console.log(fruit.name);
        })
    }
})

Person.find(function (err, person) {
    if (err) {
        console.log(err);
    } else {
        person.forEach(function (person) {
            console.log(person.name);
        })
    }
})

//updates
Person.updateOne({name: 'John'}, {favoriteFruit: pineapple}, function (err) {
    if (err) {
        console.log(err);
    } else {
        console.log('Person updated!');
    }
})

Fruit.updateOne({_id: '621d444347cc2ce7188bb063'}, {name: 'Peach'}, function (err) {
    if (err) {
        console.log(err);
    } else {
        console.log('Object Updated!');
    }
})

Fruit.deleteOne({_id: '621d444347cc2ce7188bb063'}, function (err) {
    if (err) {
        console.log(err);
    } else {
        console.log('Object Deleted!');
    }
})

Person.deleteOne({name: 'Amy'}, function (err) {
    if (err) {
        console.log(err);
    } else {
        console.log("Person deleted!");
    }

})

//only mongodb
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



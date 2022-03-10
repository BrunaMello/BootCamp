const express = require('express');
const bodeParser = require('body-parser');
const {render} = require('ejs');
const bodyParser = require('body-parser');
const date = require(__dirname + '/date.js');
const {getDay} = require("./date");
const mongoose = require('mongoose');
const _ = require('lodash');


const app = express();
app.use(bodeParser.urlencoded({extended: true}));

//static things
app.use('*/css', express.static('public/css'));

//mongoDB
mongoose.connect('mongodb+srv://brunamello:Test123@cluster0.spz2a.mongodb.net/todolistDB');
const { Schema } = mongoose;

//Schemas
const todoSchema = new Schema ({
    name: {
        type: String,
    }
});

const listSchema = new Schema({
    name: {
        type: String
    },
    items: [todoSchema]
});

//Models
const Item = mongoose.model('Item', todoSchema);
const List = mongoose.model('List', listSchema);

//Documents
const travel = new Item({ name: 'Travel'});
const hairCut = new Item({ name: 'Hair Cut'});

//Array to insert many
const defaultItems = [travel, hairCut];


//Find

app.set('view engine', 'ejs');

//get
app.get('/', function (req, res) {
    return Item.find({},function (err, item){
        if (item.length === 0) {

            Item.insertMany(defaultItems, function (err) {
                if (err) {
                    console.log(err)
                } else {
                    console.log("Items Inserted!")
                }
            });
            res.redirect("/");
        } else {
            res.render('list', {listTitle: 'Today', newListItems: item})
        }
    })
});

app.get('/:customListName', function (req,res) {
    const customListName = _.capitalize(req.params.customListName);
    return List.findOne({name: customListName}, function (err, foundList) {
        if (!err){
            if (!foundList) {
                //creating a new list
                const list = new List({
                    name: customListName,
                    items: defaultItems
                })
                list.save();
                res.redirect('/' + customListName);
            } else {
                //showing exists lists
                res.render('list', {listTitle: foundList.name, newListItems: foundList.items})
            }
        }

    })

})


//post
app.post('/', function (req, res) {

    //saving a new item on list
    //correspond to a name of the input
    const itemName = req.body.newItem;

    //correspond to a name of the button
    const listName = req.body.list;

    const item = new Item({
        name: itemName
    })

    //choosing a list to input
    if (listName === 'Today') {
        item.save;
        res.redirect('/');
    } else {
        List.findOne({name: listName}, function (err, foundList) {
            foundList.items.push(item);
            foundList.save();
            res.redirect('/' + listName);
        })
    }
});



app.post('/delete', function (req, res) {

    //refer to name inputs
    const checkedItemID = req.body.checkbox;
    const listName = req.body.listName;

    if (listName === 'Today') {
        Item.findByIdAndDelete(checkedItemID, function (err) {
            if (err){
                console.log(err);
            } else {
                console.log('Item deleted!');
            }

            res.redirect("/");
        })
        //using delete array inside arrays
    } else {
        List.findOneAndUpdate({name: listName}, {$pull: {items: {_id: checkedItemID}}}, function (err, foundList) {
            if (!err) {
                res.redirect('/' + listName);
            }
        })
    }
})

let port = process.env.PORT;
if (port == null || port == "") {
    port = 3000;
}

app.listen(port, function () {
    console.log('Running on port 3000');
});

app.get('/work', function (req, res) {
    res.render('list', {listTitle: 'Work', newListItems: workItems} )
})

app.post('/work', function (req, res) {
    let item = req.body.newListItems;
    workItems.push(item);
    res.redirect('/work');
})

app.get('/about', function (req,res) {
    res.render('about');

})





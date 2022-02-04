const express = require('express');
const bodeParser = require('body-parser');
const {render} = require('ejs');
const bodyParser = require('body-parser');
const date = require(__dirname + '/date.js');
const {getDay} = require("./date");


const app = express();
app.use(bodeParser.urlencoded({extended: true}));

//static things
app.use('*/css', express.static('public/css'));


const items = ['Good Day'];
const workItems = ['Work Day'];

app.set('view engine', 'ejs');

app.get('/', function (req, res) {

    let day = date.getDate();

    res.render('list', {listTitle: day, newListItems: items});

});

app.post('/', function (req, res) {

    let item = req.body.newItem;

    if (req.body.list === 'Work') {
        workItems.push(item);
        res.redirect('/work');
    } else {
        items.push(item);
        res.redirect('/');
    }


})


app.listen(3000, function () {
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





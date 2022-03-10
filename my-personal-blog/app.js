const express = require('express');
const bodyParser= require('body-parser');
const {request} = require("express");
const _ = require("lodash");
const mongoose = require('mongoose');


//mongoose conect
mongoose.connect('mongodb+srv://brunamello:Test123@cluster0.spz2a.mongodb.net/blogDB')
const { Schema } = mongoose;

//Schemas
const postSchema = new Schema({
    title: {
        type: String,
    },
    content: {
        type: String,
    }
})

//Models
const Post = mongoose.model('Post', postSchema);



//use modules
const app = express();
app.use(bodyParser.urlencoded({extended: true}));
app.set('view engine', 'ejs');

//static folders
app.use('*/css', express.static('public/css'));
app.use('*/images', express.static('public/images'));
app.use('*/js', express.static('public/js'));

//content
const homeStartingContent = 'Recents Post';

const aboutContent = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.';

const contactContent = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.';

const contents = ['Fist input'];


//gets
app.get('/home', function (req,res) {

    Post.find({}, function (err, posts) {
        res.render('home', {homeStartingContent: homeStartingContent, newListPost: posts})
    })
});

app.get('/about', function (req,res) {

    res.render('about', {aboutContent: aboutContent});
});

app.get('/contact', function (req,res) {

    res.render('contact', {contactContent: contactContent});
});

app.get('/content', function (req,res) {

    res.render('content', {contents: contents});
});

app.get('/posts/:idPost', function (req,res) {
    const idParam = req.params.idPost;

    Post.findOne({_id: idParam}, function (err, post) {
        res.render('post', {title: post.title, content: post.content})
    })

});

//post

app.post('/content', function (req, res) {

    const post = new Post({
        title: req.body.postTitle,
        content: req.body.postBody
    })

    post.save(function (err) {
        if (!err){
            res.redirect('/home');
        }
    });

})





//listen
app.listen(3000, function () {
    console.log('Running on port 3000');
});






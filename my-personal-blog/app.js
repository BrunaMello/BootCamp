const express = require('express');
const bodyParser= require('body-parser');
const {request} = require("express");
const _ = require("lodash");


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

let blogPosts = [];



//gets
app.get('/home', function (req,res) {

    res.render('home', {homeStartingContent: homeStartingContent, blogPosts: blogPosts});
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

app.get('/posts/:postName', function (req,res) {
    const idParam = _.lowerCase(req.params.postName);

    blogPosts.forEach(function (postBlog) {
        storedTitle = _.lowerCase(postBlog.postTitle);

        if (storedTitle === idParam) {
            res.render('post', {
                title: postBlog.postTitle,
                content: postBlog.postBody });
        }
    });





});

//post

app.post('/content', function (req, res) {

    const postBlog = { postTitle: req.body.postTitle , postBody: req.body.postBody};

    blogPosts.push(postBlog);

    res.redirect('/home');

})





//listen
app.listen(3000, function () {
    console.log('Running on port 3000');
});






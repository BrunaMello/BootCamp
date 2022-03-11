const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const express = require('express');
const ejs = require('ejs');
const _ = require('lodash');

//settings
const app = express();
app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({extended: true}));

//static files settings
app.use(express.static('public'));


//Database settings
mongoose.connect('mongodb+srv://brunamello:Test123@cluster0.spz2a.mongodb.net/wikiDB');

//Schemas
const { Schema } = mongoose;

const articleSchema = new Schema ({
    title: {
        type: String,
    },
    content: {
        type: String,
    }
})


//Models
const Article = mongoose.model('Article', articleSchema);


//Documents
const document = new Article ({
    title: {
        type: String
    },
    content: {
        type: String
    }
});

///Routes for all articles

app.route('/articles')

    .get(function (req, res) {

        Article.find({}, function (err, foundArticles) {
            if (!err) {
                res.send(foundArticles);
            } else {
                res.send(err);
            }
        });
    })

    .post(function (req, res) {

        const newArticle = new Article ({
            title: _.capitalize(req.body.title),
            content: req.body.content
        });

        newArticle.save(function (err) {
            if (!err) {
                res.send("Successfully");
            } else {
                res.send(err);
            }
        });

    })

    .delete(function (req, res) {

        Article.deleteMany({}, function (err) {
            if (!err) {
                res.send("Successfully deleted all articles.");
            } else {
                res.send(err);
            }
        });

    });


//Routes for specific articles

app.route('/articles/:articleTitle')

    .get( function (req, res) {

        const articleTitle = _.capitalize(req.params.articleTitle);

        //req.params == :blabla from url
        Article.findOne({title: articleTitle}, function (err, foundArticle) {
            if (!err) {
                res.send(foundArticle);
            } else {
                res.send(err);
            }
        })
    })

    .put(function (req, res) {

        Article.replaceOne({title: req.params.articleTitle},
            {title: req.body.title, content: req.body.content},
              function (err) {

                if (!err) {
                res.send('Article Updated');
                } else {
                res.send(err);
                }
            }
        )

    })

    .patch(function (req, res) {

        Article.updateOne({title: req.params.articleTitle},
            {$set: req.body},
            function (err) {
                if (!err) {
                    res.send('Updated');
                } else {
                    res.send(err);
                }
            })
    })

    .delete(function (req, res) {

        Article.deleteOne({title: req.params.articleTitle}, function (err) {
            if (!err) {
                res.send("Deleted");
            } else {
                res.send(err);
            }
        })

    });






//port connections
let port = process.env.PORT;
if (port == null || port == '') {
    port = 3000;
}

app.listen(port, function () {
    console.log('Running on port number: ' + port)
});


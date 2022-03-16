//initial config
require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const ejs = require('ejs');
const mongoose = require('mongoose');
const session = require('express-session');
const passport = require("passport");
const passportLocalMongoose = require("passport-local-mongoose");
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const findOrCreate = require('mongoose-findorcreate');
const FacebookStrategy = require('passport-facebook').Strategy;

const app = express();

app.use(express.static("public"));
app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({ extended: true }));

//session
app.use(session({
    secret: 'Ourlitllesecret.',
    resave: false,
    saveUninitialized: false
}));

app.use(passport.initialize());
app.use(passport.session());


//mongo config
mongoose.connect('mongodb+srv://brunamello:Test123@cluster0.spz2a.mongodb.net/userDB');

//Schemas
const userSchema = new mongoose.Schema({
    email: String,
    password: String,
    googleId: String,
    secret: String
})
userSchema.plugin(passportLocalMongoose);
userSchema.plugin(findOrCreate);


//Models
const User = new  mongoose.model('User', userSchema);

//Cookies
passport.use(User.createStrategy());

passport.serializeUser(function (user, done) {

    done(null, user.id);

});

passport.deserializeUser(function (id, done) {

    User.findById(id, function (err, user) {
        done(err, user);
    });
});

//Google Auth
passport.use(new GoogleStrategy({
        clientID: process.env.CLIENT_ID,
        clientSecret: process.env.CLIENT_SECRET,
        callbackURL: 'http://localhost:3000/auth/google/secrets'
        //userProfileURL: 'https://www.googleapis.com/oauth2/v3/userinfo'
    },
    function(accessToken, refreshToken, profile, cb) {
        User.findOrCreate({ googleId: profile.id }, function (err, user) {
            return cb(err, user);
        });
    }

));

//Facebook Auth
passport.use(new FacebookStrategy({
        clientID: process.env.FACEBOOK_APP_ID,
        clientSecret: process.env.FACEBOOK_APP_SECRET,
        callbackURL: "http://localhost:3000/auth/facebook/secrets"
    },
    function(accessToken, refreshToken, profile, cb) {
        User.findOrCreate({ facebookId: profile.id }, function (err, user) {
            return cb(err, user);
        });
    }
));

//Home Routes
app.route('/home')

    .get((req, res) => {
        res.render('home');
    })

//Google Routes
app.route('/auth/google')

    .get(
        passport.authenticate('google', { scope: ['profile']}));

app.route('/auth/google/secrets')

    .get(
        passport.authenticate('google', {failureRedirect: '/login'}),
        ((req, res) => {
            res.redirect('/secrets')
        })
    );

//Facebook Routes
app.route('/auth/facebook')

    .get(
        passport.authenticate('facebook')
    );

app.route('/auth/facebook/secrets')

    .get(
        passport.authenticate('facebook', { failureRedirect: '/login' }),
        ((req, res) => {
            res.redirect('/secrets');
        })
    );

//Login Routes
app.route('/login')

    .get(((req, res) => {
        res.render('login');
    }))

    .post(((req, res) => {

        const user = new User({
            username: req.body.username,
            password: req.body.password
        });

        req.login(user, function (err) {
            if (err) {
                console.log(err);
            } else {
                passport.authenticate('local') (req, res, function () {
                    res.redirect('/secrets');
                });
            }
        });


    }));

//Logout Routes
app.route('/logout')

    .get(((req, res) => {
        req.logout();
        res.redirect("/home")
    }));


//Register Routes
app.route('/register')

    .get(((req, res) => {
        res.render('register');
    }))

    .post(((req, res) => {

        User.register({ username: req.body.username }, req.body.password, function (err, user) {
            if (err) {
                console.log(err);
                res.redirect('/register');
            } else {
                passport.authenticate('local') (req, res, function () {
                    res.redirect('/secrets');
                })
            }
        })

    }));


//Secrets Routes
app.route('/secrets')

    .get(((req, res) => {
        User.find({'secret': {$ne: null}}, function (err, foundUsers) {
            if (err) {
                console.log(err);
            } else {
                res.render('secrets', {usersWithSecrets: foundUsers});
            }
        });
    }))

    .post()

//Submit Routes
app.route('/submit')

    .get(((req, res) => {
        if(req.isAuthenticated()) {
            res.render('submit');
        } else {
            res.redirect('/login');
        }
    }))

    .post(((req, res) => {
        const submittedSecret = req.body.secret;

        console.log(req.user.id);

        User.findById(req.user.id, function (err, foundUser) {
            if (err) {
                console.log(err);
            } else {
                if (foundUser) {
                    foundUser.secret = submittedSecret;
                    foundUser.save(function () {
                        res.redirect('/secrets');
                    });
                }
            }
        });
    }));


//localhost
app.listen(3000, function () {
    console.log('Running on port 3000');
})
const express = require("express");
var app = express();


app.get("/", function (req, res) {
    res.send("<h1>Hello!</h1>");
});

app.get("/contact", function (req, res) {
    res.send("bruna crespo mello");
})

app.get("/about", function (req, res) {
    res.send("My name is Bruna");
})

app.listen(4000, function () {
    console.log("Server started on port 4000");
});






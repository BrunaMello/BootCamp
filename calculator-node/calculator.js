const express = require('express');
const bodyParser = require('body-parser');


const app = express();
app.use(express.urlencoded({extended: true}));

app.get("/", function (req, res) {
    res.sendFile(__dirname + '/index.html');
})

app.post("/index.html", function (req, res) {
   var height = parseFloat(req.body.height);
   var weight = parseFloat(req.body.weight);

   var result = (weight / (height * height)) * 10000;

   res.send("Your BMI is: " + result);




})

app.listen(3000, function () {
    console.log("Server is running on port 3000.");
})

const express = require('express');
const https = require('https');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.urlencoded({extended: true}));


app.get('/', function (req, res) {

    res.sendFile(__dirname + '/index.html')


})

app.post('/', function (req, res) {

    const query = req.body.cityName;
    const apiKey = '1a6a26e4629928712c9e0d0462780665';
    const units = 'metric';
    const url = 'https://api.openweathermap.org/data/2.5/weather?q=' + query + '&units='+ units +'&appid=' + apiKey;


    https.get(url, function (response) {
        console.log(response.statusCode);

        response.on('data', function (data) {
            const weatherData = JSON.parse(data)
            const temp = weatherData.main.temp
            const weatherDescription = weatherData.weather[0].description
            console.log(weatherData)
            const icon = weatherData.weather[0].icon
            const imageURL = 'http://openweathermap.org/img/wn/' + icon + '@2x.png';
            console.log(imageURL);
            res.write('<head><meta charset="utf-8"></head>');
            res.write("<img src='" + imageURL + "'/>");
            res.write('<p>The weather is currently: <p>' + weatherDescription);
            res.write('<h1>The temperature in ' + query + ' is: ' + temp + ' degrees</h1>');
            res.send();
        })
    })


})



app.listen(3000, function () {
    console.log('Server is running on port 3000');
})
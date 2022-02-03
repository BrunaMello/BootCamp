const express = require("express");
const bodyParser = require("body-parser");
const request = require("request");
const mailchimp = require("@mailchimp/mailchimp_marketing");
const https = require("https");
const {response} = require("express");

const app = express();
app.use(bodyParser.urlencoded({extended: true}));


//puting static things
app.use('*/css',express.static('public/css'));
app.use('*/js',express.static('public/js'));
app.use('*/images',express.static('public/images'));

app.listen(3000, function () {
    console.log("Running on port 3000");
});

app.get("/", function (req, res) {
    res.sendFile(__dirname + "/signup.html");
});

mailchimp.setConfig( {
    apiKey: "3328cce4d3b754b8051afa41b973eefa-us14",

    server: "us14",
});


app.post("/", function (req, res) {

    const firstName = req.body.firstName;
    const lastName = req.body.lastName;
    const email = req.body.email;

    const data = {
        members: [{
            email_address: email,
            status: "subscribed",
            merge_fields: {
                FNAME: firstName,
                LNAME: lastName,
            }
        }]
    };

    const jsonData = JSON.stringify(data);

    const url = "https://us14.api.mailchimp.com/3.0/lists/76ec4ab401";
    const options = {
        method: "POST",
        auth: "bruna1: 3328cce4d3b754b8051afa41b973eefa-us14"
    }

    const request = https.request(url, options, function () {
        response.on("data", function (data) {
            console.log(JSON.parse(data));
        })
    })

    request.write(jsonData);
    request.end();



    // //list Id
    // const listId = "76ec4ab401";
    //
    // //Creating an object with the users data
    // const subscribingUser = {
    //     firstName: firstName,
    //     lastName: lastName,
    //     email: email
    // };

    // //uploading data server
    // async function run() {
    //     const response = await mailchimp.lists.addListMember(
    //         listId, {
    //             email_address: subscribingUser.email,
    //             status: "subscribed",
    //             merge_fields: {
    //                 FNAME: subscribingUser.firstName,
    //                 LNAME: subscribingUser.lastName
    //             },
    //         }
    //     );
    //
    //     //contact's id
    //     res.sendFile(__dirname, + "success.html")
    //     console.log('Successfully added contact as an audience member. The contact\'s id is ${\n' +
    //         ' response.id\n' +
    //         ' }.`')
    // }

    //Running the function and catching the errors (if any)
// ************************THIS IS THE CODE THAT NEEDS TO BE ADDED FOR THE NEXT LECTURE*************************
// So the catch statement is executed when there is an error so if anything goes wrong the code in the catch code is executed. In the catch block we're sending back the failure page. This means if anything goes wrong send the faliure page
    //run().catch(e => res.sendFile(__dirname + "/failure.html"));
});








//audience id
// 76ec4ab401

//api key
//3328cce4d3b754b8051afa41b973eefa-us14




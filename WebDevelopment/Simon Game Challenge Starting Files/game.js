//buttons
var buttonColours = ["red", "blue", "green", "yellow"];

//game pattern
var gamePattern = [];

//user clicked pattern
var userClickedPattern = [];

//started variable
var started = false;

//level variable
var level = 0;

//change the title
$(document).keypress(function () {
    if (!started) {
        $("#level-title").text("Level " + level);
        nextSequence();
        started = true;
    }
});

//random number function
$(".btn").click( function () {
    // store id button clicked
    var userChosenColour = $(this).attr("id");

    // add id to the user pattern
    userClickedPattern.push(userChosenColour);


    playSound(userChosenColour);

    animatePress(userChosenColour);

    checkAnswer(userClickedPattern.length-1);


});


//function to compare the answer
function checkAnswer(currentLevel) {


    if (gamePattern[currentLevel] === userClickedPattern[currentLevel]) {
        if (userClickedPattern.length === gamePattern.length) {
            setTimeout(function () {
                nextSequence();
            }, 1000);
        }
    } else {
        playSound("wrong");
        $("body").addClass("game-over");

        $("#level-title").text("Game Over, Press Any Key to Restart");


        setTimeout(function () {
            $("body").removeClass("game-over")
        }, 200);

        startOver();
    }

}

function startOver() {
    level = 0;
    gamePattern = [];
    started = false;
}

function nextSequence() {

    userClickedPattern = [];

    //increasing the variable level
    level ++;

    $("#level-title").text("Level " + level);

    // get the random number
    var randomNumber = Math.floor(Math.random()*4);

    //select the random number from button array
    var randomChosenColour= buttonColours[randomNumber];

    //add colour to game pattern array
    gamePattern.push(randomChosenColour);

    //select the same id as the array colour and flash
    $("#" + randomChosenColour).fadeIn(100).fadeOut(100).fadeIn(100);

    playSound(randomChosenColour);

    animatePress(randomChosenColour);

    return randomChosenColour;
}

function playSound(name) {
    //playing sound for the button collor selected
    var audio = new Audio("sounds/" + name + ".mp3");
    audio.play();
}


function animatePress(currentColour) {

    //will add a box shadow and changes the background colour to grey when the button is pressed.
    $("#" + currentColour).addClass("pressed");

    setTimeout(function () {
        $("#" + currentColour).removeClass("pressed")
    }, 100)
}
















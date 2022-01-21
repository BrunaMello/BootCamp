


function whoPaying() {

    var names = ["Angela", "Ben", "Jenny", "Michael", "Chloe"];

    var length = names.length;
    var randomNumber = Math.floor(Math.random() * length);
    var winner = names[randomNumber];
    console.log(randomNumber);

    return console.log(winner + " is going to buy lunch today!");

}

whoPaying();
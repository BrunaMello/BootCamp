var guessList = ["Angela", "Jack", "Pam", "James", "Lara", "Jameson"];

var name = "Pam";

function checkGuess(name) {
    var hello = " ";
    if (guessList.includes(name)){
        return hello = "Hello " + name + " welcome!";
    } else {
        return hello = "Ops, " + name + " I don't have your name here!";
    }
}

console.log(checkGuess(name));

var output = [];
var count = 1;

function fizzBuzz() {

    output.push(count);
    count++;

    console.log(output);
}

function fizzBuzzFor() {
    var fizz = "Fizz!";
    var buzz = "Buzz!";
    var fizzBuzz = "FizzBuzz!";

    for (let i = 0; i < 101; i++) {
        if (i % 3 === 0 && i % 5 !== 0){
            console.log(i + " " + fizz);
        } else if (i % 3 === 0 && i % 5 === 0){
            console.log(i + " " + fizzBuzz);
        } else if (i % 5 === 0 && i % 3 !== 0){
            console.log(i + " " + buzz);
        } else {
            console.log(i);
        }
    }
}

fizzBuzz();



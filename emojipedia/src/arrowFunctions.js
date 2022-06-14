var numbers = [3, 56, 2, 48, 5];

function square(x) {
    return x * x;
}

const newNumbers = numbers.map(function(x) {
    return x * x;
});

console.log(newNumbers);

//Arrow function

//with two variables need parenthesis
const newNumbersArrow = numbers.map((x, y) => {
    return x * x;
});


//with one variable don't need parenthesis
const newNumbersArrow1 = numbers.map( x => {
    return x * x;
});

//you can delete the return word and curl-braces
const newNumbersArrow2 = numbers.map( x => x * x );




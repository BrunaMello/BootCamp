function add(num1, num2){
    return num1 + num2;
}

function sub(num1, num2){
    return num1 - num2;
}

function multiply(num1, num2){
    return num1 * num2;
}

function divide(num1, num2){
    return num1 / num2;
}

function percent(num1, num2) {
    return (num2 / 100) * num1;
}

function calculator(num1, num2, operator){
    return operator(num1, num2);
}



console.log(calculator(718, 40, percent));


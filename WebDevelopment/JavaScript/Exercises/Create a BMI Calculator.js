// BMI = weight (kg) / height^2 (m)

var weight = 65;
var heigth = 1.8;

function bmiCalculator(weight,heigth) {
    return Math.round(weight / Math.pow(heigth, 2));
}

console.log("Your BMI is: " + bmiCalculator(weight, heigth));




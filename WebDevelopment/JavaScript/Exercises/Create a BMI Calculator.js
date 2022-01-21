// BMI = weight (kg) / height^2 (m)

var weight = 150;
var heigth = 1.8;

function bmiCalculator(weight,heigth) {

    var bmi = Math.round(weight / Math.pow(heigth, 2));
    var interpretation = "";


    if (bmi < 18.5){
        return interpretation = "Your BMI is: " + bmi + ", so you are underweigth";
    }else if (bmi > 18.5 && bmi < 24.9){
        return interpretation = "Your BMI is: " + bmi + ", so you have a normal weigth";
    }else if (bmi > 24.9){
        return interpretation = "Your BMI is: " + bmi + ", so you are overweigth";
    }
    return bmi;

}

console.log(bmiCalculator(weight, heigth));

// console.log("Your BMI is: " + bmiCalculator(weight, heigth));




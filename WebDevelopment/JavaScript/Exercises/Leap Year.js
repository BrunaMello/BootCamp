var year = 801;

function leapYear(year){
    var result = "";

    var resultBy4 = year % 4;
    var resultBy100 =  year % 100;
    var resultBy400 = year % 400;

    if (resultBy4 === 0 && resultBy100 === 0 && resultBy400 === 0){
        return result = "Leap year.";
    } else if (resultBy4 === 0 && resultBy100 !== 0) {
        return  result = "Leap year."
    } else {
        return  result = "Not leap year."
    }
}

console.log(leapYear(year));
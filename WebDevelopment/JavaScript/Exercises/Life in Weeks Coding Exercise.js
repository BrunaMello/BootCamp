function lifeInWeeks(age) {

    /************Don't change the code above************/

        //Write your code here.

    var dayLeft = ((365 * 90)- (365 * age));

    var weeksLeft = ((52 * 90) - (53 * age));

    var monthsInAYear = ((12 * 90) - (12 * age));


    alert("You have " +dayLeft+ " days, " +weeksLeft+ " weeks, and " +monthsInAYear+ " months left, ");
    /*************Don't change the code below**********/
}

var age = prompt("Type your age");

alert(lifeInWeeks(age));


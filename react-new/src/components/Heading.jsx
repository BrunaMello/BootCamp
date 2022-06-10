import React from "react";


function Heading() {
    const hour = new Date().getHours();
    var say;

    const customStyles = {
        color: "blue",
    }

    if (hour > 0 && hour < 12){
        say = "Good Morning!";
        customStyles.color = "red";
    } else if (hour > 12 && hour < 18 ) {
        say = "Good Afternoon!";
        customStyles.color = "green";
    } else if (hour > 18 && hour < 23){
        say = "Good Evening!";
        customStyles.color = "blue";
    } else {
        say = "Error";
        customStyles.color = "red";
    }


    return <h1 className="heading" style={customStyles}>{say}</h1> ;
}

export default Heading;
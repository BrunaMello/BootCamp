import React from "react";
import ReactDOM from "react-dom";

const hour = new Date().getHours();
const customStyles = {
    color: "yellow",
}

var say;

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


ReactDOM.render(
    <div>
        <h1 style={customStyles} className="heading">{say}</h1>


    </div>,
    document.getElementById("root")
);



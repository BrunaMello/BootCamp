import React from "react";
import ReactDOM from "react-dom";

const customStyles = {
    color: "blue",
    fontsize:"20px",
    border: "1px solid black",
}

customStyles.color = "red";


ReactDOM.render(
    <div>
        <h1 style={customStyles}> Hello Bruna</h1>

    </div>,
    document.getElementById("root")
);



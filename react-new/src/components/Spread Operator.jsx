import React from "react";

function SpreadOperator() {


    const citrus = ["Lime", "Lemon", "Orange"];
    const fruits = ["Apple", "Banana", "Coconut"];
    console.log(fruits);

    const fullName = {
        fName: "James",
        lName: "Bond"
    };

    const user = {
        ...fullName,
        id: 1,
        username: "jamesbond007"
    };

    console.log(user);


    return (
        <div>
            <h1>Spread Operator</h1>

        </div>
    )
};

export default SpreadOperator;
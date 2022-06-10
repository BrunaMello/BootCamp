import React from "react";
// import pi, {doublePi, triplePi} from "../math";
import * as math from "../math";
import {add, subtract, multiply, divide} from "../calculator";

function List() {
    return <div>
        <p>Pi Operations</p>
        <ul>
            <li>{math.default}</li>
            <li>{math.doublePi()}</li>
            <li>{math.triplePi()}</li>
        </ul>

        <p>Math Operations</p>
        <ul>
            <li>{add(1, 2)}</li>
            <li>{subtract(7, 2)}</li>
            <li>{multiply(3,2)}</li>
            <li>{divide(5,2)}</li>
        </ul>
    </div>
}

export default List;
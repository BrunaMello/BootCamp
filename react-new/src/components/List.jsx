import React from "react";
// import pi, {doublePi, triplePi} from "../math";
import * as math from "../math";

function List() {
    return <ul>
        <li>{math.default}</li>
        <li>{math.doublePi()}</li>
        <li>{math.triplePi()}</li>
    </ul>
}

export default List;
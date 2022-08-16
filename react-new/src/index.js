import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App";
import List from "./components/List";
import ES6 from "./components/ES6Destructuring";
import EventHandling from "./components/EventHandling";
import ReactForms from "./components/ReactForms";
import {createRoot} from "react-dom/client";
import ClassComponent from "./components/Class Component";
import SpreadOperator from "./components/Spread Operator";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
    <ReactForms />
);

// ReactDOM.render(
//     <ReactForms />,
//
//     document.getElementById("root"));


//Imperative Programming
//document.getElementById("root").style.textDecoration = "line-through";



import React from "react";
import ReactDOM from "react-dom";


// ReactDOM.render(<div><h1>Hello World!</h1><p>it is a paragraph</p></div>, document.getElementById('root'));

// ReactDOM.render(
//     <div>
//         <h1>My List</h1>
//         <ul>
//             <li>Firt</li>
//             <li>Second</li>
//             <li>Third</li>
//         </ul>
//     </div>, document.getElementById('root'))

const fName = 'Bruna';
const lName = 'Mello';

//ReactDOM.render(<div><h1>Hello {name}!</h1><p>it is a paragraph</p></div>, document.getElementById('root'));

// ReactDOM.render(
//     <div>
//         <h1>Hello {name}!</h1>
//         <p>Luck number: {Math.floor(Math.random() * 10)}</p>
//     </div>,
//     document.getElementById('root'));

// ReactDOM.render(
//     <div>
//         <h1>Hello {fName} {lName}!</h1>
//         <p>Luck number: {Math.floor(Math.random() * 10)}</p>
//     </div>,
//     document.getElementById('root'));


ReactDOM.render(
    <div>
        <h1 className="heading" contentEditable={true} spellCheck={true}>Created by {fName} {lName}</h1>
        <p>Copyright {new Date().getFullYear()}</p>
        <div>
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSLbyk2s7_Yyc0vzTRmDlPTBMJAXo-GjLKx9DDu_8RP1g&s"/>
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS6K_vYDisviIeacdi_G2t5LzGol_o27rivExNw7wtm&s"/>
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTN7lRtZUtoRxzoSMren-a-7U-ZQ84haHtZm3-OIIeN-A&s"/>
        </div>
    </div>,
    document.getElementById('root'));


